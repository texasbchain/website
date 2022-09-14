import styled from 'styled-components'

export const Container = styled.div`
    padding: 20px 60px;
    backgroundColor: 'transparent';
    @media (max-width: 768px) {
        display: none;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column; 
    justify-content: center;
    max-width: 1000px;
    margin: 0 auto;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column; 
    text-align: left;
    margin-left: 60px;
`

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(230px, 1fr));
    grid-gap: 15px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill,minmax(230px, 1fr));
    }

`

export const Link = styled.a`
    color: #fff;
    margin-bottom: 20px;
    font-size: 16px;
    text-decoration: none;
    &:hover {
        color: #83a0df;
        transition: 200ms ease-in;
    }
`

export const Title = styled.p`
    font-size: 22px;
    color: #fff;
    margin-bottom: 30px;
    font-weight: bold;
`
export const Img = styled.a`
    height: "2%";
    width: "1%";
`