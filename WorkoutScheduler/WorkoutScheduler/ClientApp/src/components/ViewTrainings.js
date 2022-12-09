import React, { Component } from "react";
import "./ViewTrainings.css";

export class ViewTrainings extends Component {
  static displayName = ViewTrainings.name;
  constructor(prop) {
    super(prop);
    this.state = {
      selectedIndex: 0,
    };
  }
  render() {
    const check = (index) => this.setState({ selectedIndex: index });
    const checkNext = () => {
      const labels = document.querySelectorAll("#slider label");
      const nextIndex =
        this.state.selectedIndex === labels.length - 1
          ? 0
          : this.state.selectedIndex + 1;
      this.setState({ selectedIndex: nextIndex });
    };
    return (
      <div id="trainings-slider">
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
              <button className="training-button" onClick={checkNext}>
                {"<"}
              </button>
            </div>
          </div>
          <div className="md:w-2/4 md:mb-0 mb-6 flex flex-col text-center items-center">
            <section
              id="slider"
              className="w-16 h-20 inline-flex items-center justify-center mb-5 flex-shrink-0"
            >
              <input
                type="radio"
                name="slider"
                id="s1"
                checked={this.state.selectedIndex === 0}
                onClick={() => check(0)}
              />
              <input
                type="radio"
                name="slider"
                id="s2"
                checked={this.state.selectedIndex === 1}
                onClick={() => check(1)}
              />
              <input
                type="radio"
                name="slider"
                id="s3"
                checked={this.state.selectedIndex === 2}
                onClick={() => check(2)}
              />
              <label htmlFor="s1" id="slide1">
                <div className="trainig-day">
                  <div className="day-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="#F9F871"
                        fill-opacity="1"
                        d="M0,128L34.3,160C68.6,192,137,256,206,272C274.3,288,343,256,411,240C480,224,549,224,617,224C685.7,224,754,224,823,218.7C891.4,213,960,203,1029,181.3C1097.1,160,1166,128,1234,149.3C1302.9,171,1371,245,1406,282.7L1440,320L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
                      ></path>
                    </svg>
                    <h1>Day 1</h1>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>1. Leg Curls</li>
                    <li>2. Leg Extensions</li>
                    <li>3. Muscle-ups</li>
                    <li>4. Leg Curls</li>
                    <li>5. Leg Extensions</li>
                    <li>6. Muscle-ups</li>
                  </ul>
                </div>
                <div className="buttons-container">
                  <button className="cart-button">Start</button>
                  <button className="cart-button">Edit</button>
                  <button className="cart-button">Delete</button>
                </div>
              </label>
              <label htmlFor="s2" id="slide2">
                <div className="trainig-day">
                  <div className="day-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="#F9F871"
                        fill-opacity="1"
                        d="M0,128L34.3,160C68.6,192,137,256,206,272C274.3,288,343,256,411,240C480,224,549,224,617,224C685.7,224,754,224,823,218.7C891.4,213,960,203,1029,181.3C1097.1,160,1166,128,1234,149.3C1302.9,171,1371,245,1406,282.7L1440,320L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
                      ></path>
                    </svg>
                    <h1>Day 1</h1>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>1. Leg Curls</li>
                    <li>2. Leg Extensions</li>
                    <li>3. Muscle-ups</li>
                    <li>4. Leg Curls</li>
                    <li>5. Leg Extensions</li>
                    <li>6. Muscle-ups</li>
                  </ul>
                </div>
                <div className="buttons-container">
                  <button className="cart-button">Start</button>
                  <button className="cart-button">Edit</button>
                  <button className="cart-button">Delete</button>
                </div>
              </label>
              <label htmlFor="s3" id="slide3">
                <div className="trainig-day">
                  <div className="day-container">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                    >
                      <path
                        fill="#F9F871"
                        fill-opacity="1"
                        d="M0,128L34.3,160C68.6,192,137,256,206,272C274.3,288,343,256,411,240C480,224,549,224,617,224C685.7,224,754,224,823,218.7C891.4,213,960,203,1029,181.3C1097.1,160,1166,128,1234,149.3C1302.9,171,1371,245,1406,282.7L1440,320L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
                      ></path>
                    </svg>
                    <h1>Day 1</h1>
                  </div>
                </div>
                <div>
                  <ul>
                    <li>1. Leg Curls</li>
                    <li>2. Leg Extensions</li>
                    <li>3. Muscle-ups</li>
                    <li>4. Leg Curls</li>
                    <li>5. Leg Extensions</li>
                    <li>6. Muscle-ups</li>
                  </ul>
                </div>
                <div className="buttons-container">
                  <button className="cart-button">Start</button>
                  <button className="cart-button">Edit</button>
                  <button className="cart-button">Delete</button>
                </div>
              </label>
            </section>
          </div>
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
              <button className="training-button" onClick={checkNext}>
                {">"}
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
