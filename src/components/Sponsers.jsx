import ExhibitorsSection from "./ExhibitorsSection";
import MediaPartnersSection from "./MediaPartnersSection";
import SponsorsSection from "./SponsorsSection";

export default function Sponsers() {
  return (
    <div className="min-h-screen bg-[#0A1E33] text-white m-5 rounded-xl font-sans">
      <h1 className="text-2xl font-bold text-teal-400 mb-2 m-5">
        OUR SPONSORS AND EXHIBITORS
      </h1>
      <p className="text-sm mb-6 max-w-xl m-5">
        Panel Topic: Future Directions: Shaping The Future Of Cybersecurity With
        Women At The Forefront
      </p>
      <div className="m-5">
        <SponsorsSection />
        <ExhibitorsSection />
        <MediaPartnersSection />
      </div>
    </div>
  );
}
