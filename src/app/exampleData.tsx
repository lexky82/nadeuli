import Image from "next/image";

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
  viewDetail: "",
};

export const TabData = [
  {
    key: 0,
    label: `기행문(${exmapleFetchData.travelessay.length})`,
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
    label: "간단 후기",
    children: <div>간단후기 예시</div>,
  },
];
