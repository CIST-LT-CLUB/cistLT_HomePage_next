import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <div className="body" >
      <h1 className="">
            Welcome to <a href="https://nextjs.org">Next.js!</a>
      </h1>
      <Component {...pageProps} />
    </div>
  ); 
}

export default MyApp
