import "./App.css";
import EventsCards from "./components/EventsCards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import OfficialInvitation from "./components/OfficialInvitation";
import Sponsers from "./components/Sponsers";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <MainContent />
      <OfficialInvitation />
      <Sponsers />
      <EventsCards />
      <Footer />
    </div>
  );
}

export default App;
