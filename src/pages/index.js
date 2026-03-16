import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout title="CyberSecurity Docs">

      <div style={{padding:'60px',textAlign:'center'}}>
        <h1>DriveSafe</h1>

        <p>
        CyberSecurity Docs helps you find cool things
  about CyberSecurity! It helps you understand and how to be safe! Made by ProjectLemon, docs build by docusaurus.
        </p>

        <a href="/docs/penalties">
          <button style={{fontSize:'20px'}}>
          View Driving Guides
          </button>
        </a>

      </div>

    </Layout>
  );
}
