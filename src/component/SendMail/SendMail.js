import React from "react";
import CloseIcon from "@material-ui/icons/Close";
import { Button } from "@material-ui/core";
import "./SendMail.css";
function SendMail() {
  return (
    <div className="sendMail">
      <div className="sendMail__header">
        <h3>New Meesage</h3>
        <CloseIcon className="sendMail__close" />
      </div>
      <form>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <div className="sendMail__options">
          <Button
            className="sendMail__send"
            variant="contained"
            color="primary"
            type="submit"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMail;
