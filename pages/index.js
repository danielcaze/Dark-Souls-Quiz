import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import db from '../db.json';
import Widget from '../src/components/Widget';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';

// const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
//  flex: 1;
//  background-size: cover;
//  background-position: center
// `;

export const QuizContainer = styled.div`
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
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
              
        <title>DARK SOULS: Prepare to Quiz Edition</title>
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

        <Widget>
          <Widget.Header>
            <h1>Dark Souls</h1>
          </Widget.Header>
          <Widget.Content>
            <p>O jogo mais difícil do mundo</p>
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
      <GitHubCorner projectUrl="https://github.com/Darrooooow/Dark-Souls-Quiz" />
    </QuizBackground>
  );
}
