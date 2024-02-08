import AppTable from "@/components/AppTable";
import StockBought from "@/mock/buyStock.json";
import StockData from "@/mock/stockData.json";
export default function Home() {
    return (
        <main className="flex container mx-auto justify-center items-center">
            {/* <div>main</div> */}
            <AppTable Stock={StockBought} CurrentStock={StockData} />
        </main>
    );
}
