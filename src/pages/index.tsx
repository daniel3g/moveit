import Head from 'next/head';

import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { CompletedChallenges } from "../components/CompletedChallenges";
import { ChallengeBox } from "../components/ChallengeBox";
import { CountDown } from "../components/CountDown";

import styles from '../styles/pages/Home.module.css';
import React from 'react';
import { CountdownProvider } from '../contexts/CountdownContext';

export default function Home() {
  return (
    <div className={ styles.container }>
      <Head>
        <title>Move It</title>
      </Head>

      <ExperienceBar />
      <CountdownProvider>
        <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <CountDown />
        </div>
        
        <div>
          <ChallengeBox />
        </div>
      </section>
    </CountdownProvider>
    </div>
  )
}
