import React from "react";

const OfficialInvitation = () => {
  return (
    <main className="px-20 py-4 mt-32">
      <div className="text-right" data-aos="fade-right">
        <h2 className="text-[40px] text-primary font-bold mb-2">
          OFFICIAL INVITATION
        </h2>
        <h2 className="ttext-[40px] text-primary mb-10">
          MEICA EXPO 2025 6TH EDITION
        </h2>
      </div>
      <div
        className="bg-[#10a2c9] bg-opacity-[16%] rounded-2xl relative p-10 text-sm uppercase"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <div className="max-w-[60%]">
          {" "}
          On behalf of the Executive Committee, I would like to invite you to
          attend and participate at the 6th Annual Middle East Instrumentation
          Cybersecurity and Automation Expo. The event is scheduled to take
          place on 16th – 18th September 2025 in Abu Dhabi, UAE. The upcoming
          event will gather the technical experts from all over the world to
          discuss the latest technology related to Instrumentation Control,
          Industrial Cybersecurity and Process Automation from various
          Industries to network with key industry peers. The forum will enhance
          communication and help in exchanging knowledge between the major
          stakeholders.{" "}
          <p className="mt-3">
            On behalf of the Executive Committee, I would like to invite you to
            attend and participate at the 6th Annual Middle East Instrumentation
            Cybersecurity and Automation Expo. The event is scheduled to take
            place on 16th – 18th September 2025 in Abu Dhabi, UAE. The upcoming
            event will gather the technical experts from all over the world to
            discuss the latest technology related to Instrumentation Control,
            Industrial Cybersecurity and Process Automation from various
            Industries to network with key industry peers. The forum will
            enhance communication and help in exchanging knowledge between the
            major stakeholders.
          </p>
        </div>
        <div className="bg-primary rounded-2xl w-[250px] h-[250px] text-primary absolute top-5 right-10 ">
          .
        </div>
        <div>
          <img
            src="/assets/arab-photo.png"
            alt="arab-photo"
            className="absolute -top-10 right-10  w-[200px] "
          ></img>
        </div>
        <div className="bg-white rounded-2xl absolute -bottom-0 right-0 w-[300px] h-[50%] p-3 ">
          <div className="uppercase font-bold text-primary">
            Salem Al Bloosh
          </div>
          <div className="uppercase text-secondary">
            Manager Industrial Maintenance (Instrumentation)
          </div>
          <div className="uppercase font-bold text-primary">
            Adnoc Distribution
          </div>
        </div>
      </div>
    </main>
  );
};

export default OfficialInvitation;
