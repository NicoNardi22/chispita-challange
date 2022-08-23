const Calendar = ({ fill = "#3D63A9" }: { fill?: string }) => {
  return (
    <div className="flex items-center justify-center">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 0H5.5V2H12.5V0H14V2H18V6.5V8V18H0V8V6.5V2H4V0ZM12.5 3.5V5H14V3.5H16.5V6.5H1.5V3.5H4V5H5.5V3.5H12.5ZM1.5 8V16.5H16.5V8H1.5Z"
          fill={fill}
        />
      </svg>
    </div>
  );
};

export default Calendar;
