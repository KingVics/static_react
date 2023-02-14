import React from "react";
import { useTranslation } from "react-i18next";

const Localization = () => {
  const { t } = useTranslation();

  return <div>{t("welcome_to_react")}</div>;
};

export default Localization;
