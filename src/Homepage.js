import React from 'react';

function Homepage() {
  return (
    <div className="homepage">
      <header>
        <h1>Welcome to FitMinder</h1>
      </header>
      <main>
        <section>
          <h2>About</h2>
          <p>
            Created by a fitness focused Computer Science student, Julian Nutovits, this website is made to make tracking workouts
            for progressive overload and tracking goals simple and easy to follow.
          </p>
        </section>
        <section>
          <h2>Features</h2>
          <ul>
            <li>Track your workouts</li>
            <li>Set goals and monitor progress</li>
          </ul>
        </section>
        <section>
          <h2>Get Started</h2>
          <p>Sign up now to start your fitness journey with us!</p>
          <button>Sign Up</button>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 My Fitness App. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Homepage;
