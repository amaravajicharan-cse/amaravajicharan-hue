let express = require('express');
let mongoose = require('mongoose');
let employeeRoutes = require('./models/routes/emp_route');
let app = express();

app.use(express.json());
app.use('/api/employees', employeeRoutes);

async function startServer() {
    let mongoUri = process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/hrmanagement";
    await mongoose.connect(mongoUri);
    console.log("connected to MongoDB");

    let port = process.env.PORT || 3000;
    app.listen(port, () => {
        console.log(`server started at port ${port}`);
    });
}

startServer().catch((error) => {
    console.error("failed to start server:", error.message);
    process.exit(1);
});

