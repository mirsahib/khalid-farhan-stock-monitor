import { MongoClient } from "mongodb"


export const insertData = async (client: MongoClient, data: StockData[]) => {
    const dataset = { date: new Date(), data }
    const database = client.db("khalid-maklul-portfolio")
    const stock_data = database.collection("stock_data")
    const result = await stock_data.insertOne(dataset)
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
}

export const createDbConnection = async () => {
    const mongouri = process.env.MONGODB_URI
    try {
        if (!mongouri) throw Error('no mongo uri')
        const client = new MongoClient(mongouri)
        await client.connect()
        return client
    } catch (error) {
        console.log("🚀 ~ createDbConnection ~ error:", error)
    }
}