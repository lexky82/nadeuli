import Image from "next/image";
import * as styles from "./style.css";

export const mapContentsType = [
  "고분",
  "고택",
  "고궁",
  "방어시설",
  "유적·사적",
  "터",
  "서원",
  "사찰",
];

export const mapContents = [
  {
    id: 1,
    thumnail:
      "https://flexible.img.hani.co.kr/flexible/normal/970/546/imgdb/original/2022/1209/20221209501200.jpg",
    title: "example",
    location: "충청북도 보은군 보은읍 성주1길 104",
    fromMyLocation: 134.7,
    travelessayCount: 104,
    viewDetail: "",
  },
  {
    id: 2,
    thumnail:
      "https://flexible.img.hani.co.kr/flexible/normal/970/546/imgdb/original/2022/1209/20221209501200.jpg",
    title: "example",
    location: "서울 동대문구 망우로21길 52 C동 지하1층",
    fromMyLocation: 134.7,
    travelessayCount: 104,
    viewDetail: "",
  },
  {
    id: 2,

    thumnail:
      "https://flexible.img.hani.co.kr/flexible/normal/970/546/imgdb/original/2022/1209/20221209501200.jpg",
    title: "example",
    location: "서울 동대문구 망우로21길 52 C동 지하1층",
    fromMyLocation: 134.7,
    travelessayCount: 104,
    viewDetail: "",
  },
];

export const exmapleFetchData = {
  images: [
    { image: "/20221209501200.jpg", alt: "삼년산성 성벽" },
    { image: "/20221209501201.jpg", alt: "삼년산성 안내판" },
    { image: "/20221209501201.jpg", alt: "삼년산성 안내판" },
  ],
  type: "방어시설",
  title: "삼년산성",
  thumbsUp: 1153,
  location: "충청북도 보은군 보은읍 성주 1길 104",
  fromMyLocation: 134.7,
  travelessay: [
    {
      key: 1,
      title: "신라의 첨단 축성기술 삼년산성",
      location: "충청북도, 보은",
      thumbsUp: 1159,
      writer: "으워오",
      createAt: "2023.08.22",
    },
    {
      key: 2,
      title: "신라의 첨단 축성기술 삼년산성",
      location: "충청북도, 보은",
      thumbsUp: 1159,
      writer: "으워오",
      createAt: "2023.08.22",
    },
  ],
  review: [
    {
      contents: "",
      writer: "",
      createAt: "",
    },
    {
      contents: "",
      writer: "",
      createAt: "",
    },
  ],
  viewDetail: "/ruinsInformation/21",
};

export const TabData = [
  {
    key: 0,
    label: <p className={styles.label}>기행문({exmapleFetchData.travelessay.length})</p>,
    children: (
      <div style={{ padding: 10 }}>
        <div style={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
          <Image
            src="https://flexible.img.hani.co.kr/flexible/normal/970/546/imgdb/original/2022/1209/20221209501200.jpg"
            alt={`https://flexible.img.hani.co.kr/flexible/normal/970/546/imgdb/original/2022/1209/20221209501200.jpg thumnail`}
            width={130}
            height={90}
            style={{ borderRadius: 5 }}
          />
          <div>
            <p style={{ fontSize: 18, cursor: "pointer" }}>example</p>
            <p style={{ fontSize: 13, color: "#c1c1c1" }}>충청북도 보은군 보은읍 성주1길 104</p>
            <p style={{ fontSize: 13, color: "#c1c1c1", fontWeight: "bold" }}>
              나와의 거리: 134.7km
            </p>
            <p style={{ fontSize: 13, fontWeight: "bold" }}>기행문: 141장</p>
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", marginBottom: 5 }}>
          <Image
            src="https://flexible.img.hani.co.kr/flexible/normal/970/546/imgdb/original/2022/1209/20221209501200.jpg"
            alt={`https://flexible.img.hani.co.kr/flexible/normal/970/546/imgdb/original/2022/1209/20221209501200.jpg thumnail`}
            width={130}
            height={90}
            style={{ borderRadius: 5 }}
          />
          <div>
            <p style={{ fontSize: 18, cursor: "pointer" }}>example</p>
            <p style={{ fontSize: 13, color: "#c1c1c1" }}>충청북도 보은군 보은읍 성주1길 104</p>
            <p style={{ fontSize: 13, color: "#c1c1c1", fontWeight: "bold" }}>
              나와의 거리: 134.7km
            </p>
            <p style={{ fontSize: 13, fontWeight: "bold" }}>기행문: 141장</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    key: 1,
    label: <p className={styles.label}>간단 후기</p>,
    children: <div>간단후기 예시</div>,
  },
];

export const columns = [
  {
    title: "제목",
    dataIndex: "title",
    render: (text: string) => <h4 style={{ width: 200, fontSize: 20 }}>{text}</h4>,
  },
  {
    title: "내용",
    dataIndex: "contents",
  },
  {
    title: "댓글",
    dataIndex: "commentCount",
  },
  {
    title: "추천",
    dataIndex: "thumbsUp",
  },
  {
    title: "작성자",
    dataIndex: "writer",
  },
  {
    title: "작성일",
    dataIndex: "createAt",
  },
];

export const dataSource = [
  {
    key: "1",
    title: "신라의 영혼...",
    contents:
      "보은 삼년산성은 우리나라 대표 석축산성으로 신라 자비마립간 13년 470에 축조되었고 소지마립간8년486",
    commentCount: 4,
    thumbsUp: 12,
    writer: "으워오",
    createAt: "2024.08.16",
  },
  {
    key: "1",
    title: "신라의 영혼...",
    contents:
      "보은 삼년산성은 우리나라 대표 석축산성으로 신라 자비마립간 13년 470에 축조되었고 소지마립간8년486",
    commentCount: 4,
    thumbsUp: 12,
    writer: "으워오",
    createAt: "2024.08.16",
  },
  {
    key: "1",
    title: "신라의 영혼...",
    contents:
      "보은 삼년산성은 우리나라 대표 석축산성으로 신라 자비마립간 13년 470에 축조되었고 소지마립간8년486",
    commentCount: 4,
    thumbsUp: 12,
    writer: "으워오",
    createAt: "2024.08.16",
  },
  {
    key: "1",
    title: "신라의 영혼...",
    contents:
      "보은 삼년산성은 우리나라 대표 석축산성으로 신라 자비마립간 13년 470에 축조되었고 소지마립간8년486",
    commentCount: 4,
    thumbsUp: 12,
    writer: "으워오",
    createAt: "2024.08.16",
  },
];
