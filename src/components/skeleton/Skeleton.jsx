import React from 'react';

const Skeleton = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 container px-4">
      {Array(8)
        .fill()
        .map((_, inx) => (
          <div
            className="flex flex-col border rounded-xl overflow-hidden bg-white"
            key={inx}
          >
            <div className="w-full h-[280px] bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse" />

            <div className="flex flex-col justify-between flex-grow bg-[#F4F5F7] p-4 space-y-2">
              <div>
                <div className="h-[16px] w-3/4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded mb-2"></div>
                <div className="h-[14px] w-1/2 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded"></div>
              </div>
              <div className="h-[18px] w-1/3 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-pulse rounded mt-4"></div> 
            </div>
          </div>
        ))}
    </div>
  );
};

export default React.memo(Skeleton);
