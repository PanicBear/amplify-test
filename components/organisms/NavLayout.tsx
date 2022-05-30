import { NAV_DATA } from '@constants/index';
import { useUserContext } from '@context/index';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import NavLinkItem from '../molecules/NavLinkItem';

const LayoutContainer = styled.div`
  ${({ theme }) => theme.Layout.flexRowStart}
`;
const Navbar = styled.nav`
  ${({ theme }) => theme.Layout.flexColStart}
  height: 100vh;
  background-color: ${({ theme }) => theme.Color.Black};
  color: white;
`;
const NavbarList = styled.ul`
  ${({ theme }) => theme.Layout.flexColStart}
  height: 100%;
  list-style: none;
  padding: 0;
`;
const NavItem = styled.li`
  flex: 1;
  width: 100%;
  padding: 8px;
  font-size: 1rem;
`;
const TemplateContainer = styled.main`
  flex: 1;
  height: 100vh;
  overflow-y: auto;
  margin-left: 12px;
`;

interface LayoutProps {
  children: React.ReactNode;
}

export function NavLayout({ children }: LayoutProps) {
  const router = useRouter();
  const { logout } = useUserContext();

  const onLogoClick = () => {
    router.push('/main');
  };
  const onLogoutClick = () => {
    logout();
  };

  return (
    <LayoutContainer>
      <Navbar>
        <NavbarList>
          <NavItem style={{ fontSize: '16px' }} onClick={onLogoClick}>
            Lahatjob Admin
          </NavItem>
          {NAV_DATA?.map((item, index) => {
            return <NavLinkItem key={index} {...item}></NavLinkItem>;
          })}
          <NavItem onClick={onLogoutClick}>Logout</NavItem>
        </NavbarList>
      </Navbar>
      <TemplateContainer>{children}</TemplateContainer>
    </LayoutContainer>
  );
}

export default NavLayout;
