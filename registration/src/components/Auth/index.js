import React from "react";
import styles from "./styles.module.css";
import Logo from "../../assets/images/logo.jpeg";
import loginImage from "../../assets/images/loginImg.jpeg";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const Auth = () => {
  return (
    <div className={styles.authContainer}>
      <div className={styles.leftSection}>
        <div className={styles.brandImg}>
          <img src={Logo} alt="Logo" />
        </div>
        <div className={styles.regFormSec}>
          <div className={styles.formTitle}>
            <h2>Sign Up</h2>
            <p>Please enter your contact details to register.</p>
          </div>
          <div className={styles.regForm}>
            <Form>
              <FormGroup>
                <Label for="fullName" className={styles.regFormLabel}>
                  Full Name
                </Label>
                <Input
                  id="fullName"
                  name="fullName"
                  placeholder="Anne Hellon"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="email" className={styles.regFormLabel}>Email address</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="name@correctlearner.com"
                  type="email"
                />
              </FormGroup>
              <FormGroup>
                <Label for="phoneNumber" className={styles.regFormLabel}>Phone Number</Label>
                <Input
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="0715623897"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label for="password" className={styles.regFormLabel}>Password</Label>
                <Input
                  id="password"
                  name="password"
                  placeholder="*********"
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Label for="confirmPassword" className={styles.regFormLabel}>Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  name="confirmPassword"
                  placeholder="*********"
                  type="password"
                />
              </FormGroup>
              <FormGroup>
                <Button className={styles.regBtn}>Register</Button>
              </FormGroup>
            </Form>
          </div>
        </div>
      </div>
      <div className={styles.rightSection}>
        <img src={loginImage} alt="loginImG" className={styles.loginImage} />
      </div>
    </div>
  );
};

export default Auth;
