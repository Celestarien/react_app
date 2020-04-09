import axios from "axios";

const apiKey = "46a90fc8552f8562d902b260f25ed692";

/*
  Problème :
[
  {
    "title": "Unauthorized",
    "status": 401,
    "cause": "Invalid User key or no user key",
    "details": "Place your key in the header of the requests ex: \"user-key\": YOURKEY"
  }
]
*/

const ApiHelper = {
  search: searchText => {
    const url = `https://api-v3.igdb.com/games?user-key=${apiKey}`;
    return axios.get(url);
  }
};

export default ApiHelper;
