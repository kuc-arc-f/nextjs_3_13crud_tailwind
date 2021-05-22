import Layout from '../components/layout'
//
export default function Page() {
  return (
  <Layout>
    <div className="container mx-auto px-5 pb-5 bg-white">
      <hr />
      <h1 className="text-5xl font-bold my-2">About</h1>
      <p>Next.js + tailwind , IndexedDB CRUD sample</p>
      <hr className="my-2"/>
      <p>Date: 2021/05/03</p>
      <hr />
      <h3 className="text-3xl font-bold my-2">author :</h3>
      <p className="my-2">
        <a className="" href="https://twitter.com/kuc_arc_f">@kuc_arc_f</a>
      </p>
      <p className="my-2"><a className="" href="https://kuc-arc-f.com">https://kuc-arc-f.com</a>
      </p>

    </div>
  </Layout>
  )
}
