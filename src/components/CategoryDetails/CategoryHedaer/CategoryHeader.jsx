import "./CategoryHeader.css";
import { useLanguage } from "../../../i18n/LanguageContext";

export default function CategoryHeader() {
  const { t } = useLanguage();

  return (
    <header className="category-header">
      <div className="header-container">
        <div className="category-header-copy">
          <span className="category-header-kicker">
            {t("categoryHeader.kicker")}
          </span>
          <h1>{t("categoryHeader.title")}</h1>
          <p>{t("categoryHeader.description")}</p>
        </div>
        <div className="category-header-orbit" aria-hidden="true">
          <span className="category-header-moon"></span>
          <span className="category-header-star category-header-star-one"></span>
          <span className="category-header-star category-header-star-two"></span>
        </div>
      </div>
    </header>
  );
}
