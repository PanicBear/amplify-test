import { useRouter } from 'next/router';
import styled from 'styled-components';

const NavLinkContainer = styled.li<{ isActive: boolean }>`
  flex: 1;
  width: 100%;
  padding: 8px;
  background-color: ${({ theme, isActive }) => (isActive ? theme.Color.DarkGray : theme.Color.Black)};
  border-top: 1px solid ${({ theme }) => theme.Color.DarkGray};
  border-bottom: 1px solid ${({ theme }) => theme.Color.DarkGray};
`;
const NavLinkTitle = styled.p`
  font-size: 1rem;
  margin: 0;
  margin-bottom: 4px;
`;
const NavLinkDetail = styled.p`
  font-size: 0.75rem;
  margin: 0;
  padding-left: 8px;
`;

interface NavLinkItemProps {
  title: { name: string; baseUrl: string };
  detail?: { name: string; url: string }[];
}

const NavLinkItem: (props: NavLinkItemProps) => JSX.Element = ({ title, detail }) => {
  const router = useRouter();

  const onNavLinkClick = () => {
    router.push(title.baseUrl);
  };
  const onClickDetail = (e: React.MouseEvent, url: string) => {
    e.stopPropagation();
    router.push(title.baseUrl + url);
  };
  const setIsActive = () => {
    const [baseUrl] = router.asPath.match(/(?:\/\w+)/g) || [];
    const isActive = baseUrl === title.baseUrl;

    return isActive;
  };

  return (
    <NavLinkContainer isActive={setIsActive()} onClick={onNavLinkClick}>
      <NavLinkTitle>{title.name}</NavLinkTitle>
      {detail?.map(({ name, url }, index) => {
        return (
          <NavLinkDetail key={index} onClick={(e) => onClickDetail(e, url)}>
            {name}
          </NavLinkDetail>
        );
      })}
    </NavLinkContainer>
  );
};

export default NavLinkItem;
