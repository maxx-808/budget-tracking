import axios from "axios";

const API_URL = "http://localhost:3000/api/auth/";

const VerifyUser = async (code) => {
  try {
    const verify = await axios.post(API_URL + "confirm/" + code);

    return verify.data;
  } catch (err) {
    return err;
  }
};

export default VerifyUser;
