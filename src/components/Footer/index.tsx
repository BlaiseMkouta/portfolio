const Footer = () => {
  return (
    <footer>
      <div className=" text-white/70 border-t-2 border-white/10 bg-black py-4">
        <div className="container mx-auto text-center">
          <p>
            &copy; {new Date().getFullYear()} Blaise MKOUTA. Tous droits
            réservés.
          </p>
        </div>
      </div>
      <div className="bg-black text-white py-4"></div>
    </footer>
  );
};

export default Footer;
