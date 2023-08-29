import React from "react";
import "./Legal.scss";
import { PortableText } from "@portabletext/react";

const Legal = ({ titlePage, _rawContent, _rawDetails }) => {
  const filter = (ast, match) =>
    ast.reduce((acc, node) => {
      if (match(node)) acc.push(node);
      if (node.children) acc.push(...filter(node.children, match));
      return acc;
    }, []);

  const findHeadings = (ast) =>
    filter(ast, (node) => /h\d/.test(node.style)).map((node) => {
      const text = getChildrenText(node);
      const slug = text
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

      return { ...node, text, slug };
    });

  const get = (object, path) => path.reduce((prev, curr) => prev[curr], object);
  const getObjectPath = (path) =>
    path.length === 0
      ? path
      : ["subheadings"].concat(path.join(".subheadings.").split("."));

  const parseOutline = (ast) => {
    const outline = { subheadings: [] };
    const headings = findHeadings(ast);
    const path = [];
    let lastLevel = 0;

    headings.forEach((heading) => {
      const level = Number(heading.style.slice(1));
      heading.subheadings = [];

      if (level < lastLevel)
        for (let i = lastLevel; i >= level; i--) path.pop();
      else if (level === lastLevel) path.pop();

      const prop = get(outline, getObjectPath(path));
      prop.subheadings.push(heading);
      path.push(prop.subheadings.length - 1);
      lastLevel = level;
    });

    return outline.subheadings;
  };

  const getChildrenText = (props) =>
    props.children
      .map((node) => (typeof node === "string" ? node : node.text || ""))
      .join("");

  const TableOfContents = (props) => (
    <ul>
      {props.outline.map((heading) => (
        <li>
          <a href={"#" + heading.slug}>{heading.text}</a>
        </li>
      ))}
    </ul>
  );

  const components = {
    block: {
      h3: ({ children }) => (
        <h3
          className="text__textBlock_title"
          id={children
            .toString()
            .toLowerCase()
            .replace(/ /g, "-")
            .replace(/[^\w-]+/g, "")}
        >
          {children}
        </h3>
      ),
    },
  };

  const outline = parseOutline(_rawContent);

  return (
    <div className="container">
      <div className="wrapper">
        <div className="index shadow-sm">
          <TableOfContents outline={outline} />
        </div>
        <div className="text">
          <h3 className="text__title">{titlePage}</h3>
          <div className="text__details">
            <PortableText value={_rawDetails} />
          </div>
          <PortableText value={_rawContent} components={components} />
        </div>
      </div>
    </div>
  );
};

export default Legal;
