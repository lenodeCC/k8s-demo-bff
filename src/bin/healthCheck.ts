import axios from "axios";

let url: string;
if (process.env.PORT) {
  url = isNaN(Number(process.env.PORT))
    ? `http://${process.env.PORT}`
    : `http://127.0.0.1:${process.env.PORT}`;
} else {
  url = "http://127.0.0.1:3000";
}

axios
  .get(url, { timeout: 10000 })
  .then(() => {
    process.exit();
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
