import Section from "./components/Section/Section";
import React, { Component } from "react";
import { nanoid } from "nanoid";
import { Fragment } from "react/cjs/react.production.min";
import Phonebook from "./components/Phonebook/Phonebook";

class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''
  }
  // 'Makaley CredentialsContainer', 'Miki Rurk', 'Kris Evans', 'Lolo Siju', 'Mitsuoka Katayo', 'Pokrishkin Alexey'
  onAddContact = (evt) => {
    evt.preventDefault()
    if (this.state.name.trim().length > 0) {
      this.setState(prevState => {
        const contacts = [...prevState.contacts]
        contacts.push({ name: this.state.name, number: this.state.number })
        return { contacts: contacts }
      })
    }
  }

  onInput = (evt) => {
    const data = {}
    data[evt.target.name] = evt.target.value
    this.setState(data)
  }

  render() {
    return (
      <Fragment>
        <Section>
          <Phonebook onAddContact={this.onAddContact} state={this.state} onInputName={this.onInput} onInputTel={this.onInput} />
        </Section>
      </Fragment>
    )
  }
}
export default App