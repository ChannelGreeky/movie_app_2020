import React from "react";
import axios from "axios";
import Movie from "../components/Movie";
import "./Home.css";

//import PropTypes from "prop-types";

/* Food 예제
const foodILike =[
  {
    id :1,
    name : "Pasta",
    image : "https://t1.daumcdn.net/liveboard/dailylife/8defeeef58a04d3888ddfe03b5722000.jpg",
    rating : 5
  },
  {
    id :2,
    name : "Pork cutlet",
    image : "https://lh3.googleusercontent.com/proxy/NmlGqWTxBeYUwyXiv9sSLhFOxrP9ALPR6LgdHzUqi5J9WfPDRGGgn08soxXLTtffZuGIIWy1AbraF31PzFRY_Z0Kv5R81cqLFIXo0u-RTw",
    rating: 4.9
  },
  {
    id :3,
    name : "Kimbob",
    image : "https://2.bp.blogspot.com/-Xa5acwIHcoY/XDcJ7AtKfCI/AAAAAAAAFrg/nm3Sn2lFZY0QupNI1l-4yxlMvu1Cf_NFwCLcBGAs/s1600/IMG_4097lightlight.jpg",
    rating: 4.8
  },
  {
    id :4,
    name : "Pizza",
    image : "https://www.journal-d.kr/news/photo/201704/14768_9689_3049.jpg",
    rating: 4.7
  },
  {
    id :5,
    name : "Chicken",
    image : "https://t1.daumcdn.net/liveboard/interbiz/724b01edcbeb44dfa3fe10a3dbbda51f.JPG",
    rating: 4.5
  },
  {
    id :6,
    name : "Black Noodle",
    image : "https://file.namu.moe/file/c0ca6921787d92e17e8eac027b2f8f80d8390ab93419e534ce7f7e79dbc5a78c",
    rating: 4.3
  }
];

function Food({name, picture, rating}){
  return (
  <div>
    <h3>My favorite food is {name}</h3>
    <h4>rating : {rating}/5.0</h4>
    <img src = {picture} alt ={name} height="100" width="100"></img>
  </div>
  )
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired
}

function App() {
  return (
  <div>
    <h1>I'm ChannelGreeky</h1>
    {foodILike.map(dish => (
      <Food 
      key={dish.id} 
      name = {dish.name} 
      picture = {dish.image}
      rating = {dish.rating}
      />
    ))}
  </div>
  );
}
*/

/*클래스 컴포넌트 및 state
  //Component life cycle
  //Component가 생성될 때 render()후에 호출됨
  componentDidMount(){
  }
  //Component가 업데이트 될 때 render()후에 호출
  componentDidUpdate(){
  }
  //Component가 죽을 때
  componentWillUnmount(){
  }

//클래스 컴포넌트는 항상 React.Component에 extends 할 것
class App extends React.Component{
  //바꾸고 싶은 데이터 state
  state = {
    count:0
  };
  add = () =>{
    //this.state.count +=1; -> 이렇게 state 직접 변경 안됨!
    this.setState(current => ({count: current.count+1}));
  }
  minus = () =>{
    this.setState(current => ({count: current.count-1}));
  }
  
  //화면에 그리는 함수
  //React는 모든 Class Component의 render함수를 자동으로 실행
  render(){
    console.log("Render");
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    )};
}*/

class Home extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };

  //async:기다려라 await가 있는 구문이 끝날 때까지
  getMovies = async () => {
    const {
      data: {
        data: { movies }
      }
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies, isLoading: false });
  };

  componentDidMount() {
    this.getMovies();
  }

  render() {
    const {isLoading, movies} = this.state;

    return (
    <section className = "container">
      {isLoading ? ( 
        <div className = "loader">
          <span className = "loader_text">Loading...</span>
        </div> 
        ) : (
          <div className = "movies">
            {movies.map(movie => (
              <Movie 
                key = {movie.id}
                id = {movie.id}
                year = {movie.year}
                title = {movie.title}
                genres = {movie.genres} 
                summary = {movie.summary}
                poster = {movie.medium_cover_image}/>
                ))}
          </div>
        )}
    </section>
    );
  }
}
export default Home;
