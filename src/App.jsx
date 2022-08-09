import Navbar from './components/Navbar'
import Section from './components/Section'
import Body from './components/Body'
import Footer from './components/Footer'
import Latest from './components/Latest'
import DataList from './DataList'
import './css/App.css'
import './css/Navbar.css'
import './css/Section.css'
import './css/Body.css'
import './css/Latest.css'
import './css/Footer.css'

function App() {
  const dataList = DataList.map(item => {
    return (
      <Latest 
        key = {item.id}
        {...item}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <Section />
      <Body />
      <h1 className="lproducts reveal">Our Latest Releases</h1>
        <section className="reveal" id="products">
        {dataList}
      </section>
      <Footer />
    </div>
  )
}

export default App
