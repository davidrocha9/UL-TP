import * as React from 'react';

// 👇️ named export
export function BigButton() {
    return (
      <button
        style={{padding: '2rem 1rem'}}
        onClick={() => console.log('big button')}
      >
        Big button
      </button>
    );
  }