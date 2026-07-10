/**
 * Displays all music categories.
 * Renders CategoryCard components using the categories data.
 */

import "./Categories.css";
import categories from "../../data/categories";
import CategoryCard from "../CategoryCard/CategoryCard";



function Categories() {

  return (
    <div className="box">
         {categories.map((category) => (
        
        <section key={category.id}>
          <CategoryCard
            title={category.title}
            description={category.description}
            songs={category.songs}
            image={category.image}
            slug={category.slug}
          />
        </section>
      ))}
    </div>
     
    
  );
}

export default Categories;
