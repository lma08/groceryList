import { Component } from "react";
import check from './check.jpg';

export class GroceryList extends Component {
    constructor() {
        super();
        this.state = {
            userInput:"",
            GroceryList:[]
        }
    }

    onChangeEvent(e) {
        this.setState({userInput: e});
    }

    addItem(input) {
        if (input === '') {
            alert ('Please enter an item')
        }
        else {
            let listArray = this.state.GroceryList;
            listArray.push(input);
            this.setState({GroceryList: listArray, userInput:""});
        }
    }

    crossedWords(event) {
        const li = event.target;
        li.classList.toggle('crossed');
    }

    deleteItems() {
        let listArray = this.state.GroceryList;
        listArray = [];
        this.setState({GroceryList: listArray});
    }

    onFormSubmit(e) {
        e.preventDefault();
    }

    render () {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                <div className='container'>
                    <input placeholder="What do you want to buy?" 
                        type='text'
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                </div>
                <div className='container'>
                    <button onClick={() => this.addItem(this.state.userInput)} className='btn_add btn'> Add </button>
                </div>
                <div>
                    <ul>
                        {this.state.GroceryList.map((item, index) =>(
                            <li onClick={this.crossedWords} key={index}>
                                <img src={check} width='35px' alt="check"/> {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='container'>
                    <button onClick={() => this.deleteItems()} className='btn_delete btn'> Delete </button>
                </div>
                </form>
            </div>
        )
    }
}