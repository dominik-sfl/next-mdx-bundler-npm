import Link from "next/link";

export default function Home({ code, frontmatter }) {
  return (
    <>
      <main style={{ fontSize: 18, margin: "10px" }}>
        <p>
          Both work on the client in dev &amp; can be built. Only the
          getStaticProps version works on Vercel for me.
        </p>
        <div style={{ color: "blue", marginBottom: 10 }}>
          <Link href="/ssr">→ MDX-Bundler with getServerSideProps</Link>
        </div>
        <div style={{ color: "blue" }}>
          <Link href="/ssg">→ MDX-Bundler with getStaticProps</Link>
        </div>
      </main>
    </>
  );
}
