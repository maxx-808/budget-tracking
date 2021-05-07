import axios from "axios";

const API_URL = "http://localhost:3000/api/transactions/";

const GetTrans = async (userId) => {
  try {
    const all = await axios.get(API_URL, userId);
    if (!all) {
      return null;
    }
    return all.data;
  } catch (err) {
    return err;
  }
};

export default GetTrans;
