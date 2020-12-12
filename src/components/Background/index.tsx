import React, { useCallback, useEffect, useRef, useState } from 'react';
import trianglify from 'trianglify';
import { colors } from '../../themes';
import { Canvas } from './styles';

const Background = (): JSX.Element => {
  const ref = useRef();
  const [size] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const generate = useCallback(() => {
    const ctx = ref.current.getContext('2d');
    ctx.drawImage(
      trianglify({
        ...size,
        xColors: [colors.white, colors.background]
      }).toCanvas(),
      0,
      0,
      size.width,
      size.height
    );
  }, []);

  useEffect(() => {
    generate();

    window.addEventListener('resize', generate);

    return () => {
      window.removeEventListener('resize', generate);
    };
  }, []);

  return <Canvas ref={ref} {...size} />;
};

export default Background;
