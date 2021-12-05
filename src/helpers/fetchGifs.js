export const fetchGifs = async (query) => {
  const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(
    query
  )}&limit=10&api_key=c50DwY20F9H8c5ch4mY0oGwQc7PsM60A`;
  const response = await fetch(url);
  const { data } = await response.json();
  return data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.original.url,
    };
  });
};
