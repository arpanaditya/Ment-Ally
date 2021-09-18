import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AnimationCheckerContext from "./context/AnimationCheckerContext";
import Layout from "./Layout/Layout";
import Homepage from "./screens/Homepage/Homepage";
import Meditation from "./screens/Meditation/Meditation";
import Blog from "./screens/Blogs/Blog";
import BlogDetail from "./screens/BlogDetail/BlogDetail";
import About from "./screens/About/About";
import Yogamain from "./screens/Yoga/Yogamain";
// import birds from "./animation/birds.json";
// import Lottie from "lottie-react";

function App() {
  return (
    <Router>
     <AnimationCheckerContext>
     <Layout>
        <div className="App">
        {/* <Lottie animationData={birds}

        className='birds'
/> */}
         <Switch>
           <Route exact path='/'>
               <Homepage/>
               
           </Route>
           <Route path='/Meditation'>
             <Meditation/>
           </Route>

           <Route path='/blog'>
             <Blog/>
           </Route>

           <Route path='/About'>
             <About/>
           </Route>

           <Route path='/Yoga'>
             <Yogamain/>
           </Route>

           <Route path='/blogs/:id'>
             <BlogDetail/>
           </Route>
         </Switch>
        </div>
      </Layout>
     </AnimationCheckerContext>
    </Router>
  );
}

export default App;
