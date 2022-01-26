import React from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useInput from "../../hooks/input";
import { signup } from "../../Redux/User"; 

export const StyledAuth = styled.div`
    width: 385px;
    padding: 3rem 1.5rem;
    background: ${(props) => props.theme.grey};
    border-radius: 4px;
    margin: 8% auto;

    h2 {
        margin-bottom: 1.3rem;
    }

    .input-group {
        display: flex;
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
        background: ${(props) => props.theme.black};
        border: 1px solid ${(props) => props.theme.black};
        margin-bottom: 1.5rem;
        color: ${(props) => props.theme.primaryColor};
    }

    .action {
        margin-top: 1rem;
    }

    button {
        padding: 0.4rem 1rem;
        background: ${(props) => props.theme.red};
        color: ${(props) => props.theme.white};
        border: 1px solid ${(props) => props.theme.red};
        border-radius: 3px;
        text-transform: uppercase;
        letter-spacing: 1.1px;
    }

    span {
        letter-spacing: 0.8px;
        color: ${(props) => props.theme.secondaryColor};
    }

    @media screen and (max-width: 430px) {
        margin: 20% auto;
        width: 90%;
    }
`;

const SignUp = ({ setAuth }) => {
    const dispatch = useDispatch();
    // reg details
    const username = useInput("");
    const email = useInput("");
    const password = useInput("");
    const confirm_password = useInput("");
    // const isCreator = useInput("");

    // handle submit 
    const handleSubmit = () => {
        if(!username.value.trim() || !email.value.trim() || password.value.trim() || confirm_password.value.trim()) {
            return toast.error("Please fill in all fields");
        }

        if(password.value !== confirm_password.value) {
            return toast.error("Password does not match");
        }
        if (username.value.length <= 3) {
            return toast.error("Username should be atleast four characters long");
        }

        const re = /^[a-z0-9\x20]+$/i;
        if(!re.exec(username.value)) {
            return toast.error("Choose a better username")
        }

        const payload = {
            username: username.value,
            email: email.value,
            password: password.value,
            confirm_password: confirm_password.value,
            isCreator: true
        }

        const clearForm = () => {
            username.setValue("");
            email.setValue("");
            password.setValue("");
            confirm_password.setValue("")
        }
        dispatch(signup({payload, clearForm}));
    }
    return (
        <StyledAuth>
            <h2>Create your account</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-group">
                    <input type="text" placeholder='username' value={username.value} onChange={username.value} />
                    <input type="text" placeholder='email' value={email.value} onChange={email.value}/>
                </div>
                <div className="input-group">
                    <input type="text" placeholder='password' value={password.value} onChange={password.value}/>
                    <input type="text" placeholder='confirm_password' value={confirm_password.value} onChange={confirm_password.value}/>
                </div>
                <div className="action input-group">
                    <span className="pointer" onClick={() => setAuth("LOGIN")}>
                        Signin instead
                    </span>
                    <button>Sign Up</button>
                </div>
            </form>
        </StyledAuth>
    );
};

export default SignUp;