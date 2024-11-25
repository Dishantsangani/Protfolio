import { React, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { BlurText } from "../Animations/BlurText";
import phone from "../assets/phone.png";
function Contact() {
  const form = useRef();
  const [Fdata, setFdata] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState({}); // For validation error messages

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" && !/^\d*$/.test(value)) return;
    setFdata((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Validate on input change
    validateField(name, value);
  };

  // Validation logic
  const validateField = (name, value) => {
    let errorMsg = "";

    switch (name) {
      case "name":
        if (!value) errorMsg = "Name is required.";
        else if (value.length < 3)
          errorMsg = "Name must be at least 3 characters.";
        break;
      case "email":
        if (!value) errorMsg = "Email is required.";
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
          errorMsg = "Invalid email format.";
        break;
      case "phone":
        if (!value) errorMsg = "Phone number is required.";
        else if (!/^\d{10}$/.test(value))
          errorMsg = "Phone number must be 10 digits.";
        break;
      case "message":
        if (!value) errorMsg = "Message is required.";
        break;
      default:
        break;
    }

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: errorMsg, // Set specific error message
    }));
  };

  // Validate all fields before submitting
  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!Fdata.name || Fdata.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
      isValid = false;
    }

    if (!Fdata.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(Fdata.email)) {
      newErrors.email = "Valid email is required.";
      isValid = false;
    }

    if (!Fdata.phone || !/^\d{10}$/.test(Fdata.phone)) {
      newErrors.phone = "Phone number must be 10 digits.";
      isValid = false;
    }

    if (!Fdata.message) {
      newErrors.message = "Message is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("Form submitted:", Fdata);
      // Clear the form
      setFdata({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
      setErrors({});
    } else {
      console.log("Validation failed.");
    }

    emailjs
      .sendForm("service_r5737rq", "template_vqu0kxg", form.current, {
        publicKey: "xXm1Dy2ZY7QheJk4W",
      })
      .then(
        (res) => {
          console.log("Result", res);
        },
        (error) => {
          console.log("Error's", error);
        }
      );
  };

  return (
    <>
      <div className="bg-neutral-900">
        <div className="max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
          {/* Title */}
          <div className="max-w-3xl mb-10 lg:mb-14">
            <h2 className="text-white font-semibold text-2xl md:text-4xl md:leading-tight">
              <BlurText text="Contact us" className="custom-class" delay={40} />
            </h2>
            <p className="mt-1 text-neutral-400">Get in touch with us today!</p>
          </div>
          {/* End Title */}

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
            <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
              <form ref={form} onSubmit={handlesubmit}>
                <div className="space-y-4">
                  {/* name */}
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={Fdata.name}
                      onChange={handleChange}
                      // id="hs-tac-input-name"
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2"
                      placeholder="Name"
                    />
                    <label
                      htmlFor="hs-tac-input-name"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-neutral-400
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Name
                    </label>
                    {errors.name && (
                      <p className="text-red-500">{errors.name}</p>
                    )}
                  </div>
                  {/* End name */}

                  {/* email */}
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={Fdata.email}
                      onChange={handleChange}
                      // id="hs-tac-input-email"
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2"
                      placeholder="Email"
                    />
                    <label
                      htmlFor="hs-tac-input-email"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-neutral-400
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Email
                    </label>
                    {errors.email && (
                      <p className="text-red-500">{errors.email}</p>
                    )}
                  </div>
                  {/* End email */}

                  {/* Phone */}
                  <div className="relative">
                    <input
                      type="tel"
                      name="phone"
                      id="hs-tac-input-phone"
                      value={Fdata.phone}
                      onChange={handleChange}
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2"
                      placeholder="Phone"
                    />
                    <label
                      htmlFor="hs-tac-input-phone"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-neutral-400
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Phone
                    </label>
                    {errors.phone && (
                      <p className="text-red-500">{errors.phone}</p>
                    )}
                  </div>
                  {/* End Phone */}

                  {/* Textarea */}
                  <div className="relative">
                    <textarea
                      id="hs-tac-message"
                      name="message"
                      value={Fdata.message}
                      onChange={handleChange}
                      className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
            focus:pt-6
            focus:pb-2
            [&:not(:placeholder-shown)]:pt-6
            [&:not(:placeholder-shown)]:pb-2
            autofill:pt-6
            autofill:pb-2"
                      placeholder="This is a textarea placeholder"
                      defaultValue={""}
                    />
                    <label
                      htmlFor="hs-tac-message"
                      className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
              peer-focus:text-xs
              peer-focus:-translate-y-1.5
              peer-focus:text-neutral-400
              peer-[:not(:placeholder-shown)]:text-xs
              peer-[:not(:placeholder-shown)]:-translate-y-1.5
              peer-[:not(:placeholder-shown)]:text-neutral-400"
                    >
                      Enter Message
                    </label>
                    {errors.message && (
                      <p className="text-red-500">{errors.message}</p>
                    )}
                  </div>
                  {/* End Textarea */}
                </div>

                <div className="mt-2">
                  <p className="text-xs text-neutral-500">
                    All fields are required
                  </p>
                  <p className="mt-5">
                    <a className="group inline-flex items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-neutral-800 rounded-full focus:outline-none">
                      <input type="submit" value="Send" />

                      <svg
                        className="flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0"
                        xmlns="http://www.w3.org/2000/svg"
                        width={24}
                        height={24}
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </a>
                  </p>
                </div>
              </form>
            </div>
            {/* End Col */}
            <div className="space-y-14">
              {/* address */}
              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx={12} cy={10} r={3} />
                </svg>
                <div className="grow">
                  <h4 className="text-white font-semibold">Our address:</h4>
                  <address className="mt-1 text-neutral-400 text-sm not-italic">
                    Nikol, Ahmedabad.
                  </address>
                </div>
              </div>
              {/* End address */}

              {/* email */}
              <div className="flex gap-x-5">
                <svg
                  className="flex-shrink-0 size-6 text-neutral-500"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                  <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
                </svg>
                <div className="grow">
                  <h4 className="text-white font-semibold">Email us:</h4>
                  <p className="mt-1 text-neutral-400 text-sm">
                    devsangani168@gmail.com
                  </p>
                </div>
              </div>
              {/* End email */}

              {/* Phone */}
              <div className="flex gap-x-5">
                <img
                  src={phone}
                  className="flex-shrink-0 size-7 text-neutral-500"
                  alt="phone"
                  width={32}
                  height={32}
                  viewBox="0 0 32 32"
                />

                <div className="grow">
                  <h4 className="text-white font-semibold">Phone :</h4>
                  <p className="mt-1 text-neutral-400">+91 9173623532</p>
                </div>
              </div>
              {/* End Phone */}
            </div>
            {/* End Col */}
          </div>
          {/* End Grid */}
        </div>
      </div>
    </>
  );
}

export default Contact;
