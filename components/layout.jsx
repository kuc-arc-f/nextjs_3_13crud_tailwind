//import Alert from '../components/alert'
import Footer from '../components/footer'
import Navibar from '../components/Navibar'

export default function Layout({ preview, children }) {
  return (
    <div>
      <link href="https://use.fontawesome.com/releases/v5.6.1/css/all.css" rel="stylesheet" />
      <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet"></link>
      <Navibar />
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}
