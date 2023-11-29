"use client"

import Image from 'next/image'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [password, setPassword] = useState("");

  return (<div className={styles.container}>
    <input
      value={password}
      onChange={(e) => {
        setPassword(e.target.value);
      }}
    />

  </div>
  );
}
