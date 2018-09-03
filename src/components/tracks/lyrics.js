import React, { Component } from 'react'
import axios from "axios";
import {Link} from "react-router-dom";


class Lyrics extends Component {
    state = {
        track : {},
        lyric : {}
    }
    componentDidMount(){
        axios.get(`http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)        
        .then(res => {
           this.setState({
               lyric : res.data.message.body.lyrics,
            });
            return axios.get(`http://api.musixmatch.com/ws/1.1/track.get?track_id=${this.props.match.params.id}&apikey=${process.env.REACT_APP_MM_KEY}`)
            .then(res => {
                this.setState({track : res.data.message.body.track})
            })
        })
        .catch(err => console.log(err))
    }

  render() {
    const {track , lyric} = this.state;
    if(track === undefined || lyric === undefined || Object.keys(track) === 0 || Object.keys(lyric) === 0){
        return  <h1>Loading...</h1>
    }else{
        return (
            <React.Fragment>
                <Link to="/" className="btn btn-dark btn-sm mb-4">Go Back</Link>
                <div className="card">
                    <h5 className="card-header">
                        {track.track_name} by <span className="text-secondary">{track.artist_name}</span>
                    </h5>
                    <div className="card-body">
                        <p className="card-text">{lyric.lyrics_body}</p>
                    </div>
                </div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <strong>Album ID : {track.album_id}</strong>
                    </li>
                </ul>
            </React.Fragment>
        )
    }
  }
}
export default Lyrics;