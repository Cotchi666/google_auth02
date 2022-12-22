const baseUrl = process.env.TMDB_BASE_URL;
const key = process.env.TMDB_KEY;
//return api url
const getUrl = (endpoint, params) => {
  const qs = new URLSearchParams(params);
  console.log("qs", `${baseUrl}${endpoint}?api_key=${key}&${qs}`);
  return `${baseUrl}${endpoint}?api_key=${key}&${qs}&with_genres=16
`;
};

export default { getUrl };
