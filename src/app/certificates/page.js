import Navbar from "@/components/Navbar";
import CertCard from "@/components/CertCard";
import certImg from "@/assets/certImg.png";

function Certificates() {
  const projects = [
    {
      name: "Survey Form",
      src: "/projects/ResponsiveWeb/survey-form/index.html",
    },
    {
      name: "Tribute Page",
      src: "/projects/ResponsiveWeb/tribute-page/index.html",
    },
    {
      name: "Documentation Page",
      src: "/projects/ResponsiveWeb/documentation-page/index.html",
    },
    {
      name: "Product Landing Page",
      src: "/projects/ResponsiveWeb/landing-page/index.html",
    },
    {
      name: "Portfolio Page",
      src: "/projects/ResponsiveWeb/portfolio-page/index.html",
    },
  ];

  return (
    <>
      <Navbar />
      <div style={{ padding: "2rem" }}>
        <h1 className="heading">My Certificates</h1>
        <CertCard
          certName="freeCodeCamp - Responsive Web Design"
          certImg={certImg}
          certDesc="This certification from freeCodeCamp covers the fundamentals of modern HTML and CSS for building responsive, accessible websites. 
          Through a series of hands-on projects — like tribute pages, surveys, product landing pages, and portfolios — I learned semantic HTML, CSS Flexbox, CSS Grid, typography, and responsive design techniques. 
          By completing it I demonstrated the ability to structure content properly, style pages for different devices, and follow best practices for accessibility."
          certAlt="Responsive Web Design Certificate"
          projects={projects}
        />
      </div>
    </>
  );
}

export default Certificates;
