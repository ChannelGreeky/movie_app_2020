import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import {Link} from "react-router-dom";

function Movie({id, year, title, genres, summary, poster}) {
    return (
        <div className = "movie">
            <Link to = {{
                pathname:`/movie/${id}`,
                state: {
                    year,
                    title,
                    genres,
                    summary,
                    poster
                }
            }}>
            <img src = {poster} alt={title} title={title} />
            <div className = "movie_data">
                <h3 className = "movie_title">{title} ({year})</h3>
                <ul className = "genres">
                    {genres.map((genre, index) => (
                    <li key = {index} className="movie_genre">{genre}</li>
                    ))}
                </ul>
                <p className = "movie_summary">{summary.slice(0,140)}...</p>
            </div>
            </Link>
        </div>
    );
}

Movie.propTypes = {
    id : PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title : PropTypes.string.isRequired,
    genres : PropTypes.arrayOf(PropTypes.string).isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired
}

export default Movie;