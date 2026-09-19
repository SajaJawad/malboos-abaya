import React from 'react';

interface LoadingSkeletonProps {
  className?: string;
  width?: string | number;
  height?: string | number;
  borderRadius?: string;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({
  className = '',
  width,
  height,
  borderRadius = '2px',
}) => {
  return (
    <div
      className={`relative overflow-hidden bg-[#E8DDD0]/50 animate-pulse ${className}`}
      style={{
        width: width !== undefined ? width : undefined,
        height: height !== undefined ? height : undefined,
        borderRadius,
      }}
      aria-hidden="true"
    >
      <div
        className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite]"
        style={{
          backgroundImage:
            'linear-gradient(90deg, rgba(247, 242, 234, 0) 0%, rgba(247, 242, 234, 0.6) 50%, rgba(247, 242, 234, 0) 100%)',
        }}
      />
    </div>
  );
};
