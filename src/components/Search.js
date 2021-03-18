import React from 'react'
import {connect} from 'react-redux'
import {reverse} from '../actions/searchAction'

class Search extends React.Component {
    constructor() {
        super()
        this.state= {
            search: ''
        }
    }

    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        this.props.dispatch(reverse(e.target.value))
    }

    render() {
        return (
            <React.Fragment>
                <input 
                    type= "search" 
                    placeholder= "Search" 
                    className=  "search" 
                    onChange= {this.handleChange} 
                    name= "search"
                    value= {this.state.search}
                />
    
                <h3 style= {{ textAlign: 'center'}}>{this.state.search.split('').reverse().join('')}</h3>
            </React.Fragment>
        )
    }
}

export default connect()(Search)