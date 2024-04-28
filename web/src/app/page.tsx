"use client";
import AppTable from "@/components/AppTable";
import StockBought from "@/mock/buyStock.json";
import { useEffect, useState } from "react";
import Spinner from "@/components/Spinner";
export default function Home() {
    const [data, setData] = useState<StockData[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const res = await fetch("/api/stock", {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });
                const data = await res.json();
                setData(data.data);
                console.log("🚀 ~ fetchData ~ data:", data);
            } catch (error) {
                setError("something went wrong");
                console.log("🚀 ~ fetchData ~ error:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <main className="flex container mx-auto justify-center items-center">
            {loading ? (
                <Spinner />
            ) : (
                <AppTable Stock={StockBought} CurrentStock={data} />
            )}
        </main>
    );
}
