interface Props {
  title: string;
  profilePic;
  coverPic;
}

export function Thumbnail({ title, profilePic, coverPic }: Props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#08070b",
        height: "100%",
        width: "100%",
        color: "white",
        position: "relative",
      }}
    >
      <img
        className="thumbnail__background"
        src={coverPic.buffer}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          opacity: "0.075",
        }}
      ></img>
      <div
        className="thumbnail__navbar"
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          padding: "4rem 4rem 0 1rem",
        }}
      >
        <div
          className="thumbnail__navbar__author"
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "1.5rem",
          }}
        >
          <img
            className="thumbnail__navbar__author__image"
            style={{ borderRadius: "50%" }}
            src={profilePic.buffer}
            width={64}
            height={64}
          />
          <div
            className="thumbnail__navbar__author__name"
            style={{
              fontFamily: "Neuzeit Grotesk",
              fontSize: "2rem",
              fontWeight: "400",
              color: "#e0e0e0",
            }}
          >
            Sarthik Gupta
          </div>
        </div>
      </div>
      <div
        className="thumbnail__content"
        style={{
          display: "flex",
          flexGrow: 1,
          alignItems: "flex-end",
          color: "#ede7f6",
          fontSize: "4rem",
          padding: "2rem 4rem 7rem 4rem",
          fontWeight: "700",
          fontFamily: "Neuzeit Grotesk",
          lineHeight: "1.5",
        }}
      >
        <div
          className="thumbnail__content__title"
          style={{
            display: "block",
            textOverflow: "ellipsis",
            wordWrap: "break-word",
            overflow: "hidden",
            maxHeight: "15rem",
          }}
        >
          {title}
        </div>
      </div>
      <div
        className="thumbnail__footer"
        style={{
          height: "1rem",
          width: "100%",
          backgroundColor: "#6200ea",
        }}
      ></div>
    </div>
  );
}
