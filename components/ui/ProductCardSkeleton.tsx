import React from 'react';
import { LoadingSkeleton } from './LoadingSkeleton';

export const ProductCardSkeleton: React.FC = () => {
  return (
    <div className="flex flex-col bg-white rounded-[3px] border border-[#E8DDD0] overflow-hidden p-3 space-y-3 shadow-xs">
      {/* 3:4 Image Skeleton */}
      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-[2px]">
        <LoadingSkeleton className="w-full h-full" />
        {/* Optional Badge Skeleton */}
        <div className="absolute top-2 right-2">
          <LoadingSkeleton width={60} height={20} borderRadius="2px" />
        </div>
      </div>

      {/* Product Details Skeleton */}
      <div className="space-y-2 pt-1">
        {/* Subtitle / Category */}
        <LoadingSkeleton width="40%" height={12} />
        
        {/* Product Title */}
        <LoadingSkeleton width="85%" height={16} />
        
        {/* Price & Action row */}
        <div className="flex items-center justify-between pt-2">
          <LoadingSkeleton width="50%" height={18} />
          <LoadingSkeleton width={28} height={28} borderRadius="50%" />
        </div>
      </div>
    </div>
  );
};
