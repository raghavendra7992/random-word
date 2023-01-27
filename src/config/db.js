const { connect } = require("mongoose");

const connection = () => {
  return connect(
    `mongodb+srv://r:r@cluster0.rgobshm.mongodb.net/raghav?retryWrites=true&w=majority`
  );
};

module.exports = connection;