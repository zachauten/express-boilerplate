import http from "http";

http.get({
  host: "0.0.0.0",
  port: 8080,
  path: "/health",
}, res => {
  const { statusCode } = res;
  if (statusCode !== 200) {
    res.resume();
    throw Error(`Status code: ${statusCode}`);
  }
}).on("error", err => {
  console.error(err.message);
  process.exit(1);
});
