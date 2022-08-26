import Home from "../components/Container/Home";
import Layout from "../components/Layout/Layout";

export default function HomePage() {
  return (
    <Layout 
      title={"Welcome to TemuRasa!"} 
      desc="TemuRasa: Find Your Taste in Indonesia"
    >
      <Home />
    </Layout>
  )
}
