import React from "react";
import styles from "./EmailSummary.module.css";
import { useNavigate, useParams } from "react-router-dom";
import emails from "../../data/messages.json";
import { Email } from "../../types/Email";
import { Link } from "react-router-dom";

const filterEmail = (emails: Email[], folder: string) => {
  return emails.filter((email) => email.folder);
};

const EmailSummary = () => {
  const { folder } = useParams();
  const navigate = useNavigate();
  const chooseInbox = (id: string) => {
    navigate(id);
  };
  return (
    <div>
      {folder ? (
        <div style={{ height: "100vh", textAlign: "center" }}>
          {filterEmail(emails, folder).map((email, index) => (
            <div key={index}>
              <Link to={email.id} key={email.id}>
                GOto {email.id}
              </Link>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>Please choose a folder</p>
        </div>
      )}
    </div>
  );
};

export default EmailSummary;
