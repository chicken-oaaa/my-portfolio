// Home.jsx の冒頭部分
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import chickenPopImg from "../assets/img/Chicken-pop.png";
import sharkImg from "../assets/img/Shark.jpg";
import shoneImg from "../assets/img/Shone.jpeg";
import reinaPopImg from "../assets/img/Y-me.png";
import { PRODUCTS } from "../data/products.js"; // 作品データをインポート

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
  };

  const currentProduct = PRODUCTS[currentIndex];

  useEffect(() => {
    const header = document.querySelector(".navbar-container");
    const backToTopButton = document.querySelector(".back-to-top");

    function onScroll() {
      if (window.scrollY > 10) header && header.classList.add("scrolled");
      else header && header.classList.remove("scrolled");

      if (window.scrollY > 300)
        backToTopButton && backToTopButton.classList.add("visible");
      else backToTopButton && backToTopButton.classList.remove("visible");
    }

    window.addEventListener("scroll", onScroll);

    // フェードイン
    const animatedElements = document.querySelectorAll(".fade-in");
    let fadeInObserver;
    if (animatedElements.length) {
      fadeInObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 },
      );
      animatedElements.forEach((element) => fadeInObserver.observe(element));
    }

    const onBackClick = (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    };
    backToTopButton && backToTopButton.addEventListener("click", onBackClick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      backToTopButton &&
        backToTopButton.removeEventListener("click", onBackClick);
      fadeInObserver && fadeInObserver.disconnect();
    };
  }, []);

  return (
    <main className="home-container" id="home-page">
      <section
        className="hero-full"
        style={{ backgroundImage: `url(${sharkImg})` }}
      >
        <div className="hero-overlay">
          <h1 className="hero-title-jp">
            しげまつれいなの
            <br />
            ぽーとふぉりお
          </h1>
        </div>
        <div className="hero-wave-border">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="white"
            ></path>
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64"
              fill="none"
              stroke="white"
              strokeWidth="6"
            ></path>
          </svg>
        </div>
      </section>
      <section className="product-showcase">
        <div className="wave-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="windows-container">
          <div className="product-title">
            <span>作ったものたち</span>
          </div>

          <button className="left-btn" onClick={prevProduct}>
            <iconify-icon
              icon="flowbite:caret-left-solid"
              width="8rem"
            ></iconify-icon>
          </button>

          <div className="windows-flex">
            <div className="window-circle left-window">
              <img src={currentProduct.image} alt={currentProduct.title} />
            </div>

            <Link
              to={`/product/${PRODUCTS[(currentIndex + 1) % PRODUCTS.length].id}`}
              className="window-circle right-window"
            >
              <img
                src={PRODUCTS[(currentIndex + 1) % PRODUCTS.length].image}
                alt="Next preview"
              />
              <div className="more-text">もっとみる</div>
            </Link>
          </div>

          {/* 右のボタン */}
          <button className="right-btn" onClick={nextProduct}>
            <iconify-icon
              icon="flowbite:caret-right-solid"
              width="8rem"
            ></iconify-icon>
          </button>
        </div>
        {/* 飛び出しれいな */}
        <div className="Reina-box">
          <img src={reinaPopImg} alt="飛び出しれいな" />
        </div>

        <div className="wave-bottom">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,92.65 C120,70 200,65 321.39,56.44 c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.54,3V120H0V92.65Z"
              fill="#ffffff"
            ></path>
          </svg>
        </div>
      </section>

      <div className="wave-divider inverted">
        {/* ここにも波のSVGを入れると繋がります */}
      </div>

      <section className="sns-section">
        <div className="wave-top">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="sns-inner">
          <div className="sns-left">
            <div className="shone-frame">
              <img
                src={shoneImg}
                alt="れいなとショーン"
                className="profile-img"
              />
            </div>
          </div>
          <div className="sns-right">
            <h2 className="sns-title">しげまつれいな</h2>
            <div className="sns-icons">
              {/* インスタ */}
              <a
                href="https://www.instagram.com/wao_kitsune_love?igsh=MWhiNTNtMm41eWN2ZA%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <iconify-icon
                  width="5rem"
                  icon="mdi:instagram"
                  style={{ fontSize: "80px", color: "white" }}
                ></iconify-icon>
              </a>
              {/* ツイッター */}
              <a
                href="https://x.com/wao_reina_chan?s=21&t=NkqHn8FPGRIURtgOdqZGag"
                target="_blank"
                rel="noopener noreferrer"
              >
                <iconify-icon
                  width="5rem"
                  icon="ri:twitter-x-fill"
                  style={{ fontSize: "80px", color: "white" }}
                ></iconify-icon>
              </a>
              {/* メール */}
              <a
                href="mailto:x24045xx@aitech.ac.jp?subject=ポートフォリオからのご連絡&body=しげまつれいな様"
                target="_blank"
                rel="noopener noreferrer"
              >
                <iconify-icon
                  width="5rem"
                  icon="mdi:email-outline"
                  style={{ fontSize: "80px", color: "white" }}
                ></iconify-icon>
              </a>
            </div>
            {/* 吹き出しチキン */}
            <div className="chicken-box">
              <div className="bubble">
                <a
                  href="https://www.instagram.com/chicken_oaaaa?igsh=MWV1eTlhZGdkZXptdA%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <iconify-icon
                    icon="mdi:instagram"
                    style={{ fontSize: "35px", color: "#f6b400" }}
                  ></iconify-icon>
                </a>
              </div>
              <img src={chickenPopImg} alt="chicken" />
            </div>
          </div>
        </div>
        <div className="wave-bottom">
          <svg viewBox="0 0 1440 120" preserveAspectRatio="none">
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"
              fill="white"
            ></path>
            <path
              d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64"
              fill="none"
              stroke="white"
              strokeWidth="6"
            ></path>
          </svg>
        </div>
      </section>
    </main>
  );
}
