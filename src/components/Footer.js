const Footer = () => (
  <footer className="bg-zinc-900 text-zinc-100 text-center py-4">
    <p>
      &copy; {new Date().getFullYear()}{" "}
      <span className="text-rose-400 font-medium">BlogApp</span>. All rights
      reserved.
    </p>
  </footer>
);

export default Footer;
