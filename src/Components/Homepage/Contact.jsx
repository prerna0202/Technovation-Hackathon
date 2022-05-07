import React,{useState} from "react"
import "./Contact.css"
import group27 from "../Homepage/Images/Group 2.7.png"
import group26 from "../Homepage/Images/Group 2.6.png"

const Contact =()=>{
    const [name,setname] = useState('');
    const [email,setemail] = useState('');
    const [message,setmessage] = useState('');
    const [error,seterror] = useState('')
    const submit = ( )=>{
        alert("Query Recieved!! ")
    }
    return(
        <div id="contact">
            <div className="content">
                <h1 className="head"><center>Contact Us</center></h1>
                <p className="para"><center>Guidance/Hub is with and for you all, contact us whenever you want.</center></p>
            </div>
            <form action="" className="contact-form">
                <input type="text" className="contact-form-text" placeholder="Your Name" value={name} onChange={e=>setname(e.target.value)} />
                <input type="text" className="contact-form-text" placeholder="Your Email" value={email} onChange={e=>setemail(e.target.value)} />
                <textarea name="" id="" cols="30" rows="10" className="contact-form-text" placeholder="Your Message" value={message} onChange={e=>setmessage(e.target.value)} ></textarea>
                <input className="formbtn" type="Submit" value="Send" onClick={submit} ></input>
                <h2><center>{error}</center></h2>
            </form>
            <div className="footer">
            <img src={group26} alt=""/>
            <div>
                <h1>Guidance/Hub</h1>
                <h3>Copyright © 2022 — 2023</h3>
            </div>
            <img src={group27} alt=""/>
            </div>
        </div>
    )
}
export default Contact;