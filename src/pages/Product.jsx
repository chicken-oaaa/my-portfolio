import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { PRODUCTS } from "../data/products.js";

export default function Product() {
  const [isScrolled, setScrolled] = useState(false);

  // --- 追加点1: 選択されているタグを管理する状態 (初期値は 'All') ---
  const [selectedTag, setSelectedTag] = useState("All");

  // --- 追加点2: 重複のないタグリストを作成 ---
  // PRODUCTSから全てのtagsを取り出し、1つの配列にまとめてから、重複を除去します
  const allTags = ["All", ...new Set(PRODUCTS.flatMap((p) => p.tags || []))];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // --- 追加点3: 選択されたタグで作品をフィルタリングする ---
  const filteredProducts =
    selectedTag === "All"
      ? PRODUCTS // 'All' なら全表示
      : PRODUCTS.filter((product) => product.tags?.includes(selectedTag)); // 選んだタグが含まれるものだけ抽出

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <main>
        {/* --- 追加点4: 絞り込みUIの表示 --- */}
        <div className="filter-container">
          <div className="filter-buttons">
            {allTags.map((tag) => (
              <button
                key={tag}
                // 現在選ばれているタグに 'active' クラスをつけて色を変えられるようにします
                className={`filter-btn ${selectedTag === tag ? "active" : ""}`}
                onClick={() => setSelectedTag(tag)}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>

        <div className="gallery">
          {/* --- 追加点5: PRODUCTS ではなく filteredProducts をマップする --- */}
          {filteredProducts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="card-link"
            >
              <div className="card">
                <img src={product.image} alt={product.title} />
                <div className="card-info">
                  <p className="card-title">{product.title}</p>
                  <p className="card-date">{product.date}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* フッターやトップへ戻るボタンもAbout同様に追加 */}
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
        </svg>
      </a>
    </>
  );
}
