/**
 * Displays the main navigation bar.
 * Provides links to different sections of the website.
 */
import "./Navbar.css";
import { useLanguage } from "../../i18n/LanguageContext";
import { useTheme } from "../../theme/ThemeContext";
import { Moon, Sun } from "lucide-react";

function Navbar() {
  const { language, setLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#" className="nav-logo">
          BabyMelody
        </a>
        <input type="checkbox" className="menu-toggle" id="menu-toggle" />

        <label
          htmlFor="menu-toggle"
          className="hamburger"
          aria-label="toggle menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </label>

        <ul className="nav-menu">
          <li>
            <a href="#" className="active">
              {t("navbar.home")}
            </a>
          </li>
          <li>
            <a href="#">{t("navbar.features")}</a>
          </li>
          <li>
            <a href="#">{t("navbar.howItWorks")}</a>
          </li>
          <li>
            <a href="#">{t("navbar.musicLibrary")}</a>
          </li>
          <li>
            <a href="#">{t("navbar.testimonials")}</a>
          </li>
          <li>
            <a href="#" className="nav-btn">
              {t("navbar.getStarted")}
            </a>
          </li>
          <li className="language-switcher">
            <button
              type="button"
              className={language === "en" ? "selected" : ""}
              onClick={() => setLanguage("en")}
            >
              EN
            </button>
            <button
              type="button"
              className={language === "de" ? "selected" : ""}
              onClick={() => setLanguage("de")}
            >
              DE
            </button>
          </li>
                <li>
                                    <button type="button" className="theme-toggle" onClick={toggleTheme} aria-label={t(theme === "light" ? "theme.dark" : "theme.light")}>
                    {theme === "light" ? <Moon size={16} /> : <Sun size={16} />}
                  </button>
                </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
