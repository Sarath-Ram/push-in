import React, {useState} from 'react'
import '../LoginBottom/LoginBottom.css'

const LoginBottom = ({setSubmittedData}) => {
    const [data,setData] = useState({
        name:'',
        email:'',
        number:'',  
    });

    const handleChange = (e) => {
        const {name, value} = e.target
        setData({...data, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(data);
        setData({name: '', email: '', number: ''})
    }

return (
    <div className='bottom'>
        <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>
            <div className='input'>
                <label className='label-name'>
                    Name:
                    </label>
                    <input className='input-1'
                        type='text'
                        name='name'
                        placeholder='Enter Your Name'
                        value={data.name}
                        onChange={handleChange}
                        required
                        />
               
                <br></br> <br></br>
                <label className='label-email'>
                    Email:
                    </label>
                    <input className='input-2'
                        type='email'
                        name='email'
                        placeholder='Enter Your Email'
                        value={data.email}
                        onChange={handleChange}
                        required
                        />
                
                <br></br> <br></br>
                <label className='label-number'>
                    Number:
                    </label>
                    <input className='input-3'
                        type='number'
                        name='number'
                        placeholder='Enter Your Number'
                        value={data.number}
                        onChange={handleChange}
                        required
                        />
                
                <br></br> <br></br>
                <div>
                    <button type='submit'>SUBMIT</button>
                </div>
            </div>
        </form>
    </div>
  )
}

export default LoginBottom
