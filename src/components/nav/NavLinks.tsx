import Link from "next/link";

function NavLinks() {
  return (
    <>
      <Link href="/">Home</Link>
      <Link href="/kitchen">Kitchen</Link>
      <Link href="/insights">Insights</Link>
      <Link href="/leftover-legend">Leftover Legend</Link>
      <Link href="/schools">Schools</Link>
      <Link href="/faq">FAQ</Link>
      <Link href="/contact">Contact</Link>
    </>
  );
}
 export default NavLinks;