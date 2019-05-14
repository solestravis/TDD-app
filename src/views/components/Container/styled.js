import styled from 'styled-components';

export const ContainerStyled = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100vh;
    justify-content: center;
    overflow-x: hidden;
    overflow-y: auto;
    width: 100%;
    img {
        width: 35%;
    }
`;

ContainerStyled.displayName = 'ContainerStyled';
