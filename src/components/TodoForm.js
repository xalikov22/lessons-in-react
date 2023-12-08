import React, { useState } from 'react';

export const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      addTodo(value);
      setValue('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="TodoForm">
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Enter task' />
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Enter homework' />
      <input type="text" value={value} onChange={(e) => setValue(e.target.value)} className="todo-input" placeholder='Makes' />
      <button type="submit" className='todo-btn'>Add Task</button>
    </form>
  );
};












// export const TodoForm = ({ addTodo }) => {
//   const [job, setJob] = useState('');
//   const [work, setWork] = useState('');
//   const [interest, setInterest] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (job && work && interest) {
//       addTodo({ job, work, interest });
//       setJob('');
//       setWork('');
//       setInterest('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="TodoForm">
//       <input type="text" value={job} onChange={(e) => setJob(e.target.value)} className="todo-input" placeholder='Job' />
//       <input type="text" value={work} onChange={(e) => setWork(e.target.value)} className="todo-input" placeholder='Work' />
//       <input type="text" value={interest} onChange={(e) => setInterest(e.target.value)} className="todo-input" placeholder='Interest' />
//       <button type="submit" className='todo-btn'>Add Task</button>
//     </form>
//   );
// };import React, { useState } from 'react';

// export const TodoForm = ({ addTodo }) => {
//   const [job, setJob] = useState('');
//   const [work, setWork] = useState('');
//   const [interest, setInterest] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (job && work && interest) {
//       addTodo({ job, work, interest });
//       setJob('');
//       setWork('');
//       setInterest('');
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="TodoForm">
//       <input type="text" value={job} onChange={(e) => setJob(e.target.value)} className="todo-input" placeholder='Job' />
//       <input type="text" value={work} onChange={(e) => setWork(e.target.value)} className="todo-input" placeholder='Work' />
//       <input type="text" value={interest} onChange={(e) => setInterest(e.target.value)} className="todo-input" placeholder='Interest' />
//       <button type="submit" className='todo-btn'>Add Task</button>
//     </form>
//   );
// };