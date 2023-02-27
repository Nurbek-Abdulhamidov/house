import styled from "styled-components";
import { ReactComponent as edit } from "../../assets/icons/edit.svg";
import { ReactComponent as del } from "../../assets/icons/delete.svg";

export const Wrapper = styled.div`
  margin-top: 30px;
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
  margin: auto;
  margin-top: 70px;

  @media (max-width: 920px) {
    padding: var(--standardPadding);
  }
  @media (max-width: 570px) {
    padding: var(--smallPadding);
  }
`;
export const Container = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
  grid-gap: 20px;
  padding: 30px;
  border: 1px solid #e6e9ec;
  margin-top: 32px;
`;

export const Icons = styled.div``;

Icons.Delete = styled(edit)`
  width: 16px;
  height: 16px;
  margin: 16px;
  cursor: pointer;
  :hover {
    & path {
      fill: red;
    }
  }
`;
Icons.Edit = styled(del)`
  width: 16px;
  height: 16px;
  margin: 16px;
  cursor: pointer;
  :hover {
    & path {
      fill: blue;
    }
  }
`;

export const User = styled.div`
  display: flex;
  flex-direction: ${({ flex }) => (flex ? "column" : "row")};
  margin-left: ${({ flex }) => flex && "16px"};

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`;

User.Img = styled.img`
  width: 113px;
  height: 113px;
`;
