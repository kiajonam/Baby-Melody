/**
 * Displays the website footer.
 * Contains navigation and additional links.
 */

import "./Footer.css";
import { useLanguage } from "../../i18n/LanguageContext";

function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="footer">
      <ul>
        <li>
          <a href="#">{t("footer.about")}</a>
        </li>
        <li>
          <a href="#">{t("footer.donate")}</a>
        </li>
        <li>
          <a href="#">{t("footer.impressum")}</a>
        </li>
        <li>
          <a href="#">{t("footer.email")}</a>
        </li>
        <li>
          <a href="#">{t("footer.socialMedia")}</a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;
