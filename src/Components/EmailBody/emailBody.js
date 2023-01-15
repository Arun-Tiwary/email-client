import React from "react";
import BodyCard from "../BodyCard/bodyCard";

import EmailCard from "../EmaiilCard/emailCard";

const EmailBody = () => {
  return (
    <div className="EmailBody">
      <div className="email-list">
        <EmailCard />
        <EmailCard />
        <EmailCard />
        <EmailCard />
        <EmailCard />
        <EmailCard />
        <EmailCard />
        <EmailCard />
        <EmailCard />
        <EmailCard />
        <EmailCard />
        <EmailCard />
        <EmailCard />
        <EmailCard />
        <EmailCard />
      </div>
      <div className="template-body">
        <BodyCard />
      </div>
    </div>
  );
};

export default EmailBody;
