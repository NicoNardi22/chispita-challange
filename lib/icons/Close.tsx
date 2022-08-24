const Close = ({ fill = "#2B2B2B" }: { fill?: string }) => {
  return (
    <div>
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.89035 8L16 0.890345L15.1097 0L8 7.10965L0.890352 0L6.16692e-06 0.890345L7.10966 8L0 15.1097L0.890345 16L8 8.89034L15.1097 16L16 15.1097L8.89035 8Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default Close;
