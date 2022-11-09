import express, { Express, Request, Response } from "express";

const app: Express = express();
const PORT = 8001 || process.env.PORT;

app.get("/", (req: Request, res: Response) => {
   res.json({message: "Index page using TS"})
});

app.listen(PORT, () => {
    console.log(`Application running at localhost: ${PORT}`);
})

