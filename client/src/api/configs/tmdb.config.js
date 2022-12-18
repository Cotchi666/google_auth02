const mediaType = {
  movie: "movie",
  tv: "tv",
};

const mediaCategory = {
  popular: "popular",
  top_rated: "top_rated",
};
const backdropPath =
  (imgEndPoint = `https://iamge.tmdb.org/t/p/original${imgEndPoint}`);
const posterPath =
  (imgEndPoint = `https://iamge.tmdb.org/t/p/w500${imgEndPoint}`);
const youtubePath = (videoID = `https://www.youtube.com/watch?v=${videoID}`);

const tmdbConfigs = {
  mediaCategory,
  backdropPath,
  posterPath,
  youtubePath,
  mediaType,
};
export default tmdbConfigs;
