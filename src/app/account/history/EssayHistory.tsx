import Image from "next/image";

export const EssayHistory = () => {
  return (
    <div style={{ paddingTop: 25 }}>
      <ul style={{ display: "flex", flexDirection: "column", gap: 20, padding: 0 }}>
        <li
          style={{
            display: "flex",
            gap: 20,
            alignItems: "center",
            borderBottom: "1px solid black",
            paddingBottom: 10,
          }}
        >
          <div style={{ width: 96, height: 96, background: "#D9D9D9" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginRight: 30 }}>
            <h3 style={{ fontSize: 18, margin: 0 }}>조선 축성술의 최종 진화, 수원화성</h3>

            <span style={{ color: "#c1c1c1", fontSize: 14 }}>
              수원화성을 다녀왔다. 멋있었다. 역시 조선의 축성술의 마지막 형태라고 하니 그에 맞는
              출중한 모습을 가졌다.....
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src="/Thumb_up.svg" alt="좋아요" width={24} height={24} />
                <span>1.1K</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src="/eye.svg" alt="조회수" width={24} height={24} />
                <span>3.1K</span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Image src="/Update.svg" alt="수정" width={24} height={24} />
            <Image src="/Delete.svg" alt="삭제" width={24} height={24} />
          </div>
        </li>

        <li
          style={{
            display: "flex",
            gap: 20,
            alignItems: "center",
            borderBottom: "1px solid black",
            paddingBottom: 10,
          }}
        >
          <div style={{ width: 96, height: 96, background: "#D9D9D9" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginRight: 30 }}>
            <h3 style={{ fontSize: 18, margin: 0 }}>조선 축성술의 최종 진화, 수원화성</h3>

            <span style={{ color: "#c1c1c1", fontSize: 14 }}>
              수원화성을 다녀왔다. 멋있었다. 역시 조선의 축성술의 마지막 형태라고 하니 그에 맞는
              출중한 모습을 가졌다.....
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src="/Thumb_up.svg" alt="좋아요" width={24} height={24} />
                <span>1.1K</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src="/eye.svg" alt="조회수" width={24} height={24} />
                <span>3.1K</span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Image src="/Update.svg" alt="수정" width={24} height={24} />
            <Image src="/Delete.svg" alt="삭제" width={24} height={24} />
          </div>
        </li>

        <li
          style={{
            display: "flex",
            gap: 20,
            alignItems: "center",
            borderBottom: "1px solid black",
            paddingBottom: 10,
          }}
        >
          <div style={{ width: 96, height: 96, background: "#D9D9D9" }} />

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginRight: 30 }}>
            <h3 style={{ fontSize: 18, margin: 0 }}>조선 축성술의 최종 진화, 수원화성</h3>

            <span style={{ color: "#c1c1c1", fontSize: 14 }}>
              수원화성을 다녀왔다. 멋있었다. 역시 조선의 축성술의 마지막 형태라고 하니 그에 맞는
              출중한 모습을 가졌다.....
            </span>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src="/Thumb_up.svg" alt="좋아요" width={24} height={24} />
                <span>1.1K</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Image src="/eye.svg" alt="조회수" width={24} height={24} />
                <span>3.1K</span>
              </div>
            </div>
          </div>

          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
            <Image src="/Update.svg" alt="수정" width={24} height={24} />
            <Image src="/Delete.svg" alt="삭제" width={24} height={24} />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default EssayHistory;
