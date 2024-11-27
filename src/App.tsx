import { useEffect, useRef, useState } from 'react';
import './App.css'

function App() {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("")
  const [email, setEmail] = useState<string>('')
  const [phNumber, setPhNumber] = useState<string>('');
  const [dateOfBirth, setDateOfBirth] = useState<string>('');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phNumber?.length != 10) {
      window.alert("Invalid phone number. Please enter 10-digit phone number")
      return

    }
    const birthDate = new Date(dateOfBirth);
    const todayDate = new Date()
    if (birthDate >= todayDate) {
      window.alert("Invalid date of birth. Date of birth can not be in the future.")

    } else {
      setUserName('');
      setEmail('');
      setPhNumber('');
      setDateOfBirth('');
    }
  }
  const handleClickOutside = (e: MouseEvent) => {
    // console.log(modalRef.current.contains(e.target as Node),"modalRef.current.contains");

    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false);
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isModalOpen]);
  return (
    <>
      <div className="main" >
        <h1>User Details Modal</h1>
        <button className='btn' onClick={() => setIsModalOpen(!isModalOpen)}>Open Form</button>
      </div>
      {isModalOpen &&
        <div className="modal" >
          <div className="modal-content" ref={modalRef}>
            <form className='form' onSubmit={handleSubmit} >

              <h1>Fill Details</h1>
              <div className="feild">

                <label htmlFor="userName">Username:</label>
              </div>
              <div className="feild">

                <input type="text" id='username' required value={userName} onChange={(e) => setUserName(e.target.value)} />
              </div>
              <div className="feild">

                <label htmlFor="email">Email Address:</label>
              </div>
              <div className="feild">

                <input type="email" id='email' required value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div className="feild">

                <label htmlFor="phoneNumber">Phone Number:</label>
              </div>
              <div className="feild">

                <input type="text" id='phone' maxLength={10} required value={phNumber} onChange={(e) => setPhNumber(e.target.value)} />
              </div>
              <div className="feild">

                <label htmlFor="dateOfBirth">Date of Brith:</label>
              </div>
              <div className="feild">

                <input type="date" id='dob' required value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
              </div>
              <button type='submit' className='btn submit-button' >Submit</button>
            </form>
          </div>
        </div>
      }
    </>
  )
}

export default App
