import DetailCard from "../DetailCard/DetailCard.js";



const Gallery = ({ pokemonData }) => {
  return (
    <div className="gallery">
        <h1>Gallery</h1>
      {pokemonData.length
        ? pokemonData.map((item) => {
            return <DetailCard name={item.name} url={item.url} />;
          })
        : null}
    </div>
  );
};

export default Gallery;
