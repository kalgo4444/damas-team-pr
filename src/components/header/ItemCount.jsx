import React from "react";

const ItemCount = ({ count }) => {
  let length = count.length;
  return (
    <>
      {length == 0 ? null : (
        <div className="absolute -top-2.5 -right-2.5 size-4 bg-main text-white rounded-full text-xs flex items-center justify-center">
          {length}
        </div>
      )}
    </>
  );
};

export default React.memo(ItemCount);
