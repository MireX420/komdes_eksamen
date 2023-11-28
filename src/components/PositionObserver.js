import { useEffect, useRef, useState } from "react";

export default function PositionObserver(props){
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();
  const { flyTo } = props;
    
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !isVisible) {
          setVisible(true);
          flyTo();
        }
      });
    });
    observer.observe(domRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  

  return (
    <div ref={domRef}>
      {props.children}
    </div>
  );
}
