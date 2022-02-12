import React from 'react'
import Navbar from '../Components/NavBar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import styled from 'styled-components';
import Container from '../Styles/Container/Container';

const DIV = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black;
    height: 530px;
`;

const Watch = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Container>
                <DIV>
                    <h1>This page is under maintainance check back soon.</h1>
                </DIV>
            </Container>
        </div>
    )
}

export default Watch;