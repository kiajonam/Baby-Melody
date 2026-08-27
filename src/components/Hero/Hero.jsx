/**
 * Renders the hero section on the home page.
 * Introduces the Baby Melody application.
 */
import "./Hero.css";
import { useLanguage } from "../../i18n/LanguageContext";

function Hero() {
  const { t } = useLanguage();

  return (
    <section className="hero">
      <h1>{t("hero.title")}</h1>

      <p>{t("hero.description")}</p>
    </section>
  );
}

export default Hero;
