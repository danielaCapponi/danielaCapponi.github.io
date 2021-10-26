const PlayIcon = ({
  filled = "none",
  width = 18,
  height = 18,
  opacity = "100%",
  handleOnClick,
}) => {
  return (
    <>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill={filled}
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleOnClick}
      >
        <path
          d="M2.20164 18.4695L10.1643 4.00506C10.9021 2.66498 13.0979 2.66498 13.8357 4.00506L21.7984 18.4695C22.4443 19.6428 21.4598 21 19.9627 21H4.0373C2.54022 21 1.55571 19.6428 2.20164 18.4695Z"
          stroke="#fff"
          strokeWidth="2"
          opacity={opacity}
          strokeOpacity={opacity}
          strokeLinecap="round"
          strokeLinejoin="round"
        ></path>
      </svg>
    </>
  );
};

export default PlayIcon;
