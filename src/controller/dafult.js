const getdefault = (req, res) => {
  res.send("hai from default controller");
};
const getjson = (req, res) => {
  res
    .status(200)
    .json({ message: "hai from default controller in json format" });
};
const geterror = (req, res) => {
  res.status(500).json({ error: "Internal Server Error" });
};
module.exports = { getdefault, getjson, geterror };
