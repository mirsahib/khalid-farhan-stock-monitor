import { createDbConnection, readData } from "@/database/DBOperation"



export async function GET() {
    try {
        const db = await createDbConnection()
        if (!db) throw new Error('No db connection')
        const stockData = await readData(db)
        return Response.json({ message: "success", data: stockData })
    } catch (error) {
        return Response.json({ message: "failed", error: error })
    }
}