import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditTicketForm (props) {
  return (
    <React.Fragment>
      <ReusableForm 
        buttonText="Update Ticket" />
    </React.Fragment>
  );
}

EditTicketForm.propTypes = {
  ticket: PropTypes.object,
  onEditTicket: PropTypes.func
};

export default EditTicketForm;