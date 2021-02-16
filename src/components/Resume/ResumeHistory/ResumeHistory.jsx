import React from 'react';
import { Employment, History, Header, Title, TTL, WhatIDid } from './ResumeHistory.elements';
import data from '../../../assets/info.json';

export default function ResumeHistory() {
  return (
    <>
      {data.history.map(job => (
        <History key={job.id}>
          <Employment>{job.company}</Employment>
          <Header>
            <Title>{job.title}</Title>
            <TTL>{job.ttl}</TTL>
          </Header>
          {!job.multiple && (
            <WhatIDid>
              <ul>
                {job.whatidid.map((desc, a) => {
                  if (!job.multiple) {
                    return <li key={a}>{desc}</li>
                  }
                  return false
                })}
              </ul>
            </WhatIDid>
          )}
          {job.multiple && (
            <>
              {job.whatidid.map((desc,i) => {
                if (job.multiple) {
                  return (
                    <React.Fragment key={i}>
                      <Header>
                        <Title>{desc.title}</Title>
                        <TTL>{desc.ttl}</TTL>
                      </Header>
                      <WhatIDid>
                        <ul>
                          {desc.whatidid.map((multidesc, b) => {
                            if (job.multiple) {
                              return <li key={b}>{multidesc}</li>
                            }
                            return false
                          })}
                        </ul>   
                      </WhatIDid>
                    </React.Fragment>
                  )
                }
                return false
              })}
            </>
          )}
        </History>
      ))}
    </>
  )
}