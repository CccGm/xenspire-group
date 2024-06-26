import React, { useState } from "react";
import axios from "axios";
import { ArrowBackOutlined } from "@mui/icons-material";
import styles from "./forgot_pass.module.css";
import logo from "../../assets/images/app-logo.png";
import loginImage from "../../assets/images/login-app-icon.png";
import icon from "../../assets/images/Featured icon.png";

const Forgot_Pass = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/forgotpassword/",
        {
          email,
        }
      );

      if (response.status === 200) {
        console.log("email send successfully");
      } else {
        console.log("email send failed");
      }
    } catch (error) {
      console.error("email send error:", error.message);
    }
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
                  <img src={icon} alt="icon" />
                  <h1 className={styles.section_title}>Forgot Password</h1>
                  <span className={styles.sub_title}>
                    No worries, we'll send you reset instructions.
                  </span>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className={styles.form_inner}>
                    <div className={styles.form_group}>
                      <label htmlFor="email">Email*</label>
                      <input
                        type="email"
                        id="email"
                        required
                        placeholder="Enter your email"
                        value={email}
                        onChange={handleEmailChange}
                      />
                    </div>

                    <div className={styles.form_group}>
                      <button type="submit">Reset Password</button>
                    </div>
                    <div className={styles.form_group}>
                      <p className={styles.form_text}>
                        <a href="/login">
                          <ArrowBackOutlined />
                          {"     "}
                          Back to Log in
                        </a>
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

export default Forgot_Pass;
