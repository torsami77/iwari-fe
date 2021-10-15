import React from 'react';
// import { useHistory } from 'react-router';
import styled from 'styled-components';

const Wrapper = styled.div`
    input.search {
        background: rgb(33, 11, 44);
        padding: 0.4rem 1rem;
        border: 1px solid ${(props) => props.theme.darkGrey};
        height: 31px;
        color: ${(props) => props.theme.primaryColor};
    }

    @media screen and (max-width: 700px) {
        input.search {
            display: none;
        }
    }
`;

const Search = () => {
    return (
        <>
            <Wrapper>
                <input
                    className="search"
                    type="search"
                    placeholder=""
                />
            </Wrapper>
        </>
    )
}

export default Search;