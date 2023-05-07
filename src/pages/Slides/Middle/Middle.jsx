import React from 'react'
import { Button } from '@mui/material'
import styles from './Middle.module.css'
import {TweetProfile} from '../../../components/TweetProfile'
import Feeds from '../../../components/Feeds/Feeds'

export default function Middle() {
  return (
    <div>

      <div className={styles.top}>
        <h1>Home</h1>
     

        <div className={styles.topbtn}>
            <Button
            sx={{
              width : "50%"
            }}
            >Home</Button>
            <Button
            sx={{
              width : "50%"
            }}
            >Following</Button>
        </div>
      </div>

      <TweetProfile />

      <Feeds/>


    </div>
  )
}
