import React, { useState } from "react";

const Categories = ({ categories, filteredMenus }) => {
  // console.log(categories)
  const [mainCategory, setMainCategory] = useState('all')
  console.log(mainCategory)

  return (
    <div className="btn-container">
      {
        categories.map((Category, index) => (
          <button
          key={index}
            type="button"
            className={Category === mainCategory ? "filter-btn highlight" : "filter-btn"}
            onClick={()  => {
              setMainCategory(Category)
              filteredMenus(Category)
            }}
          >
           {Category}
          </button>

        ))
      }
    </div>
  );
};

export default Categories;
