"use client";

import React from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import styles from "./Footer.module.css";

const Footer = () => {
  const { t } = useTranslation();

  const contactCards = [
    {
      icon: "https://cervo-seven.vercel.app/img/contacts-wrap-icon-1.svg",
      title: t("footer.email"),
      value: "info@cervo.global",
      href: "mailto:info@cervo.global",
    },
    {
      icon: "https://cervo-seven.vercel.app/img/contacts-wrap-icon-2.svg",
      title: t("footer.phone"),
      value: "+998 (99) 999-99-99",
      href: "tel:+998999999999",
    },
    {
      icon: "https://cervo-seven.vercel.app/img/contacts-wrap-icon-3.svg",
      title: t("footer.socials"),
      value: "@cervo.global",
      href: "#",
    },
  ];

  const navigation = [
    {
      href: "/",
      label: t("footer.links.dashboard"),
    },
    {
      href: "/products",
      label: t("footer.links.products"),
    },
    {
      href: "/services",
      label: t("footer.links.services"),
    },
    {
      href: "/about",
      label: t("footer.links.about"),
    },
    {
      href: "/contacts",
      label: t("footer.links.contacts"),
    },
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* CONTACTS */}
        <section className={styles.contacts}>
          <span className={styles.badge}>
            {t("footer.badge")}
          </span>

          <h2 className={styles.title}>
            {t("footer.title")}
          </h2>

          <p className={styles.description}>
            {t("footer.description")}
          </p>

          <div className={styles.contactGrid}>
            {contactCards.map((card) => (
              <a
                href={card.href}
                className={styles.contactCard}
                key={card.title}
              >
                <div className={styles.cardTop}>
                  <div className={styles.iconBox}>
                    <img
                      src={card.icon}
                      alt=""
                      className={styles.icon}
                    />
                  </div>

                  <span className={styles.arrow}>↗</span>
                </div>

                <div>
                  <h3>{card.title}</h3>
                  <p>{card.value}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* FEEDBACK */}
        <section className={styles.feedback}>
          <div className={styles.feedbackContent}>
            <span className={styles.feedbackBadge}>
              {t("footer.feedback.badge")}
            </span>

            <h2>
              {t("footer.feedback.title")}
            </h2>
          </div>

          <Link
            href="/feedback"
            className={styles.feedbackButton}
          >
            <span>
              {t("footer.feedback.button")}
            </span>

            <span className={styles.buttonArrow}>
              ↗
            </span>
          </Link>
        </section>

        {/* NAVIGATION */}
        <section className={styles.navigation}>
          <div className={styles.navTop}>
            <Link href="/" className={styles.logo}>
              <img
                src="https://cervo-seven.vercel.app/img/logo.png"
                alt="Cervo Global"
                className={styles.logoImage}
              />
            </Link>

            <nav className={styles.nav}>
              {navigation.map((item) => (
                <Link
                  href={item.href}
                  key={item.href}
                  className={styles.navLink}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div className={styles.line} />

          <div className={styles.navBottom}>
            <p>
              {t("footer.copyright")}
            </p>

            <div className={styles.socials}>
              <a href="#" aria-label="Instagram">
                Instagram
              </a>

              <a href="#" aria-label="Facebook">
                Facebook
              </a>

              <a href="#" aria-label="Telegram">
                Telegram
              </a>
            </div>
          </div>
        </section>

      </div>
    </footer>
  );
};

export default Footer;
