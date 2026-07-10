import "./CategoryHeader.css"

export default function CategoryHeader({category}){
    return(
              <header className="category-header">
                 <img className="category-header-img" src={category.image} alt={category.title} />
            
            <div className="category-details">
               
                <h3>{category.title}</h3>
                <p>{category.description}</p>
                <p>{category.songs}</p>
                
                </div>
            
            </header>
    )
}