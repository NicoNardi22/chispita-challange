const Menu = ({ fill = "#3D63A9" }: { fill?: string }) => {
  return (
    <div>
      <svg
        width="16"
        height="12"
        viewBox="0 0 16 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0H16V2H0V0Z" fill={fill} />
        <path d="M0 5H16V7H0V5Z" fill={fill} />
        <path d="M16 10H6V12H16V10Z" fill={fill} />
      </svg>
    </div>
  );
};

export default Menu;
