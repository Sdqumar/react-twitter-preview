import { Helmet } from 'react-helmet-async'
import './App.css'

function App() {
  
  // Twitter card metadata (can be dynamic based on props or state)
  const pageTitle = 'Vite + React'
  const pageDescription = 'A Vite and React application'
  const imageUrl = `https://chronly.ai/last-worked-dark-0.png` // Dynamic absolute URL

  return (
    <>
      <Helmet>
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
      <div>
          <img src={imageUrl} className="logo" alt="Vite logo" />
       
      </div>
      <h1>Vite + React</h1>
     
    </>
  )
}

export default App
