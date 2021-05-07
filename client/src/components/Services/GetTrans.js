import axios from "axios";

const API_URL = "http://localhost:3000/api/transactions/";

const GetTrans = async (stuff) => {
  let cancelToken = axios.CancelToken;
  let source = cancelToken.source();
  try {
    const all = await axios.get(API_URL, {
      cancelToken: source.token,
      params: stuff,
    });
    return all.data.allUsersTrans;
  } catch (err) {
    return err;
  }
};

export default GetTrans;
