import React from "react";
import "./Talks.scss";
import {talkSection} from "../../portfolio";

export default function Talks() {
  if (!talkSection.display) {
    return null;
  }
  return (
    <section></section>
  );
}
