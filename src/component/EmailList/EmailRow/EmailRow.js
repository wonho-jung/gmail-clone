import { Checkbox, IconButton } from "@material-ui/core";
import { LabelImportantOutlined, StarBorderOutlined } from "@material-ui/icons";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { selectedMail } from "../../../features/mailSlice";
import "./EmailRow.css";

function EmailRow({ id, title, subject, desc, time }) {
  const history = useHistory();
  const dispatch = useDispatch();

  const openMail = () => {
    dispatch(
      selectedMail({
        id,
        title,
        subject,
        desc,
        time,
      })
    );
    history.push("/mail");
  };
  return (
    <div>
      <div onClick={openMail} className="emailRow">
        <div className="emailRow__options">
          <Checkbox />
          <IconButton>
            <StarBorderOutlined />
          </IconButton>
          <IconButton>
            <LabelImportantOutlined />
          </IconButton>
        </div>
        <h3 className="emailRow__title">{title}</h3>
        <div className="emailRow__message">
          <h4>
            {subject} <span className="emailRow__description">{desc}</span>
          </h4>
        </div>
        <p className="emailRow__time">{time}</p>
      </div>
    </div>
  );
}

export default EmailRow;
