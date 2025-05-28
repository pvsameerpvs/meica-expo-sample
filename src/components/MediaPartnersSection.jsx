import Tile from "./Tile";

const MediaPartnersSection = () => {
  const media = Array(8).fill("");

  return (
    <div className="m-5 mb-10">
      <h2 className="text-teal-400 font-bold text-lg mb-4">Media Partners</h2>
      <div className="grid grid-cols-4">
        {media.map((_, i) => (
          <Tile key={i} label="" />
        ))}
      </div>
    </div>
  );
};

export default MediaPartnersSection;
