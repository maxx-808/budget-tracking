import axios from "axios";

const API_URL = "http://localhost:3000/api/transactions/new/";

const NewTrans = async (form) => {
  try {
    const newTrans = await axios.post(API_URL, form);
    return newTrans.data;
  } catch (err) {
    return err;
  }
};

export default NewTrans;
