import React, { useEffect, useState } from "react";
import axios from "axios";

const Feedbacks: React.FC = () => {
  const [media, setMedia] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get("/api/instagram-feed");
        console.log(data);
        setMedia(data.data);
      } catch (err) {
        console.error("Erro ao buscar dados do Instagram", err);
        setError("Erro ao buscar dados do Instagram");
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error && <p>{error}</p>}
      {media.map((item) => (
        <div key={item.id}>
          <a href={item.permalink} target="_blank" rel="noopener noreferrer">
            <img src={item.media_url} alt={item.caption || "Instagram media"} />
          </a>
          <p>{item.caption}</p>
        </div>
      ))}
    </div>
  );
};

export default Feedbacks;
