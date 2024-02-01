import React from "react";
import "./Privacy.css"; // Tailwind CSS will be applied, ensure this file imports Tailwind CSS

const Privacy = () => {
  return (
    <div className="about min-h-screen py-12">
      <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
      <div className="mx-auto max-w-2xl space-y-6 text-left text-lg">
        <p>Your privacy is critically important to us at QTR. In alignment with our commitment to your privacy, we conduct our operations in accordance with the principles outlined below:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>Respect for your Privacy:</strong> We respect your privacy regarding any information we may collect while operating our website, https://qtr.ai, and other sites we own and operate.
          </li>
          <li>
            <strong>Collection of Information:</strong> We only collect personal information by fair and lawful means, with your knowledge and consent. We also clearly state the reasons for collecting this information and how it will be used.
          </li>
          <li>
            <strong>Use and Retention of Information:</strong> The information collected is retained only as long as necessary to provide you with your requested service. We safeguard the data stored with commercially acceptable means to prevent loss, theft, unauthorized access, disclosure, copying,
            use, or modification.
          </li>
          <li>
            <strong>Sharing of Information:</strong> We do not share any personally identifying information publicly or with third parties, except as required by law.
          </li>
          <li>
            <strong>External Links:</strong> Our website may link to external sites not operated by us. We have no control over the content and practices of these sites and cannot accept responsibility or liability for their privacy policies.
          </li>
          <li>
            <strong>Your Rights:</strong> You have the right to refuse our request for your personal information, understanding that we may be unable to provide some of your desired services. Your continued use of our website signifies your acceptance of our privacy and personal information
            practices.
          </li>
          <li>
            <strong>Inquiries and Contact:</strong> For any questions about how we handle user data and personal information, feel free to contact us.
          </li>
          <li>
            <strong>Google API Services Compliance:</strong> In compliance with the Google API Service User Data Policy, we disclose that our application accesses, uses, stores, and shares Google user data in a manner consistent with this policy. Any use of Google user data obtained from Restricted
            and Sensitive Scopes complies with the Limited Use Policy. For details, see the{" "}
            <a href="https://developers.google.com/terms/api-services-user-data-policy" className="text-blue-900 hover:underline">
              Google API Services User Data Policy
            </a>
            . Our use and transfer of information received from Google APIs to any other app will adhere to this Policy, including the Limited Use requirements.
          </li>
          <li>
            Our application collects information from all calendars associated with your Google account, including the events within those calendars. The purpose of this data collection is to provide visibility to already scheduled events on your Google calendar and to schedule QTR events on your
            Google calendar. This is part of our commitment to enhancing your ability to manage your time effectively by displaying events, sending reminders, and improving overall productivity.
          </li>
          <li>
            We are committed to ensuring that you have full control over your data and how it is utilized within our services. You have the ability to manage the permissions granted to the QTR app for each calendar or Google account, allowing you to control how your calendar data is accessed and
            used by our application.
          </li>
        </ul>
        <p>This policy is effective as of 19 April 2023.</p>
      </div>
    </div>
  );
};

export default Privacy;
