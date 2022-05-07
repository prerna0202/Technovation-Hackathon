import React,{useState} from 'react'
import "./form.css"
import { Link , useHistory} from "react-router-dom";
function Register() {
    const history = useHistory();
    const [error,seterror] = useState();
    const [name,setname]=useState();
    const [email,setemail]=useState();
    const [interest,setinterest] = useState();
    const [password,setpassword] = useState();
    const [cpassword,setcpassword]= useState();

    const submit = async(e)=>{
        e.preventDefault();
        const result = await fetch("https://hashhub-backend.herokuapp.com/register",{
            method: 'POST',
            headers: {
                "Content-Type":"application/json"
             },
             body: JSON.stringify({
                 name,email,interest,password,cpassword
             })
        })
        if(result.status === 200){
            history.push('/login');
            window.alert('Registered Succesfully!!!');
        }
        else if(result.status === 500){
            window.alert('User Already Exist!! Login');
            history.push('/login')
        }
        else{
            const res = await result.json();
            seterror(res.message);
        }
    }
    return (
        <div class="login_register">
            <div className="left">
                <a href="#">Guidance/Hub</a>
                <img src="https://pratibharana.com/wp-content/uploads/2021/04/web-development-banner.jpg" alt="" />
                <h3>Guidance/Hub is here to provide everything that revolves around your engineering degree</h3>
            </div>
            <div className="right">
                <h2>Welcome</h2>
                <h4>Register to your Account</h4>
                <div className="inputfields">
                    <p>Name</p>
                    <input type="text" value={name} onChange={e=>setname(e.target.value)} />
                </div>
                <div className="inputfields">
                    <p>Email</p>
                    <input type="text" value={email} onChange={e=>setemail(e.target.value)} />
                </div>
                <div className="inputfields">
                    <p>Interest</p>
                    <input type="text" value={interest} onChange={e=>setinterest(e.target.value)} />
                </div>
                <div className="inputfields">
                    <p>Password</p>
                    <input type="password" value={password} onChange={e=>setpassword(e.target.value)} />
                </div>
                <div className="inputfields">
                    <p>Confirm Password</p>
                    <input type="password" value={cpassword} onChange={e=>setcpassword(e.target.value)} />
                </div>
                <button onClick={submit} >Signup</button>
                <p className="para">{error}</p>
                <p className="para">Already have account? <Link to="/login">Login</Link></p>
            </div>
        </div>
    )
}

export default Register
