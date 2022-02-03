// GLOBAL STYLES
import GlobalStyles from './styles/Global';
// THEME PROVIDER
import { ThemeProvider } from 'styled-components';
// STYLED COMPONENTS
import { Container } from './styles/Container.styled';

// COMPONENTS
import Header from './components/Header';
import Card from './components/Card';
import Footer from './components/Footer';

// SOME CONTENT
import content from './content';

const theme = {
  colors: {
    header: '#ebfbff',
    body: '#fff',
    footer: '#003333',
  },
  mobile: '768px',
};

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          { content.map((item, index) => (
            <Card key={ index } item={ item } />
          )) }
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
