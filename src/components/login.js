import React, { useState } from "react";
import styles from "../components/login.module.css";
import logo from "../assets/images/app-logo.png";
import loginImage from "../assets/images/login-app-icon.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here (e.g., API call)
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="app-main">
      <div className={styles.login_wrapper}>
        <div className={styles.form_row}>
          <div className={styles.form_col}>
            <div className={styles.col_inner}>
              <div className={styles.logo_wrap}>
                <img src={logo} alt="logo" />
              </div>
              <div className={styles.form_wrapper}>
                <div className={styles.title_wrap}>
                  <h1 className={styles.section_title}>
                    Welcome to Xenflexer Program for IT Consultants
                  </h1>
                  <span className={styles.sub_title}>
                    Welcome back! Please enter your details.
                  </span>
                </div>
                <form onAbort={handleSubmit}>
                  <div className={styles.form_inner}>
                    <div className={styles.form_group}>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>
                    <div className={styles.form_group}>
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={handlePasswordChange}
                      />
                    </div>
                    <div
                      className={`${styles.form_group} ${styles.form_group_row}`}>
                      <div className={styles.remember_wrap}>
                        <input type="checkbox" id="remember" />
                        <label htmlFor="remember">Remember for 30 days</label>
                      </div>
                      <div className={styles.forgot_wrap}>
                        <a href="#">Forgot password?</a>
                      </div>
                    </div>
                    <div className={styles.form_group}>
                      <button type="submit">Sign in</button>
                    </div>
                    <div className={`${styles.form_group}`}>
                      <p className={styles.form_text}>
                        Don’t have an account? <a href="#">Sign up</a>
                      </p>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className={styles.image_col}>
            <div className={styles.col_inner}>
              <div className={styles.image_wrap}>
                <img src={loginImage} alt="image" />
              </div>
              <div className={styles.content_wrap}>
                <h3 className={styles.content_title}>
                  Xenflexer IT Consultants
                </h3>
                <div className={styles.content_text}>
                  <p>
                    Originating from our CEO’s personal struggles in the
                    industry, Xenspire Group, with over 25 years in staffing
                    across Healthcare, Biotech, and IT, is dedicated to
                    positively transforming talent acquisition by removing
                    opaque practices and excessive middleman fees, ensuring
                    transparency and fairness for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
