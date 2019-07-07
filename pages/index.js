import Link from "next/link"
import Layout from "../components/MyLayout";

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);

export default function Blog() {
  return (
    <Layout>
      <h1>My Blog</h1>
      <ul>
        <PostLink title="Hello Nuxt.js"/>
        <PostLink title="Learn Nuxt.js"/>
        <PostLink title="Deploy"/>
      </ul>
    </Layout>
  );
}
