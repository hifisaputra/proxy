// import express, { type Request, type Response } from "express";
// import cors from "cors";
// import bodyParser from "body-parser";

// const ENDPOINT = "https://api.test.paysafe.com/paymenthub/v1";
// const app = express();

// app.use(cors());
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.post("/proxy", async (req: Request, res: Response) => {
//   const data = req.body;
//   const url = `${ENDPOINT}/${data.endpoint}`;
//   const token = req.headers.authorization?.split(" ")[1];

//   console.log("Proxy request", data, token);

//   const response = await fetch(url, {
//     method: "POST",
//     body: JSON.stringify(data.body),
//     headers: {
//       "Content-Type": "application/json",
//       Accept: "application/json",
//       Authorization: `Basic ${token}`,
//     },
//   });

//   const responseData = await response.json();

//   res.json({ message: "API Call Success", data: responseData });
// });

// const PORT: number = process.env.PORT ? parseInt(process.env.PORT) : 4000;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });
