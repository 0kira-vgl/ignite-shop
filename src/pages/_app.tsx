import { AppProps } from 'next/app';
import { GlobalStyles } from '../styles/global';
import { Container, Header } from '../styles/pages/app';
import LogoImg from '../assets/igniteLogo.svg';
import Image from 'next/image';

GlobalStyles();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <Image src={LogoImg} alt="" />
      </Header>

      <Component {...pageProps} />
    </Container>
  );
}
