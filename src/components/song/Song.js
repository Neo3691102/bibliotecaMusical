import React, {Component} from 'react';

class Song extends Component {
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className="songCard">
                <img className="picture" src={this.props.picture} alt="imagen"/>
                <h2 className="songTitle">{this.props.songName}</h2>
                <p className="artist">{this.props.artist}</p>
                <p className ="album">{this.props.album}</p>
                <p className="duration">{this.props.duration}</p>
            </div>
        )
    }
}

export default Song;