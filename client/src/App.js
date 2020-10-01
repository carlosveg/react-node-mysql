import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./App.css";

function App() {
  const [movieName, setMovieName] = useState("");
  const [movieReview, setReview] = useState("");
  const [movieList, setMovieList] = useState([]);

  const setMN = (e) => {
    setMovieName(e.target.value);
  };

  const setMR = (e) => {
    setReview(e.target.value);
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get").then((res) => {
      setMovieList(res.data);
    });
  }, []);

  const submitReview = () => {
    Axios.post("http://localhost:3001/api/insert", {
      movieName,
      movieReview,
    });
    alert("Movie inserted successfully");
    setMovieList([...movieList, { movieName, movieReview }]);
  };

  return (
    <div className="container p-4 mt-4 text-center card bg-light">
      <h2>Movies Reviews</h2>
      <div className="card-body">
        <div className="form">
          <div className="col-md-6 mx-auto">
            <div className="form-group">
              <label>Movie Name:</label>
              <input
                type="text"
                name="movieName"
                onChange={setMN}
                className="form-control"
              />
            </div>
            <div className="form-group">
              <label>Movie Review:</label>
              <textarea
                class="form-control"
                name="review"
                onChange={setMR}
                rows="3"
              ></textarea>
            </div>
            <button onClick={submitReview} className="btn btn-success">
              Submit
            </button>
          </div>
          <hr />
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Movie Name</th>
                <th scope="col">Movie Review</th>
              </tr>
            </thead>
            {movieList.map((val) => {
              return (
                <tbody>
                  <tr>
                    <td>{val.movieName}</td>
                    <td>{val.movieReview}</td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}

export default App;
