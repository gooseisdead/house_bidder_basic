import React from "react";

class NewBidderForm extends React.Component {

  state = {
    name: '',
    bid: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  localHandleNewBid = (event) => {
    this.props.handleNewBid(this.state)
    this.setState({
      name: '',
      bid: ''
    })
  }


  render() {
    return (
      <form className="new-bid-form" onSubmit={this.localHandleNewBid}>
        <input placeholder="Name" name="name" value={this.state.name} onChange={this.handleChange}/>
        <br></br>
        <input placeholder="Bid" name="bid" value={this.state.bid} onChange={this.handleChange}/>
        <br></br>
        <input type="submit" value="Submit Bid" />
      </form>
    );
  }
}

export default NewBidderForm;
