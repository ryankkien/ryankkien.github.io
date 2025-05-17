import React, { useEffect, useRef } from 'react';

const HeroAnimation = () => {
  const canvasRef = useRef(null);
  
  useEffect(() => {
    console.log("HeroAnimation mounted");
    const canvas = canvasRef.current;
    if (!canvas) {
      console.error("Canvas ref not found");
      return;
    }
    
    console.log("Canvas dimensions:", canvas.width, canvas.height);
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let blobs = [];
    let predators = [];
    
    // Mouse position tracking
    let mouseX = undefined;
    let mouseY = undefined;
    let mouseRadius = 120;
    
    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      console.log("Canvas resized to:", canvas.width, canvas.height);
      
      // Draw background with solid color for testing
      ctx.fillStyle = 'red'; // Bright color for testing
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    // Animation loop - simplified for testing
    const animate = () => {
      // Just draw a red background for testing visibility
      ctx.fillStyle = 'blue';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw a test circle
      ctx.fillStyle = 'yellow';
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, Math.PI * 2);
      ctx.fill();
      
      animationFrameId = requestAnimationFrame(animate);
    };
    
    animate();
    console.log("Simple animation started");
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
      console.log("HeroAnimation cleanup");
    };
  }, []);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="absolute top-0 left-0 w-full h-full" 
      style={{ 
        zIndex: 5, 
        backgroundColor: 'green',
        opacity: 1
      }}
    />
  );
};

export default HeroAnimation; 