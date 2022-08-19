const NavBar = ({ navUrls }: { navUrls: { urls: Array<string> } }) => {
  console.log(navUrls);
  return (
    <div className="container">
      <p>Soy el Nav. Estos son los links: {navUrls.urls}</p>
    </div>
  );
};

export default NavBar;
