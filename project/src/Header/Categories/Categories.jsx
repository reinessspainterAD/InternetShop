import React from 'react';

const Categories = ({ category, onCategorySelect }) => {
    return (
        <div>
            {category.map((item, index) => (
                <p key = {index} onClick={() =>onCategorySelect(item)}>{item}</p>
            ))}
        </div>
    );
};

export default Categories;