import React from "react";

const MainContent = () => {
  return (
    <main className="p-4 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:px-32 uppercase text-primary">
        <div className="content-1 col-span-1 text-light" data-aos="fade-left">
          <h2 className="text-[30px]  mb-2 max-w-[300px]">
            MIDDLE EAST{" "}
            <div className="font-bold">
              {" "}
              INSTRUMENTATION, CYBERSECURITY & AUTOMATION{" "}
            </div>
            <div>EXPO</div>
          </h2>
        </div>
        <div className="content-2 col-span-3" data-aos="fade-left">
          <p>
            MEICA EXPO 2025 was the first Instrumentation Control and Automation
            Expo in Middle East. The event will feature technologies from GCC
            and all over the world that will help Oil & Gas Producers, Power
            Generators etc. to enhance and Improve Process Efficiency, Safety
            and inculcate better cybersecurity practices.{" "}
          </p>
          <p className="mt-10">
            MEICA EXPO 2025 in it's 6th edition has become a high-net-worth
            technical expo with the latest innovations available in the market
            to showcase the importance of the current need today and to adapt
            the best practices to benchmark the cost-effective methods that will
            enlighten the end users and operators. The expo will provide a
            platform to connect with both regional and international experts,
            focusing on all aspects of production, manufacturing and processing
            entities in the wider world.
          </p>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
