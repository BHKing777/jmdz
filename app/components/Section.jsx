"use client";

import React from "react";
import styles from "./Section.module.css";
import { useTranslation } from "react-i18next";

const Section = () => {
  const { t } = useTranslation();

  const data = [
    {
      title: t("section.products"),
      number: "120+",
      image: "https://cervo-seven.vercel.app/img/numbers-icon-1.svg",
    },
    {
      title: t("section.years"),
      number: "12+",
      image: "https://cervo-seven.vercel.app/img/numbers-icon-2.svg",
    },
    {
      title: t("section.distributors"),
      number: "40+",
      image: "https://cervo-seven.vercel.app/img/numbers-icon-3.svg",
    },
    {
      title: t("section.clients"),
      number: "1000+",
      image: "https://cervo-seven.vercel.app/img/numbers-icon-4.svg",
    },
  ];

  return (
    <section className={styles.section}>
      <div className={styles.box}>
        <span className={styles.badge}>{t("section.badge")}</span>

        <h2 className={styles.title}>{t("section.title")}</h2>

        <div className={styles.wrap}>
          {data.map((item, index) => (
            <div className={styles.card} key={index}>
              <div className={styles.cardContent}>
                <p>{item.title}</p>
                <h3>{item.number}</h3>
              </div>

              <div className={styles.image}>
                <img src={item.image} alt={item.title} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;
