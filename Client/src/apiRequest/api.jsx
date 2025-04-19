import axios from "axios";

const BaseURL = "http://localhost:3030/api";

export async function getAllDoctors() {
  let res = await axios.get(BaseURL + "/getAllDoctors");
  if (res.status === 200) {
    return res.data.result.data;
  } else {
    return [];
  }
}

