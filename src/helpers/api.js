import axios from "axios";

const BASE_URL = "http://www.omdbapi.com";
const BASE_KEY = "7266c883";

const getMovieInformation = async (searchText) => {
  try {
    const response = await axios.get(`${BASE_URL}?apikey=${BASE_KEY}&s=${searchText}`);
    console.log(response);
    return response?.data;
  } catch (error) {
    console.log(error);
  }
};

export default getMovieInformation;
