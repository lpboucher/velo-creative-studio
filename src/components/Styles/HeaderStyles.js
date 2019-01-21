import Link from 'gatsby-link';
import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  margin: 0 auto;
  height: 10vh;
  background-color: #f2f2f0;
`;

export const HeaderContainer = styled.div`
  padding: 20px 40px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  z-index: 2;
  background-color: #f2f2f0;

  @media (max-width: 400px) {
    padding: 20px 0 20px 40px;
  }

  h1 {
    margin: 0;
    font-size: 16px;
  }
`;

export const NavContainer = styled.nav`
  flex-grow: 1;
`;

export const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  float: right;
  margin: 0;

  @media (max-width: 900px) {
        display: ${props => (props.hide === false ? 'block' : 'none')};
        width: 100%;
        position: absolute;
        left: 0;
        background-color: #f2f2f0;
        padding: 20px 40px;
        z-index: 5;
    }
`;

export const MobileIcon = styled.a`
  display: none;
  color: black;
  text-decoration: none;
  font-size: 24px;

  @media (max-width: 900px) {
    display: inline-block;
    width: 100%;
    text-align: right;

    
  }
`;

export const StyledLink = styled(Link)`
color: #4a4a4a;
text-decoration: none;
font-size: 16px;
font-weight: 300;
letter-spacing: 2px;
`;

export const StyledTopMenu = styled.a`
color: #4a4a4a;
text-decoration: none;
font-size: 16px;
font-weight: 300;
letter-spacing: 2px;
cursor: pointer;
`;

export const StyledLogo = styled(Link)`
text-decoration: none;
font-size: 16px;
font-weight: 300;
letter-spacing: 2px;
color: ${props => (props.location.pathname === '/en-us' ||
                  props.location.pathname === '/en-us/' ||
                  props.location.pathname === '/' ||
                  props.location.pathname === '/en-US' ||
                  props.location.pathname === '/en-US/' ||
                  props.location.pathname === '/fr' ||
                  props.location.pathname === '/fr/' ? '#f4f4f3' : '#4a4a4a')};

@media (max-width: 400px) {
  font-size: 12px;
  }
`;

export const StyledNavItem = styled.li`
  margin: 0 20px;

  & > ${StyledLink},
  & > ${StyledTopMenu} {
    text-transform: uppercase;
    font-size: 13px;
  }

  @media (max-width: 900px) {
    width: 100%;
    padding: 1% 0;
    margin: 0;
  }
`;

export const LanguageSelect = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  text-transform: uppercase;
  flex-direction: column;
  line-height: 32px;
  font-size: 14px;

  & > a {
    color: #4a4a4a;
    text-decoration: none;
    font-weight: 300;
    letter-spacing: 2px;

    &:nth-child(1) {
      display: ${props => (props.locale.substr(0, 2) === 'fr' ? 'initial' : 'none')};
    }

    &:nth-child(2) {
      display: ${props => (props.locale.substr(0, 2) === 'en' ? 'initial' : 'none')};
    }

    & > li {
      margin: 0 20px;
    }
  }
`;

export const SubContainer = styled.div`
  position: absolute;
  height: 10vh;
  width: 100vw;
  padding: 20px 40px;
  transform: ${props => (props.isOpen ? 'translate3d(0vw, 0, 0)' : 'translate3d(-100vw, 0, 0)')};
  transition: transform .4s cubic-bezier(0, .52, 0, 1);
  left: 0;
  top: 10%;

  @media (max-width: 900px) {
    width: 50vw;
    left: 40%;

    & > ${StyledNavList} {
      display: block;
    }
  }
`;
