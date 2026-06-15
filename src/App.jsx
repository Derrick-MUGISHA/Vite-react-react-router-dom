import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";

function App() {
  return (
    // <>
    //   <div className="min-h-screen bg-blue-50 flex items-center justify-center flex-col gap-4">
    //     <h1 className="text-4xl font-bold text-blue-900">
    //       Tailwind CSS is working!
    //     </h1>

    //     <Button
    //       label="Save"
    //       variant="primary"
    //       onClick={() => console.log("saved")}
    //     />
    //     <Button
    //       label="Cancel"
    //       variant="secondary"
    //       onClick={() => console.log("cancelled")}
    //     />
    //     <Button
    //       label="Delete"
    //       variant="danger"
    //       onClick={() => console.log("deleted")}
    //     />

    //     <Card
    //       title="Software Engineer"
    //       description="Building awesome web apps"
    //       image="src/assets/images/hero.png"
    //       link="/about"
    //     />
    //     <Card
    //       title="Software Engineer"
    //       description="Building awesome web apps"
    //       image="/images/profile.jpg"
    //       link="/about"
    //     />
    //     <Card
    //       title="Software Engineer"
    //       description="Building awesome web apps"
    //       image="/images/profile.jpg"
    //       link="/about"
    //     />
    //   </div>

    //   <div></div>
    // </>

    <Routes>
      {/* Layout route — Navbar and Footer are inside Layout */}
      <Route path="/" element={<Layout />}>
 
        {/* index = the default child route for '/' */}
        <Route index element={<Home />} />
 
        {/* Named child routes */}
        <Route path="about"   element={<About />} />
        <Route path="contact" element={<Contact />} />
 
        {/* Catch-all: anything that doesn't match above */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>

  );
}

export default App;
