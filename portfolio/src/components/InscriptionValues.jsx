import { useState } from "react";

export default function InscriptionValues() {
  const [values, setValues] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { handleChange, values };
}
