import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}


//Kilde: https://dev.to/kunalukey/scroll-to-top-when-route-changes-reactjs-react-router-3bgn