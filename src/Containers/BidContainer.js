import React from 'react';
import Bidder from '../Components/Bidder'

class BidContainer extends React.Component {

    state = {
        api: []
    }
    
    componentDidMount() {
        fetch("http://localhost:8000/bidders")
        .then(resp => resp.json())
        .then(data => this.setState({ api: data}))
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
            </div>
        )
    }
}

export default BidContainer