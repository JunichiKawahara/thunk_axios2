import React from 'react';
import Counter from '../Counter/container'
import Tasks from '../TasksList/container'

function Home() {
  return (
    <div>
      <Counter />
      <Tasks />
    </div>
  );
}

export default Home;