import hurisode from "../assets/img/hurisode.jpg";
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
              <h1 className="name-main">重松 怜奈</h1>
            </div>

            {/* 下部：自己紹介コンテナ */}
            <div className="intro-card">
              <div className="intro-scroll-area">
                <div className="profile-section">
                  <h2>Profile</h2>
                  <div className="profile-grid">
                    <div className="item">
                      <span className="label">BIRTHDAY</span>
                      <p>2005/9/2</p>
                    </div>
                    <div className="item">
                      <span className="label">HOME</span>
                      <p>愛知県</p>
                    </div>
                    <div className="item">
                      <span className="label">SCHOOL</span>
                      <p>愛知工業大学</p>
                    </div>
                    <div className="item">
                      <span className="label">MAJOR</span>
                      <p>情報科学部 メディア情報専攻</p>
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
