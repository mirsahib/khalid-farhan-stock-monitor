import React from "react";
import { calculateProfitAndLoss } from "@/utils/calculateProfitAndLoss";
type AppTableProps = {
    Stock: StockData[];
    CurrentStock: StockData[];
};
function AppTable({ Stock, CurrentStock }: AppTableProps) {
    const stockSummary = calculateProfitAndLoss(Stock, CurrentStock);
    return (
        <table className="min-w-full bg-white border border-gray-300 shadow-md">
            <thead className="bg-blue-500 text-white">
                <tr>
                    <th className="py-2 px-4 border">Trading Code</th>
                    <th className="py-2 px-4 border">Name</th>
                    <th className="py-2 px-4 border">Buy</th>
                    <th className="py-2 px-4 border">Volume</th>
                    <th className="py-2 px-4 border">Past Valuation</th>
                    <th className="py-2 px-4 border">Current LTP</th>
                    <th className="py-2 px-4 border">Current Valuation</th>
                    <th className="py-2 px-4 border">Net P/L</th>
                    <th className="py-2 px-4 border">% P/L</th>
                </tr>
            </thead>
            <tbody>
                {stockSummary.map((stock) => (
                    <tr key={stock["Trading Code"]}>
                        <td className="py-2 px-4 border text-left">
                            {stock["Trading Code"]}
                        </td>
                        <td className="py-2 px-4 border text-left">
                            {stock["Name"]}
                        </td>
                        <td className="py-2 px-4 border text-left">
                            {stock["Past LTP"]}
                        </td>
                        <td className="py-2 px-4 border text-left">
                            {stock["Volume"]}
                        </td>
                        <td className="py-2 px-4 border text-left">
                            {stock["Past Valuation"]}
                        </td>
                        <td className="py-2 px-4 border text-left">
                            {stock["Current LTP"]}
                        </td>
                        <td className="py-2 px-4 border text-left">
                            {stock["Current Valuation"]}
                        </td>
                        <td className="py-2 px-4 border text-left">
                            {stock["Net P/L"]}
                        </td>
                        <td className="py-2 px-4 border text-left">
                            {stock["% P/L"]}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default AppTable;
