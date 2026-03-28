import ContactUs from "@/components/ContactUs";
import React from "react";
import { Meteors } from "@/components/ui/meteors";

const page = () => {
  return (
    <div className="relative overflow-hidden">
      <Meteors number={20} />
      <ContactUs />
    </div>
  );
};

export default page;
