const Trans = require("../models/transactionModel");

module.exports = {
  newTrans: async (req, res) => {
    try {
      const { title, description, value, date, filter, id } = req.body;
      if (!title || !value) {
        return res
          .status(400)
          .json({ msg: "Not all required fields were entered" });
      }
      if (!date || !id) {
        res.status(401).json({
          msg:
            "Something might be wrong, please contact developers via contact page to report problem.",
        });
      }

      const newTrans = new Trans({
        title,
        description,
        value,
        date,
        filter,
        id,
      });

      const savedTrans = await newTrans.save();
      res.json(savedTrans);
    } catch (err) {
      console.log("new transaction err", err);
      res.status(500).json({ msg: err });
    }
  },
  getAll: async (req, res) => {
    try {
      const id = req.body;
      if (!id) {
        res.status(400).json({
          msg:
            "No data has been returned. You either are not logged in or do not have any transactions saved.",
        });
      }

      const exsistingId = await Trans.findOne({ id: id });
      if (!exsistingId) {
        res.status(401).json({
          msg:
            "No data has been returned. You either are not logged in or do not have any transactions saved.",
        });
      }

      const allUsersTrans = await Trans.find(
        { id: exsistingId },
        (err, data) => {
          if (err) {
            console.log("allUsersTrans:", err);
          } else {
            return data;
          }
        }
      );

      res.json(allUsersTrans);
    } catch (err) {
      console.log(err);
    }
  },
};
