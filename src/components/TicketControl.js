import React, { useState } from 'react';
import NewTicketForm from './NewTicketForm';
import TicketList from './TicketList';
import EditTicketForm from './EditTicketForm';
import TicketDetail from './TicketDetail';

function TicketControl() {

  const [formVisibleOnPage, setFormVisibleOnPage] = useState(false);
  const [mainTicketList, setMainTicketList] = useState([]);

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     formVisibleOnPage: false,
  //     mainTicketList: [],
  //     selectedTicket: null,
  //     editing: false
  //   };
  // }
  
  const handleClick = () => {
    if (this.state.selectedTicket != null) {
      setFormVisibleOnPage(false);  
      this.setState({
        formVisibleOnPage: false,
        selectedTicket: null,
      });
    } else {
      setFormVisibleOnPage(!formVisibleOnPage);
    }
  }

  const handleDeletingTicket = (id) => {
    const newMainTicketList = this.state.mainTicketList.filter(ticket => ticket.id !== id);
    setMainTicketList(newMainTicketList);
  }

  const handleEditClick = () => {
    this.setState({editing: true});
  }

  const handleEditingTicketInList = (ticketToEdit) => {
    const editedMainTicketList = this.state.mainTicketList
      .filter(ticket => ticket.id !== this.state.selectedTicket.id)
      .concat(ticketToEdit);
    setMainTicketList(editedMainTicketList);
  }

  const handleAddingNewTicketToList = (newTicket) => {
    const newMainTicketList = this.state.mainTicketList.concat(newTicket);
    setMainTicketList(newMainTicketList);
    setFormVisibleOnPage(false)
  }

  const handleChangingSelectedTicket = (id) => {
    const selectedTicket = this.state.mainTicketList.filter(ticket => ticket.id === id)[0];
    this.setState({selectedTicket: selectedTicket});
  }

  
  let currentlyVisibleState = null;
  let buttonText = null; 
  if (this.state.editing ) {      
    currentlyVisibleState = <EditTicketForm ticket = {this.state.selectedTicket} onEditTicket = {this.handleEditingTicketInList} />
    buttonText = "Return to Ticket List";
  } else if (this.state.selectedTicket != null) {
    currentlyVisibleState = <TicketDetail 
    ticket={this.state.selectedTicket} 
    onClickingDelete={this.handleDeletingTicket}
    onClickingEdit = {this.handleEditClick} />
    buttonText = "Return to Ticket List";
  } else if (formVisibleOnPage) {
    currentlyVisibleState = <NewTicketForm onNewTicketCreation={this.handleAddingNewTicketToList}/>;
    buttonText = "Return to Ticket List"; 
  } else {
    currentlyVisibleState = <TicketList onTicketSelection={this.handleChangingSelectedTicket} ticketList={mainTicketList} />;
    buttonText = "Add Ticket"; 
  }
  
  return (
    <React.Fragment>
      {currentlyVisibleState}
      <button onClick={this.handleClick}>{buttonText}</button> 
    </React.Fragment>
  );
}

export default TicketControl;