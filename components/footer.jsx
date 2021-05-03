import Container from './container'

export default function Footer() {
  return (
  <footer className="bg-accent-1 border-t border-accent-2 myblog_bgcolor_sub">
    <Container key="footer">
      <div className="py-28 flex flex-col lg:flex-row text-white">
        about:<br />
        Copyright , XXX Inc.
      </div>
    </Container>
  </footer>
  )
}
