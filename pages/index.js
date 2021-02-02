import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import Input from '../src/components/Input';
import QuizLogo from '../src/components/QuizLogo';
import Button from '../src/components/Button';

// const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
//  background-position: center
// `;

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px) {
    margin: auto;
    padding: 15px;
  }
`;

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>{db.title}</title>
        <meta name="title" content="DARK SOULS: Prepare to Quiz Edition" />
        <meta name="description" content="Você acha que sabe tudo de Dark Souls? Encare esse quiz e descubra!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dark-souls-quiz.darrooooow.vercel.app/" />
        <meta property="og:title" content="DARK SOULS: Prepare to Quiz Edition" />
        <meta property="og:description" content="Você acha que sabe tudo de Dark Souls? Encare esse quiz e descubra!" />
        <meta property="og:image" content="https://i.imgur.com/v5Zf6FK.jpeg" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://dark-souls-quiz.darrooooow.vercel.app/" />
        <meta property="twitter:title" content="DARK SOULS: Prepare to Quiz Edition" />
        <meta property="twitter:description" content="Você acha que sabe tudo de Dark Souls? Encare esse quiz e descubra!" />
        <meta property="twitter:image" content="https://i.imgur.com/v5Zf6FK.jpeg" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>Quiz: Dark Souls</h1>
          </Widget.Header>
          <Widget.Content>
            <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');

              // router manda para a próxima página
            }}
            >
              <Input
                name="nomeDoUsuario"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
                placeholder="Insira um nome."
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Vamos jogar,  ${name}?`}
              </Button>
            </form>
          </Widget.Content>
        </Widget>

        <Widget>
          <Widget.Content>
            <h1>Quizes da galera</h1>

            <p>lorem ipsum dolor sit amet</p>
          </Widget.Content>
        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Darrooooow" />
    </QuizBackground>
  );
}
