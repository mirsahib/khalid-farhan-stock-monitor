import { createDbConnection, insertData } from "@/database/DBOperation"
import axios from "axios";
import { load } from "cheerio";
export async function GET() {
    try {
        const db = await createDbConnection()
        if (!db) throw new Error('No db connection')

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
        //@ts-ignore
        console.log("🚀 ~ GET ~ stockData:", stockData)
        insertData(db, stockData)
        return Response.json({ message: "success" })
    } catch (error) {
        return Response.json({ message: "failed", error: error })
    }

}
