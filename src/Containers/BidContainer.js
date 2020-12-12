import React from 'react';
import Bidder from '../Components/Bidder'
import NewBidderForm from '../Components/NewBidderForm'

class BidContainer extends React.Component {

    state = {
        api: []
    }
    
    componentDidMount() {
        fetch("http://localhost:8000/bidders")
        .then(resp => resp.json())
        .then(data => this.setState( {api: data.sort( (a, b) => parseInt(b.bid) - parseInt(a.bid) )}))
    }

    handleNewBid = (bidObj) => {
        fetch("http://localhost:8000/bidders", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            
          },
          body: JSON.stringify(bidObj)
        })
        .then(resp => resp.json())
        .then(newBid => this.setState({ api: [...this.state.api, newBid]}))
      }
      
    renderBidders = () => {
        let filteredArray = this.state.api
        return filteredArray.map(el => <Bidder key={el.id} bidder={el} />)
    }

    render() {
        return (
            <div className="bid-container">
                <h2>Bids</h2>
                {this.renderBidders()}
                <NewBidderForm handleNewBid={this.handleNewBid}/>
            </div>
        )
    }
}

export default BidContainer