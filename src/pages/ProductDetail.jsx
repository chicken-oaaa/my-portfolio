import { Link, useParams } from "react-router-dom";
import { PRODUCTS } from "../data/products.js";

export default function ProductDetail() {
  const { id } = useParams(); //URLからどの作品かを取得
  const product = PRODUCTS.find((p) => String(p.id) === id); //データから該当作品を取得

  if (!product) {
    return (
      <div style={{ padding: "100px", textAlign: "center" }}>
        作品が見つかりません (ID: {id})
      </div>
    );
  }
  return (
    <main className="detail-page">
      <div className="detail-container">
        {/* --- 右上の「×」ボタン --- */}
        <Link to="/product" className="detail-close-btn" aria-label="閉じる">
          <iconify-icon icon="mdi:close"></iconify-icon>
        </Link>

        {/* 左側：ビジュアルエリア */}
        <div className="detail-visual">
          {product.video ? (
            <video
              src={product.video}
              controls
              autoPlay
              muted
              loop
              className="main-video"
            />
          ) : (
            <img
              src={product.image}
              className="main-visual"
              alt={product.title}
            />
          )}

          {product.gallery && product.gallery.length > 0 && (
            <div className="detail-gallery">
              {product.gallery.map((item, index) => (
                <div key={index} className="gallery-item">
                  {item.type === "image" ? (
                    <img src={item.src} alt={`gallery-${index}`} />
                  ) : (
                    <video
                      src={item.src}
                      muted
                      loop
                      onMouseOver={(e) => e.target.play()}
                      onMouseOut={(e) => e.target.pause()}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          <div className="detail-links">
            {/* 今までのPDFボタンはそのまま */}
            {product.pdf && (
              <a
                href={product.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-action btn-pdf"
              >
                <iconify-icon icon="mdi:file-pdf-box"></iconify-icon> PDF資料
              </a>
            )}

            {/* 追加：links配列をループして、タイプ別にボタンを作る */}
            {product.links?.map((linkItem, index) => {
              // タイプによって名前とアイコンを出し分ける設定
              let btnLabel = "サイトを見る";
              let btnIcon = "mdi:external-link";

              if (linkItem.type === "presentation") {
                btnLabel = "企画書・プレゼン資料";
                btnIcon = "mdi:file-present";
              } else if (linkItem.type === "game") {
                btnLabel = "ゲームをプレイする";
                btnIcon = "mdi:controller";
              } else if (linkItem.type === "site") {
                btnLabel = "作品サイトを見る";
                btnIcon = "mdi:web";
              }

              return (
                <a
                  key={index}
                  href={linkItem.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn-action btn-${linkItem.type}`}
                >
                  <iconify-icon icon={btnIcon}></iconify-icon> {btnLabel}
                </a>
              );
            })}
          </div>
        </div>

        {/* 右側：詳細情報 */}
        <div className="detail-info">
          <div className="detail-tags">
            {product.tags?.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
          <h1 className="detail-title">{product.title}</h1>
          <p className="detail-date">{product.date}</p>
          <hr />
          <div className="detail-description">
            <p>{product.description}</p>
          </div>
          <hr />
          <div className="detail-specs">
            <div className="spec-item">
              <span className="spec-label">制作時間</span>
              <span className="spec-value">{product.time}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">技術スタック</span>
              <span className="spec-value">{product.tech?.join(", ")}</span>
            </div>
            <div className="spec-item">
              <span className="spec-label">担当範囲</span>
              <span className="spec-value">{product.role}</span>
            </div>
          </div>

          {/* --- 一番下の「一覧に戻る」ボタン --- */}
          <div className="detail-footer">
            <Link to="/product" className="btn-back-list">
              一覧に戻る
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
