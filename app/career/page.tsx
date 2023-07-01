"use client";

import Banner from "@/components/Banner";
import axios from "axios";
import { useState, ChangeEvent, FormEvent } from "react";

const IndexPage: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cover, setCover] = useState("");
  const [pdfFile, setPdfFile] = useState<File | null>(null);

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setPdfFile(file || null);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Create a FormData object to store form data
    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("cover", cover);
    if (pdfFile) {
      formData.append("pdfFile", pdfFile);
    }

    console.log(formData);

    // Send the form data as an email
    axios
      .post("/api/sendemail", formData)
      .then(() => {
        console.log("Message sent successfully");
      })
      .catch((error) => {
        console.log("Error sending message");
      });
  };

  return (
    <div className="w-full h-auto">
      <Banner title="Careers" sublink="careers" />
      <div className="flex flex-col w-full max-w-6xl py-20 mx-auto">
        <h1 className="mb-5 font-medium ">
          Thank you for your interest in working with us. Send Us your
          application by filling out the application form . we will get in touch
          with you shortly
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-medium">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full p-2 border rounded-md"
              value={name}
              onChange={handleNameChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border rounded-md"
              value={email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-medium">
              Mobile No:
            </label>
            <input
              type="text"
              id="phone"
              className="w-full p-2 border rounded-md"
              value={phone}
              onChange={handlePhoneChange}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pdf" className="block mb-2 font-medium">
              CV
            </label>
            <input
              type="file"
              id="pdf"
              className="w-full p-2 border rounded-md"
              accept="application/pdf"
              onChange={handleFileChange}
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-medium">
              Cover letter:
            </label>
            <textarea
              id="cover"
              className="w-full p-2 border rounded-md"
              value={cover}
              rows={10}
              onChange={(e) => setCover(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default IndexPage;
