import React from "react";
import "./App.css";
import pump from "./pumpkin.jpg";

const array = [1, 2, 3, 4, 5, 6, 7, 8];

function App() {
  return (
    <div className="App">
      <div className="main">
        <div className="sec-1">
          {array.map((item) => (
            <div className="news-card" key={item}>
              <div className="left-card-side">
                <span className="card-head">NEWS</span>
                <div className="card-desc">
                  <h3>
                    John Lewis is first Black lawmaker to lie in state in US
                    Capitol Rotunda
                  </h3>
                </div>
                <h3>Protest in Alaska</h3>
                <h4>Posted by Anom1234</h4>
              </div>
              <div className="right-card-side">
                <img className="news-card-img" src={pump} alt="news" />
              </div>
            </div>
          ))}
        </div>
        <div className="sec-2"></div>
      </div>
    </div>
  );
}

export default App;
