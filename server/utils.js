const { createHash } = require("crypto");

const hash = (input) => {
    return createHash("sha256").update(input).digest("hex");
};

module.exports = {
    hash,
};
