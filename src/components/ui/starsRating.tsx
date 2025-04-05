"use client"
import { useState } from 'react';

const StarRating = ({ onChange }: { onChange: (rating: number) => void }) => {
  const [rating, setRating] = useState<number>(0);
  const [hoverPosition, setHoverPosition] = useState<number>(0);

  const calculateRating = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    return Math.round((percentage / 100) * 10) / 2;
  };

  const handleHover = (e: React.MouseEvent<HTMLDivElement>) => {
    const newRating = calculateRating(e);
    setHoverPosition(newRating);
  };

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const newRating = calculateRating(e);
    setRating(newRating);
    onChange(newRating);
  };

  const getStarState = (index: number) => {
    const filledValue = hoverPosition || rating;
    const starNumber = index + 1;
    if (filledValue >= starNumber) {
      return 'full';
    } else if (filledValue >= starNumber - 0.5) {
      return 'half';
    } else {
      return 'empty';
    }
  };

  return (
    <div
      className="relative inline-flex cursor-pointer group"
      onMouseMove={handleHover}
      onMouseLeave={() => setHoverPosition(0)}
      onClick={handleClick}
    >
      {/* Background stars */}
      <div className="flex">
        {[...Array(5)].map((_, i) => (
          <svg
            key={`bg-${i}`}
            className="w-12 h-12 text-gray-300 transition-all duration-150"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>

      {/* Foreground stars with glow effect */}
      <div className="absolute top-0 left-0 flex overflow-hidden w-full h-full">
        {[...Array(5)].map((_, i) => {
          const state = getStarState(i);
          const isActive = (hoverPosition > 0 || rating > 0) && (state === 'full' || state === 'half');

          return (
            <div
              key={`fg-${i}`}
              className="relative w-12 h-12 transition-all duration-150"
              style={{ width: '20%' }}
            >
              {state === 'full' && (
                <div className={`${isActive ? 'scale-110 filter brightness-110' : ''}`}>
                  <svg
                    className="w-12 h-12 text-yellow-400 transition-all duration-150"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              )}

              {state === 'half' && (
                <>
                  <div className={`absolute top-0 left-0 w-1/2 h-full overflow-hidden ${isActive ? 'scale-110 filter brightness-110' : ''}`}>
                    <svg
                      className="w-12 h-12 text-yellow-400 transition-all duration-150"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StarRating;