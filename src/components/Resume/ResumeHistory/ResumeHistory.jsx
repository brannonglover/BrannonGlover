import React from 'react';
import { History, Header, Title, TTL, WhatIDid } from './ResumeHistory.elements';
import data from '../../../assets/info.json';

export default function ResumeHistory() {
  return (
    <>
      {data.history.map(job => (
        <History key={job.id}>
          <Header>
            <Title>{job.title}</Title>
            <TTL>{job.ttl}</TTL>
          </Header>
          <WhatIDid>
            <ul>
              {job.whatidid.map((desc, i) => {
                if (job.title !== "Multiple Titles") {
                  return (
                    <li key={i}>{desc}</li>
                  )
                }
                return false
              })}
            </ul>
          </WhatIDid>
        </History>
      ))}
    </>
  )
}