import React, { Component } from 'react'
import axios from 'axios'
import { Button } from 'reactstrap';
import addidea from '../images/add-idea.gif';
import editidea from '../images/edit-idea.gif';
import deleteidea from '../images/delete-idea.gif';
import { Link } from 'react-router-dom';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ideas: [],
            editingIdeaId: null,
            notification: ''
        }
    }

    componentDidMount() {
        axios.get('https://idea-api.herokuapp.com/api/v1/ideas.json')
        .then(response => {
            this.setState({ideas: response.data})
        })
        .catch(error => console.log(error))
    }


    render() {
        return (
                <div> 
                   <header className="App-header">
                    <h1>Idea Board</h1>
                    <h2>Voice your Opinion</h2>
                    </header>
                <div className="title text-center">
                    <h1>Collect your ideas in one place</h1>
                    <h2>Create an idea board to quickly create, edit and delete ideas</h2>  
                    <Button className="btn btn-success"><Link to="/signin">Get Started</Link></Button>
                </div>  




                </div>

                
        );
    }
}

export default Home
