import React from 'react';

import './styles.css';

function RootLayout({ children }) {
  const renderedOnTime = new Date().toLocaleString();
  console.log(`rendered on Server: ${renderedOnTime}`)
  return (
    <html lang="en">
      <body>
        {children}
        <footer>Page rendered on: {renderedOnTime}</footer>
      </body>
    </html>
  );
}

export default RootLayout;
