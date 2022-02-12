import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../Components/NavBar/Navbar';
import Sidebar from '../Components/Sidebar/Sidebar';
import styled from "styled-components";
import { VideoGrid, Grid } from "../Styles/Grids";

// Styled component
import Container from '../Styles/Container/Container';
import { Video, Card, VideoTrends } from '../Components/Cards/Cards';

export const Main = styled.div`
    padding: 1.3rem;
    width: 90%;
    margin: 0 auto;
    padding-bottom: 7rem;

    h2 {
        margin-bottom: 1rem;
    }

    @media screen and (max-width: 1093px) {
        width: 95%;
    }

    @media screen and (max-width: 1090px) {
        width: 99%;
    }

    @media screen and (max-width: 870px) {
        width: 90%;
    }

    @media screen and (max-width: 670px) {
        width: 99%;
    }

    @media screen and (max-width: 600px) {
        width: 90%;
    }

    @media screen and (max-width: 530px) {
        width: 100%;
    }
`;

const Home = () => {
    return (
        <div>
            <Navbar />
            <Sidebar />
            <Container>
                <Main>
                    <div>
                        <div>
                            <h2>Recommended for You</h2>
                        </div>
                        <VideoGrid>
                            <Link to={`/watch/:id`}>
                                <Video/>
                            </Link>
                            <Link to={`/watch/:id`}>
                                <Video/>
                            </Link>
                            <Link to={`/watch/:id`}>
                                <Video/>
                            </Link>
                        </VideoGrid>
                    </div>
                    <div>
                        <div>
                            <h2>Discover</h2>
                        </div>
                        <Grid>
                            <Link to={`/category/:cat`}>
                                <Card color="rgba(70, 210, 122, 0.75)" cat="Educational"/>
                            </Link>
                            <Link to={`/category/:cat`}>
                                <Card color="rgba(74, 211, 231, 0.75)" cat="Drama"/>
                            </Link>
                            <Link to={`/category/:cat`}>
                                <Card color="rgba(241, 90, 151, 0.75)" cat="History"/>
                            </Link>
                            <Link to={`/category/:cat`}>
                                <Card color="rgba(248, 199, 80, 0.75)" cat="TV Shows"/>
                            </Link>
                        </Grid>
                    </div>
                    <div>
                        <div>
                            <h2>Trending</h2>
                        </div>
                        <Grid>
                            <Link to={`/watch/:id`}>
                                <VideoTrends/>
                            </Link>
                            <Link to={`/watch/:id`}>
                                <VideoTrends/>
                            </Link>
                            <Link to={`/watch/:id`}>
                                <VideoTrends/>
                            </Link>
                            <Link to={`/watch/:id`}>
                                <VideoTrends/>
                            </Link>
                        </Grid>
                    </div>
                </Main>
            </Container>
        </div>
    )
}

export default Home;