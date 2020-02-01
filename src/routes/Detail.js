import React from "react";
import "./Detail.css";

class Detail extends React.Component{
    componentDidMount(){
        const {location, history} = this.props;
        if(location.state === undefined){
            history.push("/");
        }
    }
    
    render(){
        const {location} = this.props;
        if(location.state !== undefined){
            const {title, poster, year, genres, summary} = location.state;
            return ( 
            <div className = "detail_containor">
                <img src = {poster} alt={title} title={title} />
                <div className = "detail_movie_data">
                    <h3 className = "detail_movie_title">{title} ({year})</h3>
                    <ul className = "detail_genres">
                        {genres.map((genre, index) => (
                        <li key = {index} className="detail_movie_genre">{genre}</li>
                        ))}
                    </ul>
                    <p className = "detail_movie_summary">{summary}</p>
                </div>
            </div>
        );}
        else{
            return null;
        }
    }
}

export default Detail;