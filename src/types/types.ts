interface StockData {
    "#": string;
    "TRADING CODE": string;
    "NAME"?: string;
    "LTP*": string;
    "VOLUME": string;
    "HIGH"?: string;
    "LOW"?: string;
    "CLOSEP*"?: string;
    "YCP*"?: string;
    "CHANGE"?: string;
    "TRADE"?: string;
    "VALUE (mn)"?: string;
}
interface StockSummary {
    "Trading Code": string;
    "Name"?: string;
    "Past LTP": string;
    "Volume": string;
    "Past Valuation": number;
    "Current LTP": string;
    "Current Valuation": number;
    "Net P/L": number;
    "% P/L": string;
}