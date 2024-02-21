const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
function main() {
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

    axios
        .get(url)
        .then((response) => {
            const tableData = [];
            const $ = cheerio.load(response.data);
            const tableRows = $("table.shares-table tbody tr");
            const stockData = [];
            tableRows.each((index, element) => {
                const columns = $(element).find("td");
                const tradingCode = $(columns[1]).find("a").text().trim();

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
            });
            // fs.writeFileSync("stockData.json", JSON.stringify(stockData));
        })
        .catch((err) => {
            console.log(err);
        });
}

main();
