import React from 'react';
import Noscript from './noScriptWrap';

const addTagManager = () => {
  const codeOfGTM = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N5MK7D6')`;

  const GTMWithScript = () => <script>{codeOfGTM}</script>;

  const GTMWithoutScript = () => (
    <Noscript>
      <iframe
        title="google tag manager"
        src="https://www.googletagmanager.com/ns.html?id=GTM-N5MK7D6"
        height="0"
        width="0"
        style={{ display: 'none' }}
      />
    </Noscript>
  );

  return [GTMWithoutScript, GTMWithScript];
};

export default addTagManager;
