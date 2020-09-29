const express = require('express');

const PORT = process.env.PORT || 3004;
const app = express();
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}!`);
});
