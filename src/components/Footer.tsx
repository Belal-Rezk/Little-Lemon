import footer from "/icons&images/footer.png";
export default function Footer() {
  return (
    <footer className="contain bg-highlight_1 py-3 md:py-5 flex items-center justify-between">
      <figure className="w-10">
        <img src={footer} alt="footer logo" className="w-full" />
      </figure>
      <pre className=" bg-primary_1 text-primary_2 py-1 px-3 rounded-full text-sm">
        Copyright <span className="text-highlight_1 text-lg">&copy;</span>{" "}
        Little-Lemon
      </pre>
    </footer>
  );
}
