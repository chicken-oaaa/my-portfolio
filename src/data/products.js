// 画像
import imgAnimals from "../assets/img/3Danimal.png";
import imgApple from "../assets/img/3Dapple.png";
import imgHugu from "../assets/img/3Dhugu.png";
import imgKuma from "../assets/img/3Dkuma.png";
import imgMoke from "../assets/img/3Dmoke.png";
import ChickenPinballImg from "../assets/img/ChickenPinball.png";
import ChickenShootingImg1 from "../assets/img/ChickenShooting1.png";
import ChickenShootingImg2 from "../assets/img/ChickenShooting2.png";
import CoPreImg from "../assets/img/Co-Pre.png";
import DoraImg from "../assets/img/Dora.png";
import GestureAudioImg from "../assets/img/GestureAudio.png";
import GestureAudioHardImg from "../assets/img/GestureAudioHard.png";
import diamondImg from "../assets/img/Jewelry.png";
import ketsuImg from "../assets/img/Ketsu.png";
import masiroImg from "../assets/img/masiro.png";
import plantTop from "../assets/img/plant1.png";
import popcornImg from "../assets/img/Popcorn.png";
import portImg1 from "../assets/img/port1.png";
import portImg2 from "../assets/img/port2.png";
import portImg3 from "../assets/img/port3.png";
import BirthdayPartyImg from "../assets/img/ReinaBirthday.png";
import roomLightImg from "../assets/img/roomLighting.jpg";
import SchoolSafeImg from "../assets/img/SchoolSafe.png";
import SchoolSafeUseImg from "../assets/img/SchoolSafeUse.png";
import WaoSiteImg from "../assets/img/WaoSite.png";

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
    time: "約3ヶ月",
    tech: ["Blender", "Unity"],
    role: "チーム制作(企画デザイン、モデリング、ものづくり)",
    video: null,
    description:
      "東京ゲームショウ2024に出展したゲームです。面白いインタフェースを使うというテーマで浴槽用ブラシで動物の歯を磨く飼育員体験ができたら面白いんじゃないかと思い、企画しました。個性豊かでかわいい動物を3DCGでも筐体でも制作できていい経験になりました！",
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
    role: "チーム制作(UIデザイン、キャラクターデザイン、Webフロント)",
    pdf: null,
    links: [
      {
        type: "presentation",
        url: "https://www.canva.com/design/DAGjF--80TQ/N-EIel4WzmaeM7LLRL6POA/edit",
      },
    ],
    description:
      "SysHach2025に出た時に4人チームで作った植物育成初心者向けのアプリです。FigmaでUIデザインをして、Reactでフロントエンドを実装しました。キャラクター(フクロウモチーフのポポタ)と一緒に水やりや日光の管理ができるアプリで、キャラクターデザインも担当しました。",
    tags: ["Design", "Web", "Private", "hackathon"],
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
    time: "約二週間",
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
      "ゲームプログラミングの授業の最終課題で制作したピンボールゲームです。「お祭り」「1:3」「弾む」をテーマにして制作しました。びっくりチキンがフリッパーになっていて、卵を弾いて敵を倒します。鳴きます。最高のゲームです。",
    tags: ["Game", "School"],
  },
  {
    id: 15,
    title: "ワオキツネザル激推しサイト",
    links: [
      {
        type: "site",
        url: "https://wao-kitsunezaru.vercel.app/",
      },
    ],
    date: "2025/05",
    time: "約2週間",
    tech: ["Figma", "html", "CSS"],
    role: "個人制作(デザイン、Webフロント)",
    image: WaoSiteImg,
    description:
      "webデザインの授業で制作した推しを紹介するサイトです。サイトマップからデザイン、コーディングまで全て自分で行いました。私の愛するワオキツネザルの魅力が伝わるサイトを目指しました！",
    tags: ["Design", "Web", "School"],
  },
  {
    id: 16,
    title: "Gesture Audio",
    image: GestureAudioImg,
    gallery: [{ type: "image", src: GestureAudioHardImg }],
    date: "2025/08",
    time: "約二週間",
    tech: ["Figma", "HTML", "CSS", "JavaScript", "canva"],
    role: "チーム制作(企画デザイン、UIデザイン、Webフロント)",
    description:
      "株式会社サポーターズ様主催の【技育CAMP2025】ハッカソン Vol.10にて最優秀賞を受賞したアプリです。全員選考はバラバラの学部2年生四人で集まって参加しました。私はFigmaでUIデザインをして、HTML/ CSS / JavaScriptでフロントエンドを実装しました。今までにない発想やハードとの接続など、挑戦的な内容でとてもいい経験になりました！",
    tags: ["Design", "Web", "Private", "hackathon"],
    links: [
      {
        type: "presentation",
        url: "https://www.canva.com/design/DAGvlxQLaRw/8fbZ3A8wx9VI0na9Rp_ppA/view?utm_content=DAGvlxQLaRw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=hc4934e66f8",
      },
      {
        type: "site",
        url: "https://www.sysken.net/post/2342/",
      },
    ],
  },
  {
    id: 17,
    title: "学区あんぜんマップ",
    image: SchoolSafeImg,
    gallery: [{ type: "image", src: SchoolSafeUseImg }],
    date: "2025/10",
    time: "約二週間",
    tech: ["Figma", "HTML", "CSS", "Canva"],
    role: "個人制作(企画デザイン、プレゼン資料デザイン)",
    description:
      "自転車安全利用５則に関するデジタルコンテンツの企画書を作るという課題で制作しました。私は16歳以下の小中学生をターゲットに、学区の安全を守るというコンセプトのアプリを発案しました。アプリ画面はGeminiで生成し、実際に動かしながら機能性もしっかりと考えました。ポップで可愛くわかりやすく、スライドを見るだけで内容が伝わるようなデザインを心がけました。",
    tags: ["Design", "School"],
    links: [
      {
        type: "presentation",
        url: "https://canva.link/u51lngu1ktxbbyz",
      },
    ],
  },
  {
    id: 18,
    title: "Co-Pre",
    image: CoPreImg,
    date: "2025/11",
    time: "約二週間",
    tech: ["python", "Tkinter", "Canva"],
    role: "チーム制作(企画デザイン、UIデザイン、プレゼン資料デザイン)",
    description:
      "「音」を利用したアプリをAIやAPIを活用しながら作るという課題で、初めてPythonを使ってアプリを作りました。私たちは、音声入力でAIが自動的に議事録を取ってくれたり、プレゼン練習のアドバイスをしてくれるプレゼン支援アプリを作りました。私は企画とUIデザインとプレゼン資料のデザインを担当しました。初めてのPython開発でどうデザインを変えるのか、調べるところから難しかったです。シンプルでわかりやすいUIを心がけました。",
    tags: ["Design", "School"],
    links: [
      {
        type: "presentation",
        url: "https://canva.link/0elgh35vd5y31uq",
      },
    ],
  },
  {
    id: 19,
    title: "私の誕生日記念フライヤー",
    date: "2025/09",
    time: "約2時間",
    tech: ["Canva"],
    role: "個人制作(デザイン)",
    image: BirthdayPartyImg,
    description:
      "20歳の記念すべき誕生日に友達に配るフライヤーを作りました。テーマは「私らしさ大爆発」で、親友に描いてもらった絵を散りばめたり私が宇宙になる様子を表現しました。友人らには大好評で、私もとても気に入っています！",
  },
];
