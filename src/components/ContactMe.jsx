import React, { useRef, useState } from "react";
import { Element } from "react-scroll";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    enquiryType: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      from_enquiryType: formData.enquiryType,
      from_telephone: formData.telephone,
      message: formData.message,
    };

    emailjs
      .send(
        "service_s5bxbhv",
        "template_azimi",
        templateParams,
        "dVD8L1dU9BePkuToR"
      )
      .then(
        () => {
          setFormData({
            name: "",
            email: "",
            telephone: "",
            enquiryType: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <Element name="contactMe" className="section">
      <div className="w-full mt-20">
        <form
          ref={form}
          autoComplete="off"
          autoCorrect="off"
          onSubmit={handleSubmit}
          method="post"
          id="contact_form"
        >
          <div className="name">
            <label htmlFor="name"></label>
            <input
              type="text"
              placeholder="My name is"
              name="name"
              id="name_input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="email">
            <label htmlFor="email"></label>
            <input
              type="email"
              placeholder="My e-mail is"
              name="email"
              value={formData.email}
              onChange={handleChange}
              id="email_input"
              required
            />
          </div>
          <div className="telephone">
            <label htmlFor="name"></label>
            <input
              autoComplete="new-password"
              type="text"
              placeholder="My number is"
              name="telephone"
              value={formData.telephone}
              onChange={handleChange}
              id="telephone_input"
              required
            />
          </div>
          <div className="subject">
            <label htmlFor="subject"></label>
            <select
              name="enquiryType"
              value={formData.enquiryType}
              onChange={handleChange}
              placeholder="Subject line"
              id="subject_input"
              required
            >
              <option value={""} disabled hidden defaultChecked>
                Subject line
              </option>
              <option value="Project">I'd like to start a project</option>
              <option value="Question">I'd like to ask a question</option>
              <option value="Proposal">I'd like to make a proposal</option>
            </select>
          </div>
          <div className="message">
            <label htmlFor="message"></label>
            <textarea
              autoComplete="off"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="I'd like to chat about"
              id="message_input"
              cols="30"
              rows="5"
              required
            ></textarea>
          </div>
          <div className="submit">
            <input type="submit" value="Send Message" id="form_button" />
          </div>
        </form>
      </div>
    </Element>
  );
};

export default ContactMe;
