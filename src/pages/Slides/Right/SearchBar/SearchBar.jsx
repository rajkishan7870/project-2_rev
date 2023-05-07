
import React from 'react';
import { FaSearch } from 'react-icons/fa';
import styles from './SearchBar.module.css';

export default function Search() {
  return (
    <div className={styles.searchContainer}>
      <button className={styles.searchButton}><FaSearch/></button>
      <input className={styles.searchInput} type="text" placeholder="Search Twitter" onChange={(e)=>e.target.value} />
    </div>
  );
}