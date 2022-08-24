const Minus = ({ fill = "#2B2B2B" }: { fill?: string }) => {
  return (
    <div>
      <svg
        width="10"
        height="10"
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 0H4V4L0 4V6H4V10H6V6H10V4L6 4V0Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default Minus;
