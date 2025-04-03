'use client'
import Banner from '@/components/Banner';
import '@/app/globals.css';

function MyApp({ Component, pageProps } : {Component: any, pageProps: any}) {
  return (
    <div>
      <Banner />
      <div className="main-container"> 
        <Component {...pageProps} />
      </div> 
    </div>
  );
}

export default MyApp;