import React from "react";

const EventsCards = () => {
  return (
    <div className="p-8 bg-gray-100">
      <h1 className="text-right text-4xl font-bold mb-8 uppercase text-primary">
        MEICA AT A GLANCE
      </h1>

      <div className="grid grid-cols-5 auto-rows-[150px] gap-4">
        {[...Array(7)].map((_, i) => {
          // Assign classes conditionally based on the tile index
          let tileSpanClass = "";
          switch (i + 1) {
            case 3:
              tileSpanClass = "col-span-1 row-span-2";
              break;
            case 5:
              tileSpanClass = "col-span-2 row-span-1";
              break;
            default:
              tileSpanClass = "col-span-1 row-span-1";
          }

          return (
            <div
              key={i}
              className={`bg-gray-300 rounded-lg ${tileSpanClass}`}
            ></div>
          );
        })}
      </div>

      <div>
        <img src="/assets/footer-curved-image.png" alt="Footer Decoration" />
      </div>
    </div>
  );
};

export default EventsCards;
