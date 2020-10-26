import React from 'react'

export class DinnerVote extends React.Component {
        
    
    constructor(props) {
        super(props);
        this.state = {
            names: [
                {name:'Porkloin', id:1, votes: 0, img: 'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/11/12/0/FN_Ann-Burrell-Roasted-Pork-Loin-with-Cider-and-Chunky-Applesauce_s4x3.jpg.rend.hgtvcom.616.462.suffix/1371611631966.jpeg'}, 
                {name:'Steak', id:2, votes: 0, img: 'https://hips.hearstapps.com/del.h-cdn.co/assets/18/08/1519155106-flank-steak-horizontal.jpg?resize=480:*' }, 
                {name:'Sushi', id:3, votes: 0, img: 'https://media.istockphoto.com/photos/all-you-can-eat-sushi-picture-id1053854126?k=6&m=1053854126&s=612x612&w=0&h=4H9Iz5i30CKoxU8kRKbPayV3FtQYtL19_iwPgCYLfzs=', }, 
            ]
        }
    }

    

    handleAdd(i) {
        const current = [...this.state.names]
        const foodItem = current[i]
        current[i] = {...foodItem, votes: foodItem.votes + 1}
        this.setState({names: current})
    }
    
    handleDelete(i) {
        const current = [...this.state.names]
        const foodItem = current[i]
        current[i] = {...foodItem, votes: foodItem.votes - 1}
        this.setState({names: current})
    }

    handleReset(i) {
        const current = [...this.state.names]
        const foodItem = current[i]
        current[i] = {...foodItem, votes: 0}
        this.setState({
            names: current
        })
    }
    
     
    render() {
        return (
            <div>
                <h1>Dinner Time</h1>
                <div className='foodCards'>
                    {this.state.names.map((name, i) =>
                        <div className='foodCard' key={name.id}>
                           <img alt={name.name} src={name.img} />
                           <h3>Food Name: {name.name}</h3>
                           <h4>Vote Here If You Want This <button onClick={this.handleAdd.bind(this, i)}>+1</button></h4>
                           <h4>Vote Here If You Do Not Like This <button onClick={this.handleDelete.bind(this, i)}>-1</button></h4>
                           <h5>Total: {name.votes}</h5>
                           <button onClick={this.handleReset.bind(this, i)}>Reset</button>
                        </div>
                        )}
                </div>
            </div>
        )
    }
};