import React, {Component} from 'react'
import request from 'axios'

import Header from './Header/index.jsx'
import Banner from './Banner/index.jsx'
import SearchArea from './SearchArea/index.jsx'
import FeaturedProperties from './FeaturedProperties/index.jsx'
import Services from './Services/index.jsx'
import RecentlyProperties from './RecentlyProperties/index.jsx'
import PopularPlaces from './PopularPlaces/index.jsx'
import Testimonial from './Testimonial/index.jsx'
import BrandsAndPartners from './BrandsAndPartners/index.jsx'
import Counter from './Counter/index.jsx'
import Footer from './Footer/index.jsx'

class App extends Component {

  // constructor() {
  //   super()
  //   this.state = {
  //     posts: []
  //   }
  // }

  // componentDidMount() {
  //   request.get('/api/posts').then((res) => {
  //     this.setState({posts: res.data.data})
  //   }).catch((err) => {
  //     console.log(err);
  //   })
  // }

  render() {
    // var posts = this.state.posts.map((post, i) => {
    //   return <li key={i}>{post.title}</li>
    // })
    return (
      <div>

        {/* <h1>hola mundillo!!!</h1>
        <ul>
          {posts}
        </ul> */}


         <Header />
         <Banner />
         <SearchArea />
         <FeaturedProperties />
         <Services />
         <RecentlyProperties />
         <div className="clearfix"></div>
         <PopularPlaces />
         <Testimonial />
         <div className="clearfix"></div>
         <Counter />
         <BrandsAndPartners />
         <Footer />



      </div>
    )
  }
}

export default App;
