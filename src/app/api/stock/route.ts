import { createDbConnection, insertData } from "@/database/DBOperation"
import axios from "axios";
import { load } from "cheerio";
import fs from 'fs'
export async function GET() {
    try {
        const db = await createDbConnection()
        if (!db) throw new Error('No db connection')
        const filePath = 'cache.json'
        const current_timeStamp = new Date().getTime()
        let stockData = null
        if (!fs.existsSync(filePath)) {
            console.log("🚀 ~ GET ~ cache don't exist")
            stockData = await getStockData()
            await fs.promises.writeFile(filePath, JSON.stringify({ "date": current_timeStamp, data: stockData }))
            insertData(db, stockData)
        } else {
            console.log("🚀 ~ GET ~ cache  exist")
            const data = await fs.promises.readFile(filePath, 'utf8')
            const prev_timeStamp = JSON.parse(data).date
            console.log("🚀 ~ GET ~ prev_timeStamp:", prev_timeStamp)
            if (areTimestamps24HoursApart(current_timeStamp, prev_timeStamp)) {
                console.log("🚀 ~ GET ~ cache  old update")
                stockData = await getStockData()
                await fs.promises.writeFile(filePath, JSON.stringify({ "date": current_timeStamp, data: stockData }))
                insertData(db, stockData)
            } else {
                stockData = JSON.parse(data).data
            }
        }
        return Response.json({ message: "success", data: stockData, timestamp: current_timeStamp })
    } catch (error) {
        return Response.json({ message: "failed", error: error })
    }

}

function areTimestamps24HoursApart(timestamp1: number, timestamp2: number) {
    const millisecondsInOneDay = 24 * 60 * 60 * 1000; // 24 hours * 60 minutes * 60 seconds * 1000 milliseconds

    // Calculate the absolute difference in milliseconds between the two timestamps
    const timeDifference = Math.abs(timestamp1 - timestamp2);

    // Convert the time difference to hours
    const timeDifferenceInHours = timeDifference / millisecondsInOneDay;

    // Check if the time difference is approximately 24 hours

    console.log("🚀 ~ areTimestamps24HoursApart ~ timeDifferenceInHours:", Math.abs(timeDifferenceInHours - 24) < Number.EPSILON)
    return Math.abs(timeDifferenceInHours - 24) < Number.EPSILON; // Use Number.EPSILON to handle floating-point arithmetic errors
}

async function getStockData() {
    const url = "https://www.dsebd.org/latest_share_price_scroll_l.php";
    const stocks = {
        ORIONPHARM: "Orion Pharma Ltd",
        PTL: "Paramount Insurance Company Ltd",
        ACI: "ACI Limited",
        IFADAUTOS: "IFAD Autos Limited",
        SUMITPOWER: "Summit Power Limited",
        BSCCL: "Bangladesh Submarine Cable Company Limited",
        SAIFPOWER: "SAIF Powertec Limited",
        WALTONHIL: "Walton Hi-Tech Industries Ltd",
        SQURPHARMA: "Square Pharmaceuticals Ltd",
    };
    const response = await axios.get(url)
    const $ = load(response.data);
    const tableRows = $("table.shares-table tbody tr");
    //@ts-ignore
    const stockData: StockData[] = [];
    tableRows.each((index, element) => {
        const columns = $(element).find("td");
        const tradingCode = $(columns[1]).find("a").text().trim();
        //@ts-ignore
        if (stocks[tradingCode]) {
            const stockInfo = {
                "#": $(columns[0]).text().trim(),
                "TRADING CODE": tradingCode,
                "LTP*": $(columns[2]).text().trim(),
                HIGH: $(columns[3]).text().trim(),
                LOW: $(columns[4]).text().trim(),
                "CLOSEP*": $(columns[5]).text().trim(),
                "YCP*": $(columns[6]).text().trim(),
                CHANGE: $(columns[7]).text().trim(),
                TRADE: $(columns[8]).text().trim(),
                "VALUE (mn)": $(columns[9]).text().trim(),
                VOLUME: $(columns[10]).text().trim(),
            };
            stockData.push(stockInfo);
        }

    })
    return stockData
}