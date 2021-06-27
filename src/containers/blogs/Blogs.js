import React from "react";
import "./Blog.scss";
import {blogSection} from "../../portfolio";
export default function Blogs() {
  if (!blogSection.display) {
    return null;
  }
  return (
    <section></section>
  );
}
