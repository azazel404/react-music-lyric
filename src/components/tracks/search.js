import React, { Component } from 'react'
import axios from "axios";
import {Consumer } from "../../context";


class Search extends Component {
    state = {
        tracktitle : ''
    }

    onChange = (e) => {
        this.setState({tracktitle: e.target.value})
    }
    findTrack = (dispatch,e) => {
        e.preventDefault();
        axios.get(`http://api.musixmatch.com/ws/1.1/track.search?q_track=${this.state.tracktitle}&page_size=3&page1&s_track_rating=desc&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
              dispatch({
                  type: 'SEARCH_TRACKS',
                  payload: res.data.message.body.track_list
              })
            })
            .catch(err => console.log(err));
    }
    render() {
    return (
        <Consumer>
            {value => {
                const {dispatch} = value;
                return(
                    <div className="card mb-4 p-4">
                        <h1 className="display-4 text-center">
                        <i className="fas fa-music" /> Search Lyric a Song 
                        </h1>
                        <p className="lead text-center">Get the lyric </p>
                        <form onSubmit={this.findTrack.bind(this,dispatch)}>
                            <div className="form-group">
                                <input type="text" 
                                className="form-control form control-lg" 
                                placeholder="Song title..." 
                                name="tracktitle" 
                                value={this.state.tracktitle}
                                onChange={this.onChange}
                                />
                            </div>
                            <button type="submit" className="btn btn-lg btn-block">Search Them</button>
                        </form>
                    </div>
                )
            }}
        </Consumer>
    )
  }
}
export default Search;