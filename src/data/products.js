// 画像
import imgAnimals from "../assets/img/3Danimal.png";
import imgApple from "../assets/img/3Dapple.png";
import imgHugu from "../assets/img/3Dhugu.png";
import imgKuma from "../assets/img/3Dkuma.png";
import imgMoke from "../assets/img/3Dmoke.png";
import ChickenPinballImg from "../assets/img/ChickenPinball.png";
import ChickenShootingImg1 from "../assets/img/ChickenShooting1.png";
import ChickenShootingImg2 from "../assets/img/ChickenShooting2.png";
import DoraImg from "../assets/img/Dora.png";
import diamondImg from "../assets/img/Jewelry.png";
import ketsuImg from "../assets/img/Ketsu.png";
import masiroImg from "../assets/img/masiro.png";
import plantTop from "../assets/img/plant1.png";
import popcornImg from "../assets/img/Popcorn.png";
import portImg1 from "../assets/img/port1.png";
import portImg2 from "../assets/img/port2.png";
import portImg3 from "../assets/img/port3.png";
import roomLightImg from "../assets/img/roomLighting.jpg";

// 動画
import ChickenPinballMovie from "../assets/movie/ChickenPinball.mov";
import ChickenShootingMovie from "../assets/movie/ChickenShooting1.mov";
import DoraMovie from "../assets/movie/Dora.mov";
import diamondMovie from "../assets/movie/Jewelry.mov";
import popcornMovie from "../assets/movie/Popcorn.mov";
// pdf
import portPdf from "../assets/pdf/portfolio.pdf";

