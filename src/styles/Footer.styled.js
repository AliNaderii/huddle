import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.footer};
  color: #fff;
  padding: 80px 0 60px;

  div {
    display: flex;
    flex-direction: column;
  }

  div:nth-child(2) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  img {
    max-width: 25%;
    margin-bottom: 20px;
  }

  ul {
    list-style-type: none;
    border-radius: 5px;
    margin: 10px;
    padding: 10px;
    box-shadow: 2px 2px 2px rgba(255, 255, 255, 0.1);
  }

  ul li {
    margin-bottom: 10px;
  }

  p {
    text-align: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;

    div:nth-child(2) {
    display: flex;
    flex-direction: column;
  }

    
    p {
      text-align: center;
    }
  }
`;