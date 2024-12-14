import React from "react";

const Description = ({description} : {description:string}) => {
  return (
    <div>
      <p className="text-neutral-20 font-Poppins text-sm mt-4">
        {description}
      </p>
    </div>
  );
};

export default Description;
