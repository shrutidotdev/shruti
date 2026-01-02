import { useEffect, useState } from "react";

function useCalenderSize() {
  const [size, setSize] = useState({ block: 10, margin: 5 });

  useEffect(() => {
    const updateSize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setSize({ block: 7, margin: 2 });
      } else if (width >= 640 && width < 1024) {
        setSize({ block: 10, margin: 2 });
      } else {
        setSize({ block: 12, margin: 3 });
      }
    };
  }, []);

  return size;
}
export default useCalenderSize;