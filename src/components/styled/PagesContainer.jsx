import styled from 'styled-components'

const Container = styled.div`
    
    width: 100%;
    height: 100%;
    overflow-y: auto;

    position: fixed;
    z-index: 4;

    display: flex;
    justify-content: center;
    align-items: start;

    img {
        width: 100%;
        margin-bottom: 60%;
        
    }
`;

export default Container;