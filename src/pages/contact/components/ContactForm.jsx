import React, { useState } from "react";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import * as Yup from "yup";
import managementClient from "../../../utils/contentfulManagementClient";
import { translate } from "../../../utils/translate";

const ErrorMsg = ({ error }) => {
  return (
    <>
      <p style={{ color: "red" }}>{error}</p>
    </>
  );
};

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const handlePost = async (req) => {
    debugger;
    try {
      const { name, email, message } = req;

      const space = await managementClient.getSpace("doa3rjqnxh3m");
      const environment = await space.getEnvironment("master");

      const entry = await environment.createEntry("contactqueries", {
        fields: {
          name: { "en-US": name },
          email: { "en-US": email || "" }, // Ensure email is optional
          message: { "en-US": message || "" },
        },
      });

      await entry.publish();
      const published = await entry.isPublished();
      return published;
      //res.status(200).json({ message: 'Message sent successfully' });
    } catch (error) {
      console.error("Failed to post message", error);
      return false;
    }
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    message: Yup.string().required().min(5).label("Message"),
  });
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: { name: "", email: "", message: "" },
      validationSchema: contactSchema,
      onSubmit: (values, { resetForm }) => {
        setLoading(true);
        const result = handlePost(values);
        if (result) {
          toast.success(`${values.name} your message sent successfully`, {
            position: "top-left",
          });
          resetForm();
          setLoading(false);
        } else {
          toast.error(`Unable to Post`, {
            position: "top-left",
          });
        }
      },
    });
  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <div className="mb-30">
        <input
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          name="name"
          type="text"
          placeholder={`${translate("pleaseenter")} ${translate("name")}`}
        />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>
      <div className="mb-30">
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          name="email"
          type="email"
          placeholder={`${translate("pleaseenter")} ${translate(
            "emailaddress"
          )}`}
        />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className="mb-30">
        <textarea
          value={values.message}
          onChange={handleChange}
          onBlur={handleBlur}
          name="message"
          placeholder={`${translate("pleaseenter")} ${translate("message")}`}
        ></textarea>
        {touched.message && <ErrorMsg error={errors.message} />}
      </div>
      <button type="submit" className="tp-btn-yellow">
        {translate("submit")}
      </button>
    </form>
  );
}
