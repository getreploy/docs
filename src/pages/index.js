import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
import { Redirect } from "react-router-dom";

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return(
    <Redirect to={useBaseUrl('docs/doc1')} />
  );
}

export default Home;
