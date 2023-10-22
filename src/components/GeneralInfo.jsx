import { useState } from "react";

function GeneralInfo () {
  const [submitted, setSubmitted] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  function handleEdit () {
    setSubmitted(false);
  }

  if (submitted) {
    return (
      <div>
        <h2>General Info</h2>
        <ul>
          <li>{firstName}</li>
          <li>{lastName}</li>
          <li>{email}</li>
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
      <h2>General Info</h2>
      <ul>
        <li>
          <label htmlFor="firstName">First Name</label>
          <input id="firstName" name="firstName" type="text" value={firstName} onChange={(e) => {setFirstName(e.target.value)}} />
        </li>
        <li>
          <label htmlFor="lastName">Last Name</label>
          <input id="lastName" name="lastName" type="text" value={lastName} onChange={(e) => {setLastName(e.target.value)}} />
        </li>
        <li>
          <label htmlFor="email">Email</label>
          <input  id="email" name="email" type="email" value={email} onChange={(e) => {setEmail(e.target.value)}} />
        </li>
      </ul>
      <button type="submit">Submit</button>
    </form>
  );
}

export default GeneralInfo;