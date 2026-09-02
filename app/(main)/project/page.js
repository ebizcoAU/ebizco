import Link from "next/link";
export default function ProjectPage() {
  return (
    <>
<div className="breadcumb-wrapper" data-bg-src="/assets/img/bg/breadcumb-bg.jpg">
  <div className="container z-index-common">
    <div className="breadcumb-content">
      <h1 className="breadcumb-title">Projects</h1>
      <div className="breadcumb-menu-wrap">
        <ul className="breadcumb-menu">
          <li><Link href="/">Home</Link></li>
          <li>Projects</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<section className="space-top space-extra-bottom">
  <div className="container">
    <div className="row filter-active">
      <div className="col-md-6 col-xxl-auto filter-item">
        <div className="project-style2">
          <div className="project-img">
            <div className="project-shape" /><img src="/assets/img/project/p-2-1.jpg" alt="project" /> <a href="/assets/img/project/p-2-1.jpg" className="icon-btn style4 popup-image"><i className="far fa-search" /></a>
          </div>
          <div className="project-content"><span className="project-label">Startup IT</span>
            <h3 className="project-title h5"><a href="#">UI Development</a></h3>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xxl-auto filter-item">
        <div className="project-style2">
          <div className="project-img">
            <div className="project-shape" /><img src="/assets/img/project/p-2-2.jpg" alt="project" /> <a href="/assets/img/project/p-2-2.jpg" className="icon-btn style4 popup-image"><i className="far fa-search" /></a>
          </div>
          <div className="project-content"><span className="project-label">Android Dev</span>
            <h3 className="project-title h5"><a href="#">App Development</a></h3>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xxl-auto filter-item">
        <div className="project-style2">
          <div className="project-img">
            <div className="project-shape" /><img src="/assets/img/project/p-2-3.jpg" alt="project" /> <a href="/assets/img/project/p-2-3.jpg" className="icon-btn style4 popup-image"><i className="far fa-search" /></a>
          </div>
          <div className="project-content"><span className="project-label">Project Manage</span>
            <h3 className="project-title h5"><a href="#">Graphic Design</a></h3>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xxl-auto filter-item">
        <div className="project-style2">
          <div className="project-img">
            <div className="project-shape" /><img src="/assets/img/project/p-2-4.jpg" alt="project" /> <a href="/assets/img/project/p-2-4.jpg" className="icon-btn style4 popup-image"><i className="far fa-search" /></a>
          </div>
          <div className="project-content"><span className="project-label">Sale Increase</span>
            <h3 className="project-title h5"><a href="#">Affiliat Marketing</a></h3>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xxl-auto filter-item">
        <div className="project-style2">
          <div className="project-img">
            <div className="project-shape" /><img src="/assets/img/project/p-2-5.jpg" alt="project" /> <a href="/assets/img/project/p-2-5.jpg" className="icon-btn style4 popup-image"><i className="far fa-search" /></a>
          </div>
          <div className="project-content"><span className="project-label">Skill Art</span>
            <h3 className="project-title h5"><a href="#">Wordpress Theme</a></h3>
          </div>
        </div>
      </div>
      <div className="col-md-6 col-xxl-auto filter-item">
        <div className="project-style2">
          <div className="project-img">
            <div className="project-shape" /><img src="/assets/img/project/p-2-6.jpg" alt="project" /> <a href="/assets/img/project/p-2-6.jpg" className="icon-btn style4 popup-image"><i className="far fa-search" /></a>
          </div>
          <div className="project-content"><span className="project-label">Sale Increase</span>
            <h3 className="project-title h5"><a href="#">Digital Marketing</a></h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
