import DefaultLink from 'next/link';
import styled from 'styled-components';

interface ILinkProps {
  text: string;
  as?: string;
  href?: string;
}

export default function Link({ text, as = 'button', href = '/' }: ILinkProps) {
  function handleClick() {
    console.log('CLICKED BITCH');
  }

  return (
    <LinkStyle>
      {as === 'text' ? (
        <DefaultLink href={href}>
          <Anchor>
            {text}
            {/* <svg width="9.501" height="16.582" viewBox="0 0 9.501 16.582">
              <path
                id="right-arrow"
                data-name="right arrow"
                d="M-.565-.325,6.126,6.458l-6.691,6.97"
                transform="translate(1.98 1.739)"
                fill="none"
                stroke="#ff5e15"
                stroke-linecap="round"
                stroke-width="2"
              />
            </svg> */}
          </Anchor>
        </DefaultLink>
      ) : (
        <DefaultLink href={href}>
          <Button onClick={handleClick}>{text}</Button>
        </DefaultLink>
      )}
    </LinkStyle>
  );
}

const LinkStyle = styled.div`
  & * {
    text-transform: uppercase;
    cursor: pointer;
  }
`;

const Button = styled.button`
  background-color: var(--theme-background-secondary);
  padding: 1.2em 1.6em;
  border: none;

  &:hover {
    background-color: var(--theme-background-secondary);
  }
`;

const Anchor = styled.a`
  color: var(--theme-primary);
  text-decoration: underline;

  display: flex;
  align-content: center;
  justify-content: center;
`;
