import Section from "./components/Section/Section";
import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Phonebook from "./components/Phonebook/Phonebook";
import { nanoid } from "nanoid";

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
    name: '',
    number: '',
    filterInput: ''
  }
  onAddContact = (evt) => {
    evt.preventDefault()
    if (this.state.name.trim().length > 0) {
      this.setState(prevState => {
        const contacts = [...prevState.contacts]
        contacts.push({ name: this.state.name, number: this.state.number, id: nanoid() })
        return { contacts: contacts }
      })
    }
  }

  onDeleteContact = (evt) => {
    const newContacts = []
    this.state.contacts.map(cont => { if (cont.id !== evt.target.parentElement.id) newContacts.push(cont) })
    this.setState({ contacts: newContacts })
  }

  onInput = (evt) => {
    const data = {}
    data[evt.target.name] = evt.target.value
    this.setState(data)
  }

  onFilterChange = () => {
    this.setState(prevState => {
      if (prevState.filterInput.trim().length > 0) {
        const newContacts = []
        prevState.contacts.map(cont => { if (cont.name.toLowerCase().includes(prevState.filterInput.toLowerCase())) newContacts.push(cont) })
        console.log(newContacts);
        return { filter: newContacts }
      }
      return { filter: '' }
    })
  }

  onInputFilter = (evt) => {
    this.setState({ filterInput: evt.target.value })
    this.onFilterChange()
  }

  render() {
    const renderList = this.state.filterInput.length > 0 ? this.state.filter : this.state.contacts
    return (
      <Fragment>
        <Section>
          <Phonebook onAddContact={this.onAddContact} onInputName={this.onInput} onInputTel={this.onInput} onInputFilter={this.onInputFilter} onDeleteContact={this.onDeleteContact} renderList={renderList} />
        </Section>
      </Fragment>
    )
  }
}
export default App