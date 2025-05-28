import Tile from "./Tile";

const SponsorsSection = () => {
  const sponsors = Array(6).fill("GOLD SPONSOR");

  return (
    <div className="mb-10 m-5">
      <h2 className="text-teal-400 font-bold text-lg mb-4">Sponsors</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {sponsors.map((s, i) => (
          <Tile key={i} label={s} />
        ))}
      </div>
    </div>
  );
};

export default SponsorsSection;
