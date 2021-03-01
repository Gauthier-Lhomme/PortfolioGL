import React from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Form,
  Input,
  Label,
  TextArea,
  InputSubmit,
  Contact,
  H1,
  LabelMessage,
} from "../styled-components/Contact";
import InscriptionValues from "./InscriptionValues";

export default function ContactUs() {
  const { handleChange, values } = InscriptionValues();

  const notify = () => {
    if (
      values.user_name === "" ||
      values.user_email === "" ||
      values.message === ""
    ) {
      toast.error("Champs requis avant envoi", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    } else {
      toast.success("Message envoyé", {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ywk1h7t",
        "template_vwnoyp8",
        e.target,
        "user_SPwiVl831VGUFz3qYLWlC"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      <Contact>
        <H1>Contact</H1>
      </Contact>
      <div>
        <Form className="contact-form" onSubmit={sendEmail}>
          <div>
            <input type="hidden" name="contact_number" />
          </div>
          <div>
            <Label>Nom</Label>
            <Input
              type="text"
              name="user_name"
              required
              value={values.user_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              name="user_email"
              required
              value={values.user_email}
              onChange={handleChange}
            />
          </div>
          <div>
            <LabelMessage>Message</LabelMessage>
            <TextArea
              name="message"
              placeholder="Votre message"
              required
              value={values.message}
              onChange={handleChange}
            />
          </div>
          <div>
            <InputSubmit onClick={notify} type="submit" value="Envoyer" />
            <ToastContainer />
          </div>
        </Form>
      </div>
    </div>
  );
}
