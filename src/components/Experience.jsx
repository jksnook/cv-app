import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

function Experience () {
  const [experiences, setExperiences] = useState([]);
  const [jobTitle, setJobTitle] = useState('');
  const [responsibilities, setResponsibilities] = useState('');
  const [duration, setDuration] = useState('');

  function handleSubmit (e) {
    e.preventDefault();
    setExperiences([...experiences, {jobTitle: jobTitle, responsibilities: responsibilities, duration: duration, id: uuidv4()}])
  }

  function handleDelete (id) {
    setExperiences(experiences.filter(exp => exp.id != id));
  }

  return (
    <div>
      <ol>
        {experiences.map((exp) => 
          <li key={exp.id}>
            <ul>
              <li>
                <h3>Job Title:</h3>
                <span>{exp.jobTitle}</span>
              </li>
              <li>
                <h3>responsibilities:</h3>
                <span>{exp.responsibilities}</span>
              </li>
              <li>
                <h3>duration:</h3>
                <span>{exp.duration}</span>
              </li>
            </ul>
            <button type="button" onClick={() => {handleDelete(exp.id)}}>Delete</button>
          </li>
        )}
      </ol>
      <h2>Experience</h2>
      <form onSubmit={handleSubmit}>
        <ul>
          <li>
            <label htmlFor="jobTitle">Job Title</label>
            <input type="text" id="jobTitle" name="jobTitle" value={jobTitle} onChange={(e) => {setJobTitle(e.target.value)}} />
          </li>
          <li>
            <label htmlFor="responsibilities">Job Responsibilities</label>
            <input type="text" id="responsibilities" name="responsibilities" value={responsibilities} onChange={(e) => {setResponsibilities(e.target.value)}} />
          </li>
          <li>
            <label htmlFor="duration">Job Duration</label>
            <input type="text" id="duration" name="duration" value={duration} onChange={(e) => {setDuration(e.target.value)}} />
          </li>
        </ul>
        <button type="submit">Add Experience</button>
      </form>
    </div>
  );
}

export default Experience;