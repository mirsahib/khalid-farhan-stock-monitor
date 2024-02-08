

export function calculateProfitAndLoss(pastData: StockData[], currentData: StockData[]): StockSummary[] {
    const stockSummary: StockSummary[] = [];

    pastData.forEach((pastStock, index) => {
        const currentStock = currentData[index];

        const pastValuation = parseFloat(pastStock["LTP*"]) * parseInt(pastStock["VOLUME"], 10);
        const currentValuation = parseFloat(currentStock["LTP*"]) * parseInt(pastStock["VOLUME"], 10);

        const netProfitLoss = currentValuation - pastValuation;
        const percentageProfitLoss = ((netProfitLoss / pastValuation) * 100).toFixed(2);

        const summary: StockSummary = {
            "Trading Code": pastStock["TRADING CODE"],
            "Name": pastStock["NAME"], // You can replace this with the actual name if available
            "Past LTP": pastStock["LTP*"],
            "Volume": pastStock["VOLUME"],
            "Past Valuation": pastValuation,
            "Current LTP": currentStock["LTP*"],
            "Current Valuation": currentValuation,
            "Net P/L": netProfitLoss,
            "% P/L": `${percentageProfitLoss}%`,
        };

        stockSummary.push(summary);
    });

    return stockSummary;
}