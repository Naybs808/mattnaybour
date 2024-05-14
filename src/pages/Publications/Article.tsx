import ArticleIcon from "@mui/icons-material/Article";
import "./Publications.css";
import React from "react";
import { useNavigate } from "react-router-dom";

interface ArticleProps {
  title: string;
  date: string;
  link: string;
}

export default function Article(props: ArticleProps) {
  return (
    <div
      className="publication"
      onClick={() => {
        window.open(props.link);
      }}
    >
      <ArticleIcon className="icon" />
      <div className="article-title">
        <div>{props.title}</div>
        <div className="article-date"> {props.date} </div>
      </div>
    </div>
  );
}
