# Khalid Farhan's Stock Portfolio Monitor

This project is a Next.js application designed to scrape the stock prices of assets owned by Khalid Farhan, a popular YouTuber and digital marketing expert. The aim of the project is to monitor his stock portfolio in real-time.

## Project Description

Khalid Farhan's Stock Portfolio Monitor is a web application built using Next.js. It utilizes web scraping techniques with Cheerio to extract real-time stock prices from DSE stock websites. The scraped data is then stored and managed using MongoDB. Users can access the application to view the current value of Khalid Farhan's stock portfolio and track changes over time.

## Technologies Used

-   **Next.js**: A React framework for building server-rendered applications.
-   **Cheerio**: A fast, flexible, and lean implementation of jQuery designed for server-side scraping.
-   **MongoDB**: A NoSQL database used for storing and managing the scraped stock data.

## Installation

1. Clone the repository:

    ```bash
    git clone <repository-url>
    cd khalid-farhan-stock-monitor
    ```

2. install the dependencies:

    ```bash
    npm install
    ```

3. Database setting:

-   Set up MongoDB:
-   Install MongoDB on your system if you haven't already.
-   Start MongoDB service.
-   Configure MongoDB connection in the project.
-   You can skip the above and create a mongodb cluster from mongodb.com
-   insert the cluster uri in the by renaming the env file to .env

4. Run the application:

    ```bash
    npm run dev
    ```

## Usage

1. Access the application in your web browser at http://localhost:3000.
2. View Khalid Farhan's stock portfolio and monitor real-time stock prices.

## API Documentation

### `/api/stock`

| Description      | This endpoint handles a GET request to retrieve the stock price for the current date. |
| ---------------- | ------------------------------------------------------------------------------------- |
| Method           | GET                                                                                   |
| Parameters       | None                                                                                  |
| Response         |                                                                                       |
|                  | - **Status Code**: 200 OK                                                             |
|                  | - **Content-Type**: application/json                                                  |
|                  |                                                                                       |
| Example Response | `json {"symbol": "AAPL", "price": 135.25, "date": "2024-04-28"}`                      |
| Error Responses  | - **Status Code**: 404 Not Found                                                      |
|                  | - If the stock price for the current date is not available.                           |

### `/api/stocks`

| Description      | This endpoint handles a GET request to retrieve all stock prices from the last date for database insertion to the current date.      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Method           | GET                                                                                                                                  |
| Parameters       | None                                                                                                                                 |
| Response         |                                                                                                                                      |
|                  | - **Status Code**: 200 OK                                                                                                            |
|                  | - **Content-Type**: application/json                                                                                                 |
|                  |                                                                                                                                      |
| Example Response | `json [{"symbol": "AAPL", "price": 135.25, "date": "2024-04-27"}, {"symbol": "GOOGL", "price": 2750.36, "date": "2024-04-27"}, ...]` |
| Error Responses  | - **Status Code**: 404 Not Found                                                                                                     |
|                  | - If stock prices from the last date to the current date are not available.                                                          |

## Future Features

### 1. Implementing Scheduled Data Updates with Cron Job

To ensure that the data is updated regularly, regardless of user visits, implementing a cron job is essential. This will enable automatic updating of stock prices at specified intervals. Cron jobs can be set up to run scripts or commands at predefined times or intervals. For example, you could schedule a cron job to fetch updated stock data every day at midnight.

### 2. Adding Charts for Detailed Stock Performance

Enhancing the user experience by visualizing stock performance data through charts can provide valuable insights. Integrate charting libraries such as Chart.js to display graphical representations of stock price trends, historical data, and performance metrics. This will allow users to analyze and interpret stock data more effectively, aiding in informed decision-making.

Feel free to expand upon these future features with additional details, implementation plans, or any other relevant information.

## Contributing

I highly encourage beginner developers to explore future enhancements. It could be your first open-source contribution. Please feel free to fork the project and open a pull request.

## Disclaimer

The stock prices retrieved by this project are sourced from public records, and Khalid Farhan himself has publicly disclosed his portfolio in a YouTube video. Therefore, the information presented in this project is publicly available and does not violate any laws or regulations. However, if any legal concerns arise, the author has the rights to take down the project upon notification.

## License

This project is licensed under the MIT License.
