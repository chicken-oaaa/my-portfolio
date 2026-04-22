// 記事のデータを管理する配列です
import gamemakersImg from "../assets/img/gamemakers.jpg";
import xtrendImg from "../assets/img/Xtrend.jpg";

export const ARTICLES = [
  {
    id: 1,
    title: "東京ゲームショウ2024に出展した際の記事① (GameMaker)",
    image: gamemakersImg,
    date: "2024.09.29",
    url: "https://gamemakers.jp/article/2024_09_29_80746/",
    tags: ["TGS", "Game"],
  },
  {
    id: 2,
    title: "東京ゲームショウ2024に出展した際の記事② (日経クロストレンド)",
    image: xtrendImg, // 公開フォルダ(public)に画像を置いて指定してください
    date: "2024.09.28", // 掲載日に合わせて調整してください
    url: "https://xtrend.nikkei.com/atcl/contents/18/01045/00122/",
    tags: ["TGS", "Game"],
  },
];
