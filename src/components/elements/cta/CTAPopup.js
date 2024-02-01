import React, { useState } from "react";
import { notification, Button } from "antd";
import { SmileOutlined, FrownOutlined } from "@ant-design/icons";

const CTAPopup = ({ onClose }) => {
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const handleEmailChange = (e) => {
    const email = e.target.value;
    setEmail(email);
    setIsEmailValid(emailRegex.test(email));
  };

  const openNotification = (type, message, description) => {
    notification[type]({
      message,
      description,
      icon: type === "success" ? <SmileOutlined style={{ color: "#108ee9" }} /> : <FrownOutlined style={{ color: "#ff4d4f" }} />,
    });
  };

  const sendEmail = (email) => {
    const body = JSON.stringify({ email });
    const headers = {
      "Content-Type": "application/json",
    };

    return fetch("https://prodapi.qtr.ai/api/mvp/mail/waitList", {
      //dev: https://api.qtr.ai/qtrapi
      method: "POST",
      headers: headers,
      body: body,
    });
  };

  const handleSubmit = () => {
    if (!isEmailValid || !email || email.length === 0) {
      return;
    }

    sendEmail(email)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log("Success:", data);
        openNotification("success", "We have you!", "Thanks for signing up. We'll let you know as soon as we have a slot open for you!");
      })
      .catch((error) => {
        console.error("Error:", error);
        openNotification("error", "Error", "There was an issue signing you up. Please try again later.");
      })
      .finally(() => {
        onClose();
      });
  };

  return (
    <div className="flex flex-col p-4 max-w-sm">
      <p className="mb-5 leading-tight text-lg">We have a short wait as we're onboarding people in small batches. Please enter your email address and we'll let you in very soon–promise!</p>
      <input type="email" value={email} onChange={handleEmailChange} className={`mb-4 px-3 py-2 border ${isEmailValid ? "border-gray-300" : "border-red-500"} rounded focus:outline-none focus:border-purple-700 text-lg`} placeholder="Your email" />
      {!isEmailValid && <p className="text-red-500 text-sm mb-5 -mt-2">Please enter a valid email address.</p>}
      <button onClick={handleSubmit} className="bg-purple-700 hover:bg-purple-800 text-white font-bold py-2 rounded text-lg">
        Join the waitlist
      </button>
    </div>
  );
};

export default CTAPopup;
