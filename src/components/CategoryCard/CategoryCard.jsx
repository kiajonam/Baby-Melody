/**
 * Displays a single music category card.
 * Receives category data through props.
 */

import { useNavigate } from "react-router-dom";
import Button from "../Button/Button";
import "./CategoryCard.css";
import { useLanguage } from "../../i18n/LanguageContext";

function CategoryCard({ title, description, songs, image, slug }) {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const translatedCategory = t(`categories.${slug}`);
  return (
    <div className="category-card">
      <div className="category-image">
        <img src={image} alt={title} />
      </div>

      <div className="category-details">
        <h3>{translatedCategory.title || title}</h3>
        <p>{translatedCategory.description || description}</p>
        <p>{translatedCategory.songs || songs}</p>
        <Button onClick={() => navigate(`/category/${slug}`)}>
          {t("buttons.explore")}
        </Button>
      </div>
    </div>
  );
}

export default CategoryCard;
