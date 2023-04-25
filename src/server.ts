const { PORT = 6900 } = process.env;

const app = require("./app");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
