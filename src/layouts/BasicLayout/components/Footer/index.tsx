import React from 'react';
import styles from './index.module.scss';

export default function Footer() {
  return (
    <p className={styles.footer}>
      <span className={styles.logo}>B<span style={{textDecoration:'underline'}}>O</span>E</span>
      <br />
      <span className={styles.copyright}>© 2020-京东方科技集团股份有限公司 版权所有</span>
    </p>
  );
}