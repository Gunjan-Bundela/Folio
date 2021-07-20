import React,{useState} from "react";
import emailjs from "emailjs-com";
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Alert from 'react-bootstrap/Alert'
import './Mailer.css'
// const Result = () => {
//   const notify = () => toast("Wow so easy!");
//   return (
//     <>
//     {notify()}
//     <ToastContainer />
//     </>
//   );
// }
function Mailer() {
  const [result, setResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m0229mr",
        "template_7fcji1q",
        e.target,
        "user_HxnrxXtnZ2moESmVEydzg"
      )
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));

      e.target.reset();
      setResult(true);
  }
  return (
    <form action="" onSubmit={sendEmail}>
      <div className='formWord'>
        <h2>Contact Form</h2>
        <br/>
        <span>Full Name</span>
        <input className="impot100" type="text" name="name" required></input>
        <br/>
        <span>Email</span>
        <input className="impot100" type="text" name="user_email" required></input>
        <br/>
      </div>
      <div className='formWord'>
        <span>Meassage</span>
        <textarea name="message" className="impot100" required></textarea>
        <br/>
        <button>SEND</button>
        {/* <div className="row-message">{result ? <Result/> : null }</div> */}
      </div>
    </form>
  );
    
}

export default Mailer;









