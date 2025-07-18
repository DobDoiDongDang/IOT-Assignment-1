import { Hono } from "hono";
import { cors } from "hono/cors";
import apiRouter from "./routes/api.js";
import { handle } from "hono/vercel";

const app = new Hono().basePath("/api");
const mainpage = new Hono();

app.use(
  "*",
  cors({
    origin: "http://localhost:5173",
    allowHeaders: ["Content-Type"],
    allowMethods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  })
);
mainpage.get('/', (c) => {
  return c.json({ message : "oi No page here but you can look at /api/students for students data" })
})


app.route("/", apiRouter);

export const config = {
  runtime: "edge",
};

export default handle(app);
