import styled from "styled-components";

export default function HomeNavBar() {
  return (
    <HomeNavBarWrapper className="homeNavBarWrapper">
      <LogoWrapper>
        <LogoImg alt="Logo" src="logo.svg" />
      </LogoWrapper>

      <Links>
        <EmptyLink />
        <Link>Réception</Link>
        <Link>Prestataires</Link>
        <EmptyLink />
      </Links>
      <ConnectionButton>Se connecter</ConnectionButton>
    </HomeNavBarWrapper>
  );
}

const HomeNavBarWrapper = styled.div`
  width: 100vw;
  height: 10vh;
  display: flex;
`;

const LogoWrapper = styled.div`
  flex: 1;
`;

const LogoImg = styled.img`
  height: 100%;
  max-width: 100%;
  padding-left: 20px;
`;

const Links = styled.div`
  display: flex;
  flex: 2;
`;

const EmptyLink = styled.div`
  flex: 1;
  align-self: center;
  text-align: center;
`;

const Link = styled.div`
  flex: 2;
  align-self: center;
  text-align: center;
`;

const ConnectionButton = styled.button`
  flex: 1;
`;
