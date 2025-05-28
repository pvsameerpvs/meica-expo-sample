import Tile from "./Tile";

const ExhibitorsSection = () => {
  const exhibitors = Array(12).fill("");

  return (
    <div className="mb-10 m-5">
      <h2 className="text-teal-400 font-bold text-lg mb-4">Exhibitors</h2>
      <div className="grid grid-cols-4 ">
        {exhibitors.map((_, i) => (
          <Tile key={i} label="" />
        ))}
      </div>
    </div>
  );
};

export default ExhibitorsSection;
