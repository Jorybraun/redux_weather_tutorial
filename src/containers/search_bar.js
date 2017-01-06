import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';


class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
  }

  handleSubmit(e){
    e.preventDefault();
   
    // pass the action creator here 
    this.props.fetchWeather(this.state.term);
    // clear the state which causes component to rerender and replace the value to the user
    this.setState({ term: '' });
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="input-group">
        <input 
          type="text"
          className="form-control" 
          placeholder="Get a 5 day forecast" 
          value={this.state.term}  
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary"> Submit </button>
        </span>
      </form>
    )
  }
}

// Hook up action creator 
function mapDispatchToProps(dispatch) {
  // when ever it gets called it passes the action to the reducers
  return bindActionCreators( { fetchWeather }, dispatch );
}


// passing in null for first argument because first is argument is for state
// this container doesnt have state
export default connect(null, mapDispatchToProps)(SearchBar);


