"use client";

import Image from "next/image";
import { FrameInfiniteGrid, JustifiedInfiniteGrid } from "@egjs/react-infinitegrid";
import { ChangeEventHandler, useState } from "react";
import { CATEGORY_OPTION, LOCATION_OPTION } from "@/utils/options";
import Dropdown from "@/components/DropDown";
import CheckBox from "@/components/atom/CheckBox";
import Card from "./Card";

function getItems(nextGroupKey: number, count: number) {
  const nextItems = [];
  const nextKey = nextGroupKey * count;

  for (let i = 0; i < count; ++i) {
    nextItems.push({ groupKey: nextGroupKey, key: nextKey + i });
  }
  return nextItems;
}

const Item = ({ num }: any) => (
  <div
    className="item"
    style={{
      width: "250px",
      margin: "0 auto",
    }}
  >
    <div
      className="thumbnail"
      style={{
        borderRadius: "8px",
        fontSize: 0,
        height: "calc(100% - 30px)",
        overflow: "hidden",
      }}
    >
      <Image
        src={`https://naver.github.io/egjs-infinitegrid/assets/image/${(num % 33) + 1}.jpg`}
        alt="egjs"
        fill
        style={{ objectFit: "cover", borderRadius: 15 }}
      />
    </div>
    <div className="info">{`egjs ${num}`}</div>
  </div>
);

export const Travelogue = () => {
  const [items, setItems] = useState(() => getItems(0, 10));

  const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {};

  return (
    <div style={{ background: "#d3d3d3", padding: "30px 50px" }}>
      <div
        style={{
          marginBottom: 30,
          display: "flex",
          justifyContent: "flex-end",
          gap: 20,
          alignItems: "center",
        }}
      >
        <Dropdown placeholder="지역">
          {LOCATION_OPTION.map((location) => {
            return <CheckBox name={location.name} onChange={handleChange} />;
          })}
        </Dropdown>

        <Dropdown placeholder="카테고리">
          {CATEGORY_OPTION.map((Category) => {
            return <CheckBox name={Category.name} />;
          })}
        </Dropdown>

        <div
          style={{ display: "flex", gap: 10, fontWeight: "bold", paddingBottom: 5, fontSize: 14 }}
        >
          <span style={{ color: "#0033A0", cursor: "pointer" }}>인기순</span>
          <span style={{ color: "#999999" }}>|</span>
          <span style={{ color: "#999999", cursor: "pointer" }}>최신순</span>
        </div>
      </div>

      <FrameInfiniteGrid
        gap={5}
        frame={[
          [1, 1, 2, 3, 3],
          [1, 1, 4, 4, 5],
        ]}
        onRequestAppend={(e) => {
          const nextGroupKey = (+e.groupKey! || 0) + 1;

          setItems([...items, ...getItems(nextGroupKey, 10)]);
        }}
      >
        {items.map((item) => (
          <Card
            data-grid-groupkey={item.groupKey}
            key={item.key}
            imageSrc={item.key.toString()}
            title={"조선 축성술의 최종 형태, 수원화성"}
            createAt={"2024.10.14"}
            thumbsUp={501}
            view={1122}
            comment={44}
            location={"경기도 수원"}
            writer={"으워오"}
          />
        ))}
      </FrameInfiniteGrid>
    </div>
  );
};

export default Travelogue;
