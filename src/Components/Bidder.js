import React from 'react';

class Bidder extends React.Component {


    render () {
        const { bidder } = this.props;
        return (
            
            <div className="bidder">
                <p>{bidder.name}</p>
                <p>{bidder.bid}</p>
            </div>
            
        )
    }
}
    
export default Bidder;



