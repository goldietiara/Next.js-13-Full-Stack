import React from "react";

// const blogLayout = ({ childern }) => {
//   return (
//     <div>
//       <h1>Blog Layout</h1>
//       {childern}
//     </div>
//   );
// };

// export default layoutBlog;
export default function blogLayout({ childern }) {
  return (
    <div className="px-5 lg:px-40 md:px-20">
      <h1>Blog Layout</h1>
      {childern}
    </div>
  );
}
