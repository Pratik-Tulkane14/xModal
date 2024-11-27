import { useState } from 'react';
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("")
  const [email, setEmail] = useState<string>('')
  const [phNumber, setPhNumber] = useState<string>();
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const handleSubmit =(e:React.FormEvent)=>{
    e.preventDefault();
    if(phNumber?.length!=10){
      window.alert("Invalid phone number. Please enter 10-digit phone number")
      return 

    }
    const birthDate = new Date(dateOfBirth);
    const todayDate = new Date()
     if(birthDate>=todayDate){
      window.alert("Invalid date of birth. Date of birth can not be in the future.")

    }
  }
  return (
    <>

      <div className="modal">
        <h1>User Details Modal</h1>
        <button className='btn' onClick={()=>setIsModalOpen(!isModalOpen)}>Open Form</button>
        <div className="modal-content">
          {isModalOpen &&
          <form className='form'>

            <h1>Fill Details</h1>
            <div className="feild">

            <label htmlFor="userName">Username:</label>
            </div>
            <div className="feild">

            <input type="text" required value={userName} onChange={(e) => setUserName(e.target.value)} />
            </div>
            <div className="feild">

            <label htmlFor="email">Email Address:</label>
            </div>
            <div className="feild">

            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="feild">

            <label htmlFor="phoneNumber">Phone Number:</label>
            </div>
            <div className="feild">

            <input type="text" maxLength={10} required value={phNumber} onChange={(e) => setPhNumber(e.target.value)} />
            </div>
            <div className="feild">

            <label htmlFor="dateOfBirth">Date of Brith:</label>
            </div>
            <div className="feild">

            <input type="date" required value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
            </div>
            <button type='submit' className='btn' onClick={(e)=>handleSubmit(e)}>Submit</button>
          </form>
          }

        </div>

      </div>
    </>
  )
}

export default App