import React from "react";
import { useSelector } from "react-redux";

import "./Suggestions.scss";
import { selectAllSuggestions } from "./suggestionsSlice";

export const Suggestions = () => {
  const suggestions = useSelector(selectAllSuggestions);

  console.log(suggestions);

  return (
    <section className="suggestions">
      <h2>Suggestions</h2>
    </section>
  );
};
