import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full relative bg-black text-white p-4 text-center z-50">
      <p>© {new Date().getFullYear()} Sefufim. All rights reserved.</p>
    </footer>
  );
}