import { useRef, useEffect } from 'react';

const useChatScroll = (dep) => {
  const ref = useRef(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.scrollTop = ref.current.scrollHeight;
    }
  }, [dep]);

  return ref;
}

export default useChatScroll