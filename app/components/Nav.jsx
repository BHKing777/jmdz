"use client";
import Link from "next/link";
import i18n from "../i18n";
import React from "react";
import styles from "./Nav.module.css";
import { useTranslation } from "react-i18next";

const Nav = () => {
  const { t } = useTranslation();
  return (
    <nav className={styles.nav}>
      {/* Logo */}
      <Link href="/" className={styles.logo}>
        <img src="https://cervo-seven.vercel.app/img/logo.png" alt="Cervo" />
      </Link>

      {/* Navigation */}
      <div className={styles.links}>
        <Link href="/">{t("nav.dashboard")}</Link>
        <Link href="/">{t("nav.products")}</Link>
        <Link href="/">{t("nav.services")}</Link>
        <Link href="/">{t("nav.about")}</Link>
        <Link href="/">{t("nav.contacts")}</Link>
      </div>

      {/* Right side */}
      <div className={styles.right}>
        {/* Language */}
        <div className={styles.language}>
          <button onClick={() => i18n.changeLanguage("en")}>
            <img
              src="https://cervo-seven.vercel.app/img/flag-icon-us.svg"
              alt="English"
            />
          </button>

          <button onClick={() => i18n.changeLanguage("ru")}>
            <img
              src="https://cervo-seven.vercel.app/img/flag-icon-ru.webp"
              alt="Russian"
            />
          </button>

          <button onClick={() => i18n.changeLanguage("ar")}>
            <img
              src="https://cervo-seven.vercel.app/img/flag-icon-ar.svg"
              alt="Arabic"
            />
          </button>
        </div>

        {/* Apply button */}
        <Link href="/apply" className={styles.applyBtn}>
          <span>{t("nav.apply")}</span>

          <span className={styles.check}>✓</span>
        </Link>
      </div>

      {/* Mobile menu */}
      <button className={styles.menuBtn}>
        <span></span>
        <span></span>
        <span></span>
      </button>
    </nav>
  );
};

export default Nav;
