const LinkedinIcon = ({ width = 20, height = 20 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="4"
        cy="4"
        r="2"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></circle>
      <rect
        x="2"
        y="9"
        width="4"
        height="13"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></rect>
      <path
        d="M10 22H14V15C14 13.8954 14.8954 13 16 13C17.1046 13 18 13.8954 18 15V22H22V15C22 11.6863 19.3137 9 16 9C12.6863 9 10 11.6863 10 15V22Z"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      ></path>
    </svg>
  );
};

export default LinkedinIcon;
