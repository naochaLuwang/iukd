import Banner from "@/components/Banner";
import React from "react";
import ContactForm from "@/components/ContactForm";
import { BsFillTelephoneFill } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { MdLocationOn } from "react-icons/md";

export const metadata = {
  title: "Contact Us | IUKD",
};

const ContactPage = () => {
  const handleSubmit = (timeSlots: any) => {
    // Handle form submission and save the timeSlots to the MongoDB database
    console.log(timeSlots);
  };

  return (
    <div className="w-full h-auto">
      <Banner title="Contact Us" sublink="Contact Us" />
      <div className="grid w-full h-auto gap-6 py-20 mx-auto lg:grid-cols-2 grid-cols max-w-7xl">
        <div className="flex flex-col order-2 w-full h-auto px-4 space-y-3 lg:order-1 lg:px-0">
          <div className="flex items-center space-x-2">
            <BsFillTelephoneFill className="w-6 h-6 text-teal-600" />
            <p>+91 8822721671 / 9864104444</p>
          </div>

          <div className="flex items-center space-x-2">
            <HiMail className="w-6 h-6 text-teal-600" />
            <p>iukd.india@gmail.com</p>
          </div>

          <div className="flex items-center space-x-2">
            <MdLocationOn className="flex-shrink-0 w-6 h-6 text-teal-600" />
            <p>Kamarkuchi, NH27, Opp Sciency City, Sonapur, Assam 782402</p>
          </div>

          <div className="w-full h-auto mt-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3582.341765729731!2d91.91748857428674!3d26.12039737712834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375af38847b783f3%3A0xdf00d7ca7e88c4cd!2sInstitute%20of%20Urology%20and%20Kidney%20Diseases%20(IUKD)!5e0!3m2!1sen!2sin!4v1684237935141!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: "0px solid #07344e" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="flex flex-col order-1 w-full h-auto lg:order-2">
          <h1 className="text-2xl font-medium text-center">GET IN TOUCH</h1>
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
