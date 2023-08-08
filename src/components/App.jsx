import { Component } from 'react';
import { ContactList } from './ContactList/ContactList';
import { ContactForm } from './Form/Form';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts')
    if (savedContacts !== null) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
      return
    }
    this.setState({
      contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
    });
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts))
    }
  }
  
  addContact = (newContact) => {
      const verification = this.state.contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (verification) {
      alert(`${newContact.name} is already in contacts`);
      return;
    }
    const newContactId = { id: nanoid(), ...newContact}
    this.setState(prevState => ({
      contacts: [...prevState.contacts, newContactId],
    }));
  };

  onFilter = ({ target: { name, value } }) => {
    this.setState({
      [name]: value,
    });
  };

  filterContacts = () => {
    if (!this.state.filter) {
      return this.state.contacts;
    }
    return this.state.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(this.state.filter.toLowerCase().trim());
    });
  };

  onDelete = evtId => {
    this.setState({
      contacts: this.state.contacts.filter(({ id }) => id !== evtId),
    });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm onFormSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter onInput={this.onFilter} />
        <ContactList
          filtered={this.filterContacts()}
          onDelete={this.onDelete}
        />
      </>
    );
  }
}
