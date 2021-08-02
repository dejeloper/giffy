import React, { useState, useEffect } from 'react';
import Gif from '../Components/Gifts';
import getGifts from '../Services/getGifts';

function ListOfGifts({ params }) {
  const { keyword } = params;
  const limit = 10;

  const [loading, setLoading] = useState(false);

  const [gifts, setGifts] = useState([]);
  useEffect(() => {
    setLoading(true);
    getGifts({ keyword, limit })
      .then(gifts => {
        setGifts(gifts);
        setLoading(false);
      });
  }, [keyword, limit])

  if (loading) return <h1>Cargando imagenes...</h1>

  return <div>
    {
      gifts.map(({ id, title, url }) =>
        <Gif
          key={id}
          id={id}
          title={title}
          url={url}></Gif>
      )
    }
  </div>
}

export default ListOfGifts;