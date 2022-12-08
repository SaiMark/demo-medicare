import * as React from "react";
import {
  Row,
  Col,
  Container,
} from "@mui/material";
import './home.css';
import { boldRaleway, button, cardMedia, raleway } from "./styles";
import HomeIMG  from './home-img.svg';
const Register = () => {
  return (
    <div>
    <section class="home" id="home">

    <div class="image">
      <img src = {HomeIMG}/> {/* <img src="image/home-img.svg" alt=""> */}
    </div>

    <div class="content">
        <h3>Stay with ThincHealth </h3>
        <p>We hope that the power of the Internet will bring patients and doctors closer together and make healthcare more accessible!</p>
        {/* <a href="#" class="btn"> contact us <span class="fas fa-chevron-right"></span> </a> */}
        {/* <Container> */}
         
              <a href="/doctor_signup" className="btn">
                Sign Up Doctor
              </a>

              <a href="/doctor_signin" className="btn">
                Sign In Doctor
              </a>
   
              <a href="/patient_signup" className="btn">
                Sign Up as Patient 
              </a>

              <a href="/patient_signin" className="btn">
                Sign In Patient
              </a>

              <a href="/admin_signin" className="btn">
                Sign In Admin
              </a>
{/*           
        </Container> */}
    </div>

    </section>
    </div>
  );
};

export default Register;

{/* <Button sx={button} href="/doctor_signup">
                Sign Up Doctor
              </Button>

              <Button sx={button} href="/doctor_signin">
                Sign In Doctor
              </Button>

              <Button sx={button} href="/patient_signup">
                Sign Up as Patient 
              </Button>

              <Button sx={button} href="/patient_signin">
                Sign In Patient
              </Button>

              <Button sx={button} href="/admin_signin">
                Sign In Admin
              </Button> */}