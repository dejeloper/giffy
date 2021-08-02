const api_key = 'fHPoWTCFAZ5pJwWHNp8WubDHbTWANcSK';

function getGifts({ keyword = 'anime girl', limit = '5' } = {}) {
  const api_url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${keyword}&limit=${limit}&offset=0&rating=g&lang=en`;
  return fetch(api_url)
    .then(res => res.json())
    .then(response => {
      const { data } = response;
      const gifts = data.map(image => {
        const { images, title, id } = image;
        const { url } = images.downsized_medium

        return { title, id, url }
      });
      return gifts;
    })
}

export default getGifts;