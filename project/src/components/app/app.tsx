import MainPage from '../../pages/main-page/main-page';
import {PropsWithChildren} from 'react';

type AppProps = PropsWithChildren<{
  title: string;
  genre: string;
  year: number;
}>

function App({title, genre, year}: AppProps): JSX.Element {
  return (<MainPage title={title} genre={genre} year={year}/>);
}

export default App;
