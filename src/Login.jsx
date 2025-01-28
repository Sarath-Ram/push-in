import React, {useState} from 'react';
import './Style.css';
import LoginBottom from './Components/LoginForm/LoginBottom/LoginBottom';
import LoginTop from './Components/LoginForm/LoginTop/LoginTop';
<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const Login = () => {
  const [submittedData, setSubmittedData] = useState(null);

  return (
    <div className='Fullpage'>
      <LoginTop submittedData={submittedData}/> 
      <LoginBottom setSubmittedData={setSubmittedData}/>
      <div>
        <button className='back'>BACK</button>
        <button className='next'>NEXT</button>
      </div>
    </div>
  );
};

export default Login;


