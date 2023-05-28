import React, { useState, useEffect } from 'react';
import CourseGoalList from './components/CourseGoals/CourseGoalList/CourseGoalList';
import CourseInput from './components/CourseGoals/CourseInput/CourseInput';
import './App.css';
import axios from 'axios';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([{ text: 'Clean the backyard', id: 'g99'}, { text: 'Walk the dog', id: 'g98'}]);
    
    
  const addGoalHandler = async (enteredText) => {
    let atext = enteredText;
    let aid = Math.random().toString();
    axios.post("http://localhost:5000/api", {
      text: atext, id: aid
    }).then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    
      // const requestOptions = {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({text: atext, id: aid})
      // };
      // fetch('/api', requestOptions)
      //   .then(res => console.log(res))
      //   .catch(err => console.error('Error, ', err))
   
      // //updatedGoals.unshift({ text: enteredText, id: Math.random().toString() });
      // return [  { text: 'Its this one!', id: 'g9' }];
  }
    

  const deleteItemHandler = goalId => {
    setCourseGoals(prevGoals => {
      const updatedGoals = prevGoals.filter(goal => goal.id !== goalId);
      return updatedGoals;
    });
  };

  let content = (
    <p style={{ textAlign: 'center' }}>No goals found. Maybe add one?</p>
  );
  
  if (courseGoals.length > 0) {
    content = (
      <CourseGoalList items={courseGoals} onDeleteItem={deleteItemHandler} />
    );
  }

  useEffect(() => {
    const url = "/api";
    fetch(url).then(
      res => console.log(res))
      .then(
        data => {
          console.log(data)
        }
      )
  }, []);
  
  return (
    <div>
      <section id="goal-form">
        <CourseInput onAddGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {content}
      </section>
    </div>


  );
};

export default App;
