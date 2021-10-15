import React from 'react';
import styled from 'styled-components';
import img from "../../assets/img.jpg";

const Wrapper = styled.div `
    margin-bottom: 25px;
    .thumb {
        width: 100%;
        height: 180px;
        object-fit: cover;
        // box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2);
        border-radius: 4px;
    }

    .video-info-container {
        display: flex;
        flex-direction: column;
        margin-top: 0.3rem;
        line-height: 20px;
        padding-top: 8px;
    }

    .channel-avatar img {
        position: relative;
        top: 5px;
    }

    .video-info {
        display: flex;
        justify-content: space-between;
    }

    .video-info h4 {
        font-size: .9rem;
    }

    .video-info span.add {
        font-size: 0.4rem;
        padding: .1rem .5rem;
        text-align: center;
        background: #F43052;
        color: white;
        // padding-right: 0.1rem;
    }

    .video-info .metre {
        border: 1px solid #F43052;
        font-size: 0.5rem;
    }

    .secondary {
        display: flex;
        justify-content: space-between;
    }

    .secondary .views {
        font-size: .7rem
    }

    .secondary .rate {
        font-size: .7rem;
    }

    @media screen and (max-width: 600px) {
        .thumb {
        height: 250px;
        }
    }

    @media screen and (max-width: 420px) {
        .thumb {
        height: 200px;
        }
    }
`;

const CardDiv = styled.div `
    position: relative;
    text-align: center;
    border-radius: 10px;
    height: 90px;
    margin-bottom: 25px;
    &::before {
        content: "";
        position: absolute;
        background: ${(props) => props.color};
        width: 100%;
        border-radius: 10px;
        top: 0;
        bottom: 0;
    }
    img {
        object-fit: cover;
        width: 100%;
        border-radius: 10px;
        height: 100%;
        background:  yellow;
        height: 90px;
    }
    .overlay {
        position: absolute;
        top: 40%;
        left: 20%
        // transform: translate(-60%, -40%);
    }
    .overlay h2 {
        color: white;
        z-index: 1;
    }
`;

export const Video = ({video, rating, }) => {
    return (
        <Wrapper>
            <img className="thumb" src={img} alt="" />
            <div className="video-info-container">
                <div className="video-info">
                    <h4>101 Facts About Africa ...</h4>
                    <span className="add">Add to list</span>
                </div>
                <div className="secondary">
                    <span className="views">123 views</span>
                </div>
            </div>
        </Wrapper>
    )
}

export const VideoTrends = ({video }) => {
    return (
        <Wrapper>
            <img className="thumb" src={img} alt="" />
            <div className="video-info-container">
                <div className="video-info">
                    <h4>101 Facts About Africa ...</h4>
                    <span className="metre">+ 16</span>
                </div>
                <div className="secondary">
                    <span className="views">123 views</span>
                    <span className="rate">rating</span>
                </div>
            </div>
        </Wrapper>
    )
}

export const Card = ({color, cat}) => {
    return (
        <CardDiv color={color}>
            <img src={img} alt="" />
            <div className="overlay">
                <h2>{cat}</h2>
            </div>
        </CardDiv>
    )
}

export const FriendsCard = () => {
    return (
        <div className="list">
            <div className="l-img">
                <img src={img} alt="" />
            </div>
            <div className="l-description">
                <h2>Judie Winkie</h2>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    )
}