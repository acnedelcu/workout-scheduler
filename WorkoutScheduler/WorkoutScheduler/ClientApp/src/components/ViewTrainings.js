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
              <button onClick={checkNext}>{"<"}</button>
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
                <img
                  className="fea"
                  src="https://picsum.photos/200/200"
                  height="100%"
                  width="100%"
                />
              </label>
              <label htmlFor="s2" id="slide2">
                <img
                  className="fea"
                  src="https://picsum.photos/200/300"
                  height="100%"
                  width="100%"
                />
              </label>
              <label htmlFor="s3" id="slide3">
                <img
                  className="fea"
                  src="https://picsum.photos/300/300"
                  height="100%"
                  width="100%"
                />
              </label>
            </section>
          </div>
          <div className="md:w-1/4 py-64 md:mb-0 mb-6 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-orange-100 text-orange-500 mb-5 flex-shrink-0">
              <button onClick={checkNext}>{">"}</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
