const challenges = [

    {
        id: 1,

        challenge:
            "Keeping all transaction data available without an internet connection.",

        solution:
            "Implemented SQLite with a Repository Pattern to provide fast local CRUD operations while keeping the UI completely independent from the database."
    },

    {
        id: 2,

        challenge:
            "Generating daily, weekly, monthly, yearly, and custom date reports efficiently.",

        solution:
            "Developed reusable filtering logic that generates reports dynamically based on the selected date range."
    },

    {
        id: 3,

        challenge:
            "Allowing users to safely migrate or backup their financial records.",

        solution:
            "Implemented Excel Import and Export functionality, enabling complete backup and restoration of transaction history."
    },

    {
        id: 4,

        challenge:
            "Maintaining a scalable project structure while adding new features.",

        solution:
            "Separated the application into Presentation, Provider, Repository, and Database layers to improve maintainability and future scalability."
    }

];

export default challenges;