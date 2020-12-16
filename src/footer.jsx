import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>CopyRight-Yash Patel {year}</p>
    </footer>
  );
}
export default Footer;
