import Head from 'next/head'
import Link from 'next/link';
import Container from '../components/container'
import Layout from '../components/layout'
import IndexRow from './IndexRow'
import LibCommon from '../lib/LibCommon'
import LibPagenate from '../lib/LibPagenate'

export default function Index(data) {
  var items = data.blogs
  var json = data.json
// console.log( items )    
  return (
  <div className="bg-gray-100">
    <Layout>
      <div className="container mx-auto px-5 pb-5 bg-white">
        <hr />
        <h1 className="text-5xl font-bold my-2">Home</h1>
        <p>This is home page.</p>
      </div>
    </Layout>
  </div>
  )
}

export async function getStaticProps() {
//console.log(categories)
/*
  var url = process.env.BASE_URL+`/api/posts.php?page=1`
  const res = await fetch( url );
  var blogs = await res.json();
  LibPagenate.init()
  var display = LibPagenate.is_paging_display(blogs.length)      
*/
  return {
    props : {
      blogs: [],
      site_name : process.env.MY_SITE_NAME,
      info_text : "Sample CMSの関連記事を公開予定しております。",        
//      display: display
    }
  };
}
