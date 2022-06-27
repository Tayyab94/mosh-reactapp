import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: this.props.counter.value,
    tags: ["Tag1", "Tag2", "Tag3"],
  };

  //   handleIncrement = () => {
  //     this.setState({ count: this.state.count + 1 });
  //   };
  reeturnTags() {
    if (this.state.tags.length === 0) return <p>No Tag exist</p>;

    return (
      <ul>
        {this.state.tags.map((rag) => (
          <li key={rag}>{rag}</li>
        ))}
      </ul>
    );
  }
  render() {
    return (
      <div>
        <span className={this.getBadgeClass()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onhandleIncrement(this.props.counter)}
        >
          Increment Button
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        {/* <ul>{this.reeturnTags()}</ul> */}
      </div>
    );
  }

  formatCount() {
    const count = this.props.counter.value;

    return count === 0 ? "Zero" : count;
  }

  getBadgeClass() {
    let badgetClass = "badge m-2 text-bg-";
    return (badgetClass +=
      this.props.counter.value === 0 ? "danger" : "primary");
  }
}

export default Counter;
