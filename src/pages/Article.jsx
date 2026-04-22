import { useEffect, useState } from "react";
// --- 変更点1: 先ほど作った記事データをインポート ---
import { ARTICLES } from "../data/articles.js";

export default function Article() {
  const [isScrolled, setScrolled] = useState(false);
  const [selectedTag, setSelectedTag] = useState("All");

  // --- 変更点2: 記事用のタグリストを生成 ---
  // ARTICLESのデータからタグを抽出し、重複を削除して「All」と結合します
  const allTags = ["All", ...new Set(ARTICLES.flatMap((a) => a.tags || []))];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- 変更点3: 選択されたタグで記事を絞り込む ---
  const filteredArticles =
    selectedTag === "All"
      ? ARTICLES
      : ARTICLES.filter((article) => article.tags?.includes(selectedTag));

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main className="container">
        {/* タグフィルター部分 */}
        <div className="filter-container">
          <div className="filter-buttons">
            {allTags.map((tag) => (
              <button
                key={tag}
                className={`filter-btn ${selectedTag === tag ? "active" : ""}`}
                onClick={() => setSelectedTag(tag)}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        {/* 記事ギャラリー部分 */}
        <div className="gallery">
          {filteredArticles.map((article) => (
            /* --- 変更点4: 外部リンクへ飛ばすため <a> タグを使用 --- 
               rel="noopener noreferrer" はセキュリティとパフォーマンスのための記述です
            */
            <a
              href={article.url}
              key={article.id}
              className="card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="card">
                <img src={article.image} alt={article.title} />
                <div className="card-info">
                  <p className="card-title">{article.title}</p>
                  <p className="card-date">{article.date}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>

      {/* トップへ戻るボタン */}
      <a
        href="#"
        className={`back-to-top ${isScrolled ? "visible" : ""}`}
        onClick={scrollToTop}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
          />
        </svg>{" "}
        npm run dev
      </a>
    </>
  );
}
