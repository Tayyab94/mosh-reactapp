import logo from "./logo.svg";
import "./App.css";
import Counters from "./Components/counters";
import Nabvar from "./Components/navbar";
import React, { Component } from "react";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 3 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
      { id: 5, value: 0 },
    ],
  };

  handleIncrement = (currentCounter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(currentCounter);
    counters[index] = { ...currentCounter };
    counters[index].value++;

    this.setState({ counters: counters });
  };

  handleDelete = (id) => {
    const current = this.state.counters.filter((s) => s.id !== id);

    this.setState({ counters: current });
  };

  handleReset = () => {
    const counter = this.state.counters.map((s) => {
      s.value = 0;
      return s;
    });

    this.setState({ counters: counter });
  };

  render() {
    return (
      <>
        <Nabvar
          totalCounter={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
          />
        </main>
      </>
    );
  }
}

export default App;
