require("dotenv").config();
const cors = require("cors");
const express = require("express");

const app = express();

const PORT = process.env.PORT || 8080;

const allowedOrigins = [process.env.FRONTEND_URL, process.env.ALT_FRONTEND_URL];
app.use(express.json());
app.use(express.static("../public/"));
app.use(cors({ origin: allowedOrigins }));

const projectRoutes = require("../routes/project-routes");
app.use("/api/projects", projectRoutes);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
