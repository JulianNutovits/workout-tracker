import React, { useState } from 'react';

function WorkoutTracker() {
  // State to store workout data
  const [exercise, setExercise] = useState('');
  const [duration, setDuration] = useState(0);
  const [intensity, setIntensity] = useState('');
  const [history, setHistory] = useState([]);

  // Function to handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Create a new workout object
    const newWorkout = {
      exercise,
      duration,
      intensity
    };

    // Update the workout history state
    setHistory([...history, newWorkout]);

    // Clear the form inputs
    setExercise('');
    setDuration(0);
    setIntensity('');
  };

  return (
    <div>
      <h2>Workout Tracker</h2>

      {/* Form to log a workout */}
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="exercise">Exercise:</label>
        <input
          type="text"
          id="exercise"
          value={exercise}
          onChange={(e) => setExercise(e.target.value)}
        />

        <label htmlFor="duration">Duration (minutes):</label>
        <input
          type="number"
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />

        <label htmlFor="intensity">Intensity:</label>
        <select
          id="intensity"
          value={intensity}
          onChange={(e) => setIntensity(e.target.value)}
        >
          <option value="">Select Intensity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <button type="submit">Log Workout</button>
      </form>

      {/* Display workout history */}
      <h3>Workout History</h3>
      {history.length > 0 ? (
        <ul>
          {history.map((workout, index) => (
            <li key={index}>
              Exercise: {workout.exercise}, Duration: {workout.duration} minutes, Intensity: {workout.intensity}
            </li>
          ))}
        </ul>
      ) : (
        <p>No workout history available.</p>
      )}
    </div>
  );
}

export default WorkoutTracker;
