interface ChapterProps {
  id: string;
  title?: string;
  children?: React.ReactNode;
}

export const Chapter = ({ id, title, children }: ChapterProps) => {
  return (
    <div id={id} style={{ marginBottom: 40 }}>
      <p
        style={{
          borderBottom: "7px solid gray",
          paddingBottom: 10,
          fontSize: 24,
          fontWeight: "bold",
        }}
      >
        {title}
      </p>
      {children}
    </div>
  );
};
