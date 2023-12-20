import React from 'react';
const Header = ({ name }) => {
  return (
    <>
      <h1>Web development curriculum</h1>
      <h2>{name}</h2>
    </>
  );
};

const Part = ({ name, exercises }) => {
  return (
    <>
      <p>
        {name} {exercises}
      </p>
    </>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((part) => (
        <Part key={part.id} name={part.name} exercises={part.exercises}></Part>
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  let total = 0;
  parts.map((part) => {
    total += part.exercises;
  });
  return (
    <p>
      <b>total of {total} exercises</b>
    </p>
  );
};

const Course = ({ courses }) => {
  return (
    <>
      {courses.map((course) => (
        <div key={course.id}>
          <Header name={course.name}></Header>
          <Content parts={course.parts}></Content>
          <Total parts={course.parts}></Total>
        </div>
      ))}
    </>
  );
};

export default Course;
