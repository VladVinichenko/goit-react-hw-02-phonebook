import Section from "./components/Section/Section";
import React, { Component } from "react";
import { Fragment } from "react/cjs/react.production.min";
import Phonebook from "./components/Phonebook/Phonebook";

class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  // 'Makaley CredentialsContainer', 'Miki Rurk', 'Kris Evans', 'Lolo Siju', 'Mitsuoka Katayo', 'Pokrishkin Alexey'
  onAddContact = () => {
    this.setState(prevState => {

    })
  }

  render() {
    return (
      <Fragment>
        <Section>
          <Phonebook onAddContact={this.onAddContact} />
        </Section>
      </Fragment>
    )
  }
}
export default App