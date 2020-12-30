import styled from "styled-components";

export default function HomeSearchBar() {
  return (
    <HomeSearchBarWrapper className="homeSearchBarWrapper">
      <HomeSearchBarWhat placeholder="Que cherchez-vous ?" />
      <HomeSearchBarWhere placeholder="Où ?" />
      <HomeSearchBarWhen placeholder="Quand ?" />
      <HomeSearchBarSubmitButton>Rechercher</HomeSearchBarSubmitButton>
    </HomeSearchBarWrapper>
  );
}

const HomeSearchBarWrapper = styled.div`
  width: 80vw;
  height: 8vh;
  margin: auto;
  background-color: white;
  display: flex;
  flex-direction: row;
`;

const HomeSearchBarWhat = styled.input`
  padding-left: 20px;
  flex: 3;
`;

const HomeSearchBarWhere = styled.input`
  padding-left: 20px;
  flex: 1;
`;

const HomeSearchBarWhen = styled.input`
  padding-left: 20px;
  flex: 2;
`;

const HomeSearchBarSubmitButton = styled.button`
  flex: 1;
  background-color: rgb(239, 106, 112);
  color: white;
`;
