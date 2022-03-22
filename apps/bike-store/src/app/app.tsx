// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { Header } from '@stores/header';
import Head from 'next/head';

export function App() {
  return (
    <>
      <Header />
      <NxWelcome title="bike-store" />
      <div />
    </>
  );
}

export default App;
