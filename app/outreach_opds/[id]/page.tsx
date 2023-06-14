import React from "react";

const opdList = [
  {
    date: "2023-06-15",
    doctorId: "123",
    opdlists: [
      {
        id: "1",
        name: "John Doe",
        location: "Hospital A",
        timing: "9:00 AM - 11:00 AM",
      },
      {
        id: "1",
        name: "Jane Smith",
        location: "Hospital B",
        timing: "10:00 AM - 12:00 PM",
      },
      {
        id: "1",
        name: "David Johnson",
        location: "Clinic C",
        timing: "2:00 PM - 4:00 PM",
      },
    ],
  },
];

const OpdDetails = () => {
  return (
    <div>
      <h1>OPD Details Page</h1>
    </div>
  );
};

export default OpdDetails;
