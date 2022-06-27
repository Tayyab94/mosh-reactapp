import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  //   state = {
  //     counters: [
  //       { id: 1, value: 3 },
  //       { id: 2, value: 0 },
  //       { id: 3, value: 0 },
  //       { id: 4, value: 0 },
  //       { id: 5, value: 0 },
  //     ],
  //   };

  //   handleIncrement = (currentCounter) => {
  //     const counters = [...this.state.counters];
  //     const index = counters.indexOf(currentCounter);
  //     counters[index] = { ...currentCounter };
  //     counters[index].value++;

  //     this.setState({ counters: counters });
  //   };

  //   handleDelete = (id) => {
  //     const current = this.state.counters.filter((s) => s.id !== id);

  //     this.setState({ counters: current });
  //   };

  //   handleReset = () => {
  //     const counter = this.state.counters.map((s) => {
  //       s.value = 0;
  //       return s;
  //     });

  //     this.setState({ counters: counter });
  //   };

  render() {
    const { onDelete, onIncrement, onReset, counters } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-sm btn-info m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onDelete={onDelete}
            onhandleIncrement={onIncrement}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
