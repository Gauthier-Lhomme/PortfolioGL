import React from "react";
import emailjs from "emailjs-com";
import { Form, Input, Label, TextArea, InputSubmit,Contact, H1, LabelMessage } from "../styled-components/Contact";

export default function ContactUs() {
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
            <Input type="text" name="user_name" />
          </div>
          <div>
            <Label>Email</Label>
            <Input type="email" name="user_email" />
          </div>
          <div>
            <LabelMessage>Message</LabelMessage>
            <TextArea name="message" placeholder="Votre message" />
          </div>
          <div>
            <InputSubmit type="submit" value="Envoyer" />
          </div>
        </Form>
      </div>
    </div>
  );
}
