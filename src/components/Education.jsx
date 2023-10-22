import { useState } from "react";

function Education () {
  const [submitted, setSubmitted] = useState(false);
  const [school, setSchool] = useState('');
  const [major, setMajor] = useState('');
  const [date, setDate] = useState(null);

  function handleEdit () {
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div>
        <h2>Education</h2>
        <ul>
          <li>School: {school}</li>
          <li>Major: {major}</li>
          <li>Graduation Date: {date ? (date.getUTCMonth() + 1) + '/' + date.getUTCDate() + '/' + date.getUTCFullYear() : ""}</li>
        </ul>
        <button type="button" onClick={handleEdit}>Edit</button>
      </div>
    );
  }

  function handleSubmit (e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Education</h2>
      <ul>
        <li>
          <label htmlFor="school">School Name</label>
          <input id="school" name="school" type="text" value={school} onChange={(e) => {setSchool(e.target.value)}} />
        </li>
        <li>
          <label htmlFor="major">Major</label>
          <input id="major" name="major" type="text" value={major} onChange={(e) => {setMajor(e.target.value)}} />
        </li>
        <li>
          <label htmlFor="date">Graduation Date</label>
          <input  id="date" name="date" type="date" value={date ? date.toISOString().split('T')[0] : ""} onChange={(e) => {setDate(new Date(e.target.value))}} />
        </li>
      </ul>
      <button type="submit">Submit</button>
    </form>
  );
}

export default Education;