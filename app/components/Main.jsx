"use client";

import React from "react";
import styles from "./Main.module.css";
import { useTranslation } from "react-i18next";

const Main = () => {
  const { t, i18n } = useTranslation();
  const isRtl = i18n.language === "ar";

  const benefits = [
    {
      id: 1,
      icon: "https://cervo-seven.vercel.app/img/benefits-icon-1.svg",
      titleKey: "main.benefits.item1.title",
      descKey: "main.benefits.item1.desc",
    },
    {
      id: 2,
      icon: "https://cervo-seven.vercel.app/img/benefits-icon-2.svg",
      titleKey: "main.benefits.item2.title",
      descKey: "main.benefits.item2.desc",
    },
    {
      id: 3,
      icon: "https://cervo-seven.vercel.app/img/benefits-icon-3.svg",
      titleKey: "main.benefits.item3.title",
      descKey: "main.benefits.item3.desc",
    },
    {
      id: 4,
      icon: "https://cervo-seven.vercel.app/img/benefits-icon-4.svg",
      titleKey: "main.benefits.item4.title",
      descKey: "main.benefits.item4.desc",
    },
    {
      id: 5,
      icon: "https://cervo-seven.vercel.app/img/benefits-icon-5.svg",
      titleKey: "main.benefits.item5.title",
      descKey: "main.benefits.item5.desc",
    },
    {
      id: 6,
      icon: "https://cervo-seven.vercel.app/img/benefits-icon-6.svg",
      titleKey: "main.benefits.item6.title",
      descKey: "main.benefits.item6.desc",
    },
  ];

  return (
    <section className={styles.benefits} dir={isRtl ? "rtl" : "ltr"}>
      <div className={styles.container}>
        <span className={styles.subtitle}>{t("main.subtitle")}</span>
        <h2 className={styles.title}>{t("main.title")}</h2>
        <p className={styles.description}>{t("main.description")}</p>

        <div className={styles.wrap}>
          {benefits.map((item) => (
            <div className={styles.card} key={item.id}>
              <div className={styles.iconBox}>
                <img src={item.icon} alt={t(item.titleKey)} />
              </div>
              <h3>{t(item.titleKey)}</h3>
              <p>{t(item.descKey)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Main;