export const PRODUCTS = [
  {
    id: 1,
    title: "りんご",
    date: "2023/11",
    time: "約2時間",
    tech: ["Blender"],
    role: "個人制作 (モデリング)",
    image: imgApple,
    description:
      "パソコンを買って初めてBlenderを触った時の記念すべき作品です！基本操作を覚えるために、Yukiさんのチュートリアル動画を見ながら作成しました。シンプルな形ですが、質感やライティングの練習になりました！",
    tags: ["3DCG", "Private"],
  },
  {
    id: 2,
    title: "くま",
    date: "2023/11",
    time: "約1時間半",
    tech: ["Blender"],
    role: "個人制作 (モデリング)",
    image: imgKuma,
    description:
      "キャラクターを作ってみたくて、Bibiさんのチュートリアル動画を見ながら作成しました。粘土みたいな質感の可愛いクマを目指しました！",
    tags: ["3DCG", "Private"],
  },
  {
    id: 3,
    title: "もけもけちゃん",
    date: "2024/01",
    time: "約1時間半",
    tech: ["Blender"],
    role: "個人制作 (モデリング)",
    image: imgMoke,
    description:
      "ヘアーの機能を使ってみたくて、Tomさんのチュートリアル動画を見ながら色や形を少し変えて製作しました。お目目がキュートです！",
    tags: ["3DCG", "Private"],
  },
  {
    id: 4,
    title: "ふぐ",
    date: "2024/02",
    time: "約3時間",
    tech: ["Blender"],
    role: "個人制作 (モデリング)",
    image: imgHugu,
    description:
      "UV展開の練習のためにBibiさんのYoutube動画を見ながら作成しました。表情が可愛くてお気に入りです！",
    tags: ["3DCG", "Private"],
  },
  {
    id: 5,
    title: "B1前期のポートフォリオ",
    image: portImg1,
    gallery: [
      { type: "image", src: portImg2 },
      { type: "image", src: portImg3 },
    ],
    date: "2024/07",
    time: "2週間",
    tech: [
      "Adobe illustrator 2024",
      "Photoshop 2024",
      "Premiere Pro 2024",
      "After Effects 2024",
      "Unity",
    ],
    role: "UIデザイン、キャラクターデザイン",
    pdf: portPdf,
    links: null,
    description:
      "一年前期の「マルチメディア情報処理および演習」の授業内で制作したポートフォリオです。ページごとのデザインの統一感がなくてめちゃくちゃダサかったり、一ページ目の「Maltimedia」から思いっきりスペルミスしてて初々しさを感じられます。",
    tags: ["Design", "School"],
  },
  {
    id: 6,
    title: "虫歯アニマルズ！",
    date: "2024/09",
    image: imgAnimals,
    tags: ["3DCG", "Game", "Private"],
  },
  {
    id: 7,
    title: "部屋のライティング",
    image: roomLightImg,
    date: "2024/10",
    time: "約3時間",
    tech: ["Maya"],
    role: "個人制作(モデリング・ライティング)",
    description:
      "プリミティブを配置して家具や部屋を作って窓の外に光源を置くことで柔らかい光の差し込む部屋を表現しました。",
    tags: ["3DCG", "School"],
  },
  {
    id: 8,
    title: "初めてのアニメーション",
    image: DoraImg,
    date: "2024/11",
    time: "約3時間",
    tech: ["Maya"],
    role: "個人制作(モデリング・アニメーション)",
    video: DoraMovie,
    description:
      "プリミティブを組み合わせてキャラクターを作り動かしました。動いた時は可愛くて感動しました。",
    tags: ["3DCG", "School"],
  },
  {
    id: 9,
    title: "人体錬成&衣服錬成",
    image: masiroImg,
    gallery: [{ type: "image", src: ketsuImg }],
    date: "2025/01",
    time: "約6時間",
    tech: ["Maya", "Photoshop 2024"],
    role: "個人制作(モデリング・マテリアル貼り付け)",
    description:
      "授業内で人の体をモデリングして、そこにフォトショップで作ったテクスチャを貼り付けたものです。人体モデリングではお尻にこだわりました。衣装デザインはVTuberのましろﾒﾒの新衣装を参考にしました。",
    tags: ["3DCG", "Design", "School"],
  },
  {
    id: 10,
    title: "PlanTalk",
    image: plantTop,
    gallery: { type: "image", src: plantTop },
    date: "2025/03",
    time: "2週間",
    tech: ["Figma", "React", "html", "CSS"],
    role: "UIデザイン、キャラクターデザイン、Webフロント",
    pdf: null,
    links: [
      {
        type: "presentation",
        url: "https://www.canva.com/design/DAGjF--80TQ/N-EIel4WzmaeM7LLRL6POA/edit",
      },
    ],
    description:
      "SysHach2025に出た時に4人チームで作った植物育成初心者向けのアプリです。FigmaでUIデザインをして、Reactでフロントエンドを実装しました。キャラクター(フクロウモチーフのポポタ)と一緒に水やりや日光の管理ができるアプリで、キャラクターデザインも担当しました。",
    tags: ["Design", "Web", "Private"],
  },
  {
    id: 11,
    title: "ジュエリーショーケース",
    image: diamondImg,
    date: "2025/06",
    time: "約5時間",
    tech: ["C++"],
    role: "個人制作(CG制作)",
    video: diamondMovie,
    description:
      "マテリアルや光源の置き方、オブジェクトの動かし方などを習った後に作った作品です。宝石っぽく輝かせるのが難しかったです。",
    tags: ["3DCG", "School"],
  },
  {
    id: 12,
    title: "ポップコーンマシン！",
    image: popcornImg,
    date: "2025/07",
    time: "約5時間",
    tech: ["C++"],
    role: "個人制作(CG制作)",
    video: popcornMovie,
    description:
      "物体移動アニメーションの基礎を習った後に作った作品です。ポップコーンを可愛く見せるためにランダムで色を変えたり跳ね方を変えるのに苦戦しました。",
    tags: ["3DCG", "School"],
  },
  {
    id: 13,
    title: "ChickenShooting",
    image: ChickenShootingImg1,
    gallery: [{ type: "image", src: ChickenShootingImg2 }],
    date: "2025/10",
    time: "約30時間",
    tech: ["Figma", "Unity", "C#", "Arduino"],
    role: "個人制作(企画デザイン・イラスト・モデリング・ゲームプログラミング)",
    video: ChickenShootingMovie,
    links: [
      {
        type: "presentation",
        url: "https://www.canva.com/design/DAGxikSTfaU/HWA_r8zqwZetd4AqZNIIvA/edit",
      },
    ],
    description:
      "初めてUnityを使って自分で作ったインタラクティブなシューティングゲームです。びっくりチキンを鳴かせると向いている方向にビームが出て敵を倒します。",
    tags: ["Game", "Private"],
  },
  {
    id: 14,
    title: "びっくりチキンのお祭りピンボール！",
    image: ChickenPinballImg,
    date: "2026/02",
    time: "約12時間",
    tech: ["Canva", "Blender", "Unity", "C#"],
    role: "個人制作(企画デザイン・モデリング・ゲームプログラミング)",
    video: ChickenPinballMovie,
    links: [
      { type: "game", url: "https://aitech.ac.jp/~videsign/GP2025_2/x24045/" },
      {
        type: "presentation",
        url: "https://www.canva.com/design/DAG8fB8UFBE/7pX1Z-Ti2FYMRzJx8S5Tlw/edit",
      },
    ],
    description:
      "ゲームプログラミングの授業で制作したピンボールゲームです。びっくりチキンがフリッパーになっていて、ピンボールを打ち返すときに鳴きます。最高のゲームです。",
    tags: ["Game", "School"],
  },
];
