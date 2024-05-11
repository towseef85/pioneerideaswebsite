import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { translate } from "../../../utils/translate";
import managementClient from "../../../utils/contentfulManagementClient";
import { toast } from "react-toastify";

const ErrorMsg = ({ error }) => {
  return (
    <>
      <p style={{ color: "red" }}>{error}</p>
    </>
  );
};

export default function RegisterForm() {
  const registerSchema = Yup.object().shape({
    name: Yup.string().required().label("Name"),
    email: Yup.string().required().email().label("Email"),
    phoneNumber: Yup.string().required().label("phoneNumber"),
    entity: Yup.string().required().label("entity"),
    packages: Yup.string().required().label("packages"),
  });
  const handlePost = async (req) => {
    debugger;
    try {
      const { name, email, phoneNumber, time, entity, packages, date, notes } =
        req;

      const space = await managementClient.getSpace("doa3rjqnxh3m");
      const environment = await space.getEnvironment("master");

      const entry = await environment.createEntry("investqueries", {
        fields: {
          name: { "en-US": name },
          email: { "en-US": email || "" }, // Ensure email is optional
          phone: { "en-US": phoneNumber || "" },
          time: { "en-US": time || "" },
          date: { "en-US": date || "" },
          shareholdertype: { "en-US": entity || "" },
          package: { "en-US": packages || "" },
          notes: { "en-US": notes || "" },
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
  // use formik
  const { handleChange, handleSubmit, handleBlur, errors, values, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        phoneNumber: "",
        time: "",
        entity: "",
        packages: "",
        date: "",
        notes: "",
      },
      validationSchema: registerSchema,
      onSubmit: (values, { resetForm }) => {
        const result = handlePost(values);
        if (result) {
          toast.success(`${values.name} your message sent successfully`, {
            position: "top-left",
          });
          resetForm();
        } else {
          toast.error(`Unable to Post`, {
            position: "top-left",
          });
        }
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="tp-number">
        <label htmlFor="name">{translate("name")}</label>
        <input
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder={`${translate("pleaseenter")} ${translate("name")}`}
          id="name"
        />
        {touched.name && <ErrorMsg error={errors.name} />}
      </div>
      <div className="tp-mail">
        <label htmlFor="email">{translate("emailaddress")}</label>
        <input
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder={`${translate("pleaseenter")} ${translate(
            "emailaddress"
          )}`}
          id="email"
        />
        {touched.email && <ErrorMsg error={errors.email} />}
      </div>
      <div className="tp-number">
        <label htmlFor="phoneNumber">{translate("phone")}</label>
        <input
          value={values.phoneNumber}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder={`${translate("pleaseenter")} ${translate("phone")}`}
          id="phoneNumber"
        />
        {touched.phoneNumber && <ErrorMsg error={errors.phoneNumber} />}
      </div>
      <div className="tp-number">
        <label htmlFor="time">{translate("suitabletime")}</label>
        <input
          value={values.time}
          onChange={handleChange}
          onBlur={handleBlur}
          type="time"
          placeholder={translate("selecttime")}
          id="time"
        />
        {touched.time && <ErrorMsg error={errors.time} />}
      </div>
      <div className="tp-number">
        <label htmlFor="date">{translate("suitabledate")}</label>
        <input
          value={values.date}
          onChange={handleChange}
          onBlur={handleBlur}
          type="date"
          placeholder={translate("selectdata")}
          id="date"
        />
        {touched.date && <ErrorMsg error={errors.date} />}
      </div>
      <div className="tp-number">
        <label htmlFor="entity">{translate("shareholdertype")}</label>
        <select
          value={values.entity}
          onChange={handleChange}
          onBlur={handleBlur}
          id="entity"
        >
          <option value="">{translate("shareholdertype")}</option>
          <option value="Personal">{translate("personal")}</option>
          <option value="A Company">{translate("company")}</option>
          <option value="Institution">{translate("institute")}</option>
        </select>
        {touched.entity && errors.entity && <ErrorMsg error={errors.entity} />}
      </div>
      <div className="tp-number">
        <label htmlFor="packages">{translate("package")}</label>
        <select
          value={values.packages}
          onChange={handleChange}
          onBlur={handleBlur}
          id="packages"
        >
          <option value="">{translate("selectpackage")}</option>
          <option value="Bronze – 3000 shares">{translate("bonza")}</option>
          <option value="Silver – 6000 shares">{translate("silver")}</option>
          <option value="Golden – 12000 shares">{translate("golden")}</option>
          <option value="Open">{translate("open")}</option>
        </select>
        {touched.packages && errors.packages && (
          <ErrorMsg error={errors.packages} />
        )}
      </div>
      <div className="tp-number">
        <label htmlFor="name">{translate("notes")}</label>
        <textarea
          value={values.notes}
          onChange={handleChange}
          onBlur={handleBlur}
          type="text"
          placeholder={translate("notes")}
          id="notes"
        />
      </div>
      <div className="tp-login-button">
        <button className="tp-btn-yellow w-100" type="submit">
          {translate("submit")}
        </button>
      </div>
    </form>
  );
}
