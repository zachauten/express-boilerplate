import http from "http";

http.get("http://localhost:8080/health", res => {
  const { statusCode } = res;
  if (statusCode !== 200) {
    res.resume();
    throw Error(`Status code: ${statusCode}`);
  }
}).on("error", err => {
  console.error(err.message);
  process.exit(1);
});
