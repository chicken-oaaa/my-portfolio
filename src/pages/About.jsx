import hurisode from "../assets/img/Reina-k.jpg";
export default function About() {
  return (
    <div className="about-page-fixed">
      <main className="about-main">
        <div className="gakumasu-layout">
          {/* 左側：画像ドーンエリア */}
          <div className="left-hero-image">
            <img src={hurisode} alt="プロフィール写真" />
          </div>

          {/* 右側：情報エリア */}
          <div className="right-info-panel">
            {/* 上部：名前を大きく  */}
            <div className="name-header">
              <span className="name-ruby">SHIGEMATSU REINA</span>
              <h1 className="name-main font-title-text">重松 怜奈</h1>
            </div>

            {/* 下部：自己紹介コンテナ */}
            <div className="intro-card">
              <div className="profile-section">
                <h2>Profile</h2>
                <div className="profile-grid">
                  <div className="item">
                    <span className="label">Birthday</span>
                    <p>2005/9/2</p>
                  </div>
                  <div className="item">
                    <span className="label">Home</span>
                    <p>愛知県</p>
                  </div>
                  <div className="item">
                    <span className="label">School</span>
                    <p>愛知工業大学</p>
                  </div>
                  <div className="item">
                    <span className="label">Major</span>
                    <p>情報科学部 メディア情報専攻</p>
                  </div>
                  <div className="item">
                    <span className="label">Clab</span>
                    <p>システム工学研究会 広報担当</p>
                  </div>
                  <div className="item">
                    <span className="label">Skills</span>
                    <div className="icons">
                      <iconify-icon
                        height="2rem"
                        icon="vscode-icons:file-type-cpp3"
                        noobserver
                      ></iconify-icon>

                      <iconify-icon
                        height="2rem"
                        icon="logos:html-5"
                        noobserver
                      ></iconify-icon>

                      <iconify-icon
                        height="2rem"
                        icon="logos:css-3"
                        noobserver
                      ></iconify-icon>

                      <iconify-icon
                        height="2rem"
                        icon="logos:figma"
                        noobserver
                      ></iconify-icon>

                      <iconify-icon
                        width="2rem"
                        icon="logos:unity"
                        noobserver
                      ></iconify-icon>

                      <iconify-icon
                        width="2rem"
                        icon="devicon:csharp"
                        noobserver
                      ></iconify-icon>

                      <iconify-icon
                        width="2rem"
                        icon="logos:adobe-illustrator"
                        noobserver
                      ></iconify-icon>

                      <iconify-icon
                        width="2rem"
                        icon="logos:blender"
                        noobserver
                      ></iconify-icon>

                      <iconify-icon
                        width="2rem"
                        icon="logos:react"
                        noobserver
                      ></iconify-icon>
                    </div>
                  </div>
                  <div className="item">
                    <span className="label">Hobby</span>
                    <p>カラオケ、ゲーム、博物館巡り </p>
                  </div>
                  <div className="item">
                    <span className="label">Speciality</span>
                    <p>撮影、画像編集、トランペット </p>
                  </div>
                  <div className="item">
                    <span className="label">Dream</span>
                    <p>世界平和、世界旅行</p>
                  </div>
                  {/* SNSアイコンエリア */}
                  <div className="item">
                    <span className="label">SNS</span>

                    <div className="about-sns-icons">
                      {/* インスタグラムへのリンク */}
                      <a
                        href="https://www.instagram.com/wao_kitsune_love?igsh=MWhiNTNtMm41eWN2ZA%3D%3D&utm_source=qr"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <iconify-icon icon="mdi:instagram"></iconify-icon>
                      </a>
                      {/* X（旧Twitter）へのリンク */}
                      <a
                        href="https://x.com/wao_reina_chan?s=21&t=NkqHn8FPGRIURtgOdqZGag"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <iconify-icon icon="ri:twitter-x-fill"></iconify-icon>
                      </a>
                      {/* メール送信用リンク[cite: 1] */}
                      <a
                        href="mailto:x24045xx@aitech.ac.jp?subject=ポートフォリオからのご連絡&body=しげまつれいな様"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <iconify-icon icon="mdi:email-outline"></iconify-icon>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
