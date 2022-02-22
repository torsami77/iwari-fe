import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useInput from "../../hooks/input";
import { signup } from "../../Redux/User";
import { useHistory } from 'react-router-dom';

export const StyledAuth = styled.div`
  width: 430px;
  padding: 3rem 1.5rem;
  background: ${(props) => props.theme.grey};
  border-radius: 4px;
  margin: 8% auto;

  h2 {
    margin-bottom: 1.3rem;
    color: ${(props) => props.theme.secondaryColor};
  }

  .input-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .input-group input:last-child {
    margin-left: 0.7rem;
  }

  input {
    overflow: hidden;
    border-radius: 3px;
    width: 100%;
    padding: 0.6rem 1.2rem;
    background: ${(props) => props.theme.input};
    border: none;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.primaryColor};
    // outline-color: ${(props) => props.theme.secondaryColor};
    outline: none;
  }

  input:focus {
    border: 1px solid ${(props) => props.theme.secondaryColor};
  }

  .action {
    margin-top: 0.6rem;
  }

  button {
    padding: 0.6rem 1rem;
    background: ${(props) => props.theme.secondaryColor};
    color: ${(props) => props.theme.white};
    border: none;
    border-radius: 3px;
    text-transform: uppercase;
    letter-spacing: 1.1px;
    width: 100%;
  }

  p {
    color: black;
  }

  .T_C {
    font-size: 10px;
  }

  .T_C a {
    font-weight: bolder;
    text-decoration: underline;
  }

  p span {
    letter-spacing: 0.8px;
    color: ${(props) => props.theme.secondaryColor};
  }

  .p {
    font-size: 13px;
    padding-top: 10px;
    letter-spacing: 0.6px;
  }

  @media screen and (max-width: 430px) {
    margin: 20% auto;
    width: 90%;
  }
`;

const Signup = ({ setAuth }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const username = useInput("");
  const email = useInput("");
  const password = useInput("");
  const confirm_password = useInput("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !username.value.trim() ||
      !email.value.trim() ||
      !password.value.trim() ||
      !confirm_password.value.trim()
    ) {
      return toast.error("Please fill in all the fields");
    }
    
    //eslint-disable-next-line
    var pattern = new RegExp("^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    if(pattern.exec(password.value)) {
      return toast.error("Password must contain 8 chars e.g Password@")
    }

    if (password.value !== confirm_password.value) {
      return toast.error("Password does not match");
    }

    if (username.value.length <= 3) {
      return toast.error("Username should be atleast four characters long");
    }

    const re = /^[A-Za-z0-9\x6]+$/i;
    if (!re.exec(username.value)) {
      return toast.error("Choose a better username");
    }

    const payload = {
      username: username.value,
      email: email.value,
      password: password.value,
      confirm_password: confirm_password.value,
    };

    const clearForm = () => {
      username.setValue("");
      email.setValue("");
      password.setValue("");
      confirm_password.setValue("");
    };

    dispatch(signup({ payload, clearForm }));
  };

  return (
    <StyledAuth>
      <p>Welcome</p>
      <h2>Create your account</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="username"
          value={username.value}
          onChange={username.onChange}
        />
        <input
          type="email"
          placeholder="email"
          value={email.value}
          onChange={email.onChange}
        />
        <div className="input-group">
          <input
            type="password"
            placeholder="password"
            value={password.value}
            onChange={password.onChange}
          />
          <input
            type="password"
            placeholder="confirm"
            value={confirm_password.value}
            onChange={confirm_password.onChange}
          />
          <p className="T_C">By clicking create account, you are indicating that you have read and agreed to the <br/> 
            <a href="/T&C">Terms of Service and Privacy</a>
          </p>
        </div>
        <div className="action input-group">
          <button>Create Account</button>
          <p className="p">
            Already have an account?
            <span className="pointer" onClick={() => history.push("/login")}>
              {" "}Sign In
            </span>
          </p>
        </div>
      </form>
    </StyledAuth>
  );
};

export default Signup;
