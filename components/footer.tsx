import React from 'react'

export default function Footer() {
  return (
    <div>
      <footer className="bg-black text-white p-4 text-center fixed bottom-0 w-full">
      <p>© {new Date().getFullYear()} Sefufim. All rights reserved.</p>
    </footer>  
      
    </div>
  )
}
