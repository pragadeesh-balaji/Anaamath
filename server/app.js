import { createServer } from "node:http";

const app = createServer((req, res) => {
  res.writeHead(200, "success", { "content-type": "text/plain" });
  res.end("server is working");
});

app.listen(5000, "localhost", () => {
  console.log("Server is running at port 5000");
});
