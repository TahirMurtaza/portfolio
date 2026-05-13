"use client"
import { useEffect } from 'react';
import { ScrollToTop } from 'react-simple-scroll-up';

const Dependency = () => {

  useEffect(() => {

    // Dynamically import Bootstrap JS to avoid SSR issues
    import('bootstrap/dist/js/bootstrap.bundle.min.js').then(() => {
      console.log('Project loaded successfully.');
    }).catch((err) => {
      console.error('Project loading ...:', err);
    });
  }, []);

  return (
    <>
      <ScrollToTop symbol={<i className="fal fa-long-arrow-up"></i>} />
    </>
  );
};

export default Dependency;