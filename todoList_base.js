import './App.css';
import { useState } from 'react'

function App() {

  const [job, setJob] = useState('');
  const [jobs, setJobs] = useState(() => {
    const storage = JSON.parse(localStorage.getItem('jobs'));
    return storage ?? []; 
  });

  const handleSubmit = () => {
    setJobs(prev => {
      const listJobs = [...prev, job]; 

      // localStorage chỉ cho lưu chuỗi 
      localStorage.setItem('jobs', JSON.stringify(listJobs));

      return listJobs
    })
    setJob('')
  }

  const handleDelete = (job) => {
    setJobs(prev => {
      const listJobs = prev.filter(item => item !== job);

      // localStorage chỉ cho lưu chuỗi 
      localStorage.setItem('jobs', JSON.stringify(listJobs));

      return listJobs
    })
  }

  return (
    <div className="App">
      <input 
        value={job}
        onChange={e => setJob(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>

      {
        jobs.map((job, index) =>(
          <li key={index}> 
            {job} 
            <button onClick={() => handleDelete(job)}>X</button>
          </li>
        ))
      }
    </div>
  );

}

export default App;
