import axios from "axios";

const getPostsData = async () => {
  const requestmethod = {
    method: "GET",
    headers: {},
  };

  try {
    const res = await axios(
      "https://jsonplaceholder.typicode.com/posts",
      requestmethod
    );
    return res.data;
  } catch (e) {
    throw e.response.data;
  }
};

export const homeServices = { getPostsData };
