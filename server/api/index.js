import express from "express";
import cors from "cors";
import friends from "../routes/friends.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", friends);

// start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});