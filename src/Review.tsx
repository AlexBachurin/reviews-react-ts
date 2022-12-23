import React, { useState } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review: React.FC = () : JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  //display person based on current index;
  const { name, job, image, text } = people[index];
  //next person
  const nextPerson = () => {
    setIndex((oldIndex) => {
      //check for persons length to not go out of bounds
      if (oldIndex >= people.length - 1) {
        return 0;
      } else {
        return oldIndex + 1;
      }
    });
  };
  //prev person
  const prevPerson = () => {
    setIndex((oldIndex) => {
      //same as for next person check to not go below zero
      if (oldIndex <= 0) {
        return people.length - 1;
      } else {
        return oldIndex - 1;
      }
    });
  };
  //toggle random person review
  const toggleRandom = () => {
    let randomNum = Math.floor(Math.random() * people.length);
    //if random number equals current index just add 1, but check for boundaries
    if (randomNum === index) {
      randomNum = index + 1;
      if (randomNum > people.length - 1) {
        randomNum = 0;
      }
    }
    setIndex(randomNum);
  };
  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button onClick={prevPerson} className="prev-btn">
          <FaChevronLeft />
        </button>
        <button onClick={nextPerson} className="next-btn">
          <FaChevronRight />
        </button>
      </div>
      <button onClick={toggleRandom} className="random-btn">
        random
      </button>
    </article>
  );
};

export default Review;
