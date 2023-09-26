import styled from "styled-components";

export const Wrapper = styled.div`
  border: 1px solid;
  height: 99vh;
  width: 100%;
`;

export const StyledEvent = styled.span`
  background: ${({ bgColor }) => bgColor};
  color: white;
  text-align: left !important;
  padding: 2px 10px;
  margin: 0 2px;
  border-radius: 10px;
  font-size: 13px;
  cursor: move;
  text-transform: capitalize;
`;

export const SevenColGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  ${(props) => props.fullheight && `height: calc(100% - 75px);`}
  ${(props) =>
    props.fullheight &&
    `grid-template-rows: repeat(${props.is28Days ? 4 : 5}, 1fr);`}
  div {
    display: flex;
    flex-direction: column;
    border: 1px solid #27415E;

    span {
      text-align: right;
      padding-right: 15px;
      height: fit-content;
    }

    span.active {
      background-color: #27415E;
      color: #DDAE3A;
      border-bottom: 2px solid #DDAE3A;
      position: relative;
    }
    span.active::before {
      content: "(Hoje) ";
      font-size: 14px;
    }
  }
`;

export const HeadDays = styled.span`
  text-align: center;
  border: 1px solid;
  height: 30px;
  padding: 5px;
  background: #ddae3a;
  color: white;
`;

export const DateControls = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  align-items: center;
  background-color: #27415E;
  color: white;
`;

export const SeeMore = styled.p`
  font-size: 12px;
  padding: 0 5px;
  margin-bottom: 0;
  cursor: pointer;
`;

export const PortalWrapper = styled.div`
  background: white;
  position: absolute;
  width: 60%;
  height: 200px;
  top: 50%;
  left: 50%;
  /* border: 1px solid; */
  border-radius: 6px;
  transform: translate(-50%, -50%);
  box-shadow: 10px 10px 20px black;
  padding: 40px;

  h2 {
    font-size: 3rem;
  }

  ion-icon {
    font-size: 2rem;
    color: red;
    background: lightblue;
    padding: 10px 20px;
    border-radius: 6px;
  }

  p {
    margin-bottom: 15px;
  }

  ion-icon[name="close-outline"] {
    position: absolute;
    top: 10px;
    right: 10px;
    background: red;
    color: lightblue;
  }
`;
