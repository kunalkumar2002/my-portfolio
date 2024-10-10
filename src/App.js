import './App.css';
import linkedinIcon from './assets/linkedin.png';
import githubIcon from './assets/github.png';
import kunalPic from './assets/kunal_pic.jpeg'
import exper from './assets/education.png'
import education from './assets/education.png'
import arrow from './assets/arrow.png'
import checkmark from './assets/checkmark.png'

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <nav id="desktop-nav">
      <div class="logo">Kunal Kumar</div>
      <div>
        <ul class="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
    <nav id="hamburger-nav">
      <div class="logo">Kunal Kumar</div>
      <div class="hamburger-menu">
        <div class="hamburger-icon" onclick="toggleMenu()">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="menu-links">
          <li><a href="#about" onclick="toggleMenu()">About</a></li>
          <li><a href="#experience" onclick="toggleMenu()">Experience</a></li>
          <li><a href="#projects" onclick="toggleMenu()">Projects</a></li>
          <li><a href="#contact" onclick="toggleMenu()">Contact</a></li>
        </div>
      </div>
    </nav>


     <section id="profile">
      <div class="section__pic-container">
        <img src={kunalPic} alt="Kunal Kumar" />
      </div>
      <div class="section__text">
        <p class="section__text__p1">Hello, I'm</p>
        <h1 class="title">Kunal Kumar</h1>
        <p class="section__text__p2">Frontend Developer</p>
        <div class="btn-container">
        <a href="./assets/Kunal Kumar.pdf" download>
          <button className="btn btn-color-2">
            Download CV
          </button>
        </a>
          <button class="btn btn-color-1" onclick="location.href='./#contact'">
            Contact Info
          </button>
        </div>
        <div id="socials-container">
      <img
        src={linkedinIcon}
        alt="My LinkedIn"
        className="icon"
        onClick={() => window.open('https://www.linkedin.com/in/kunal-kumar-kashyap', '_blank')}
      />
      <img
        src={githubIcon}
        alt="My Github profile"
        className="icon"
        onClick={() => window.open('https://github.com/kunalkumar2002', '_blank')}
      />
    </div>
      </div>
    </section>



    <section id="about">
      <p class="section__text__p1">Get To Know More</p>
      <h1 class="title">About Me</h1>
      <div class="section-container">
        <div class="section__pic-container">
          <img
            src="./assets/about-pic.png"
            alt="Profile_picture"
            class="about-pic"
          />
        </div>
        <div class="about-details-container">
          <div class="about-containers">
            <div class="details-container">
              <img
                src={exper}
                alt="Experience icon"
                class="icon"
              />
              <h3>Experience</h3>
              <p>6+ month <br />Frontend Development</p>
            </div>
            <div class="details-container">
              <img
                src={education}
                alt="Education icon"
                class="icon"
              />
              <h3>Education</h3>
              <p>B.Sc. Bachelors Degree</p>
            </div>
          </div>
          <div class="text-container">
            <p>
            As a Computer Science student with a passion for problem solving, I am excited to bring my problem solving skills
            with attention to details, to the software industry. My background in engineering has equipped me with a solid
            foundation in problem solving and CSE fundamentals. I am eager to learn new tech and tools to develop innovative
            solutions for complex problems.
            </p>
          </div>
        </div>
      </div>
      <img
        src={arrow}
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#experience'"
      />
    </section>




    <section id="experience">
      <p class="section__text__p1">Explore My</p>
      <h1 class="title">Experience</h1>
      <div class="experience-details-container">
        <div class="about-containers">
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>HTML</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                   src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>CSS</h3>
                  <p>Experienced</p>
                </div>
              </article>
              <article>
                <img
                   src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>React.js</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                   src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                   src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>TypeScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Material UI</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
          <div class="details-container">
            <h2 class="experience-sub-title">Frontend Development</h2>
            <div class="article-container">
              <article>
                <img
                   src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>MongoDB</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
                <img
                   src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Node JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                   src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Express JS</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
                <img
                  src={checkmark}
                  alt="Experience icon"
                  class="icon"
                />
                <div>
                  <h3>Git</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <img
         src={arrow}
        alt="Arrow icon"
        class="icon arrow"
        onclick="location.href='./#projects'"
      />
    </section>

      </header>
    </div>
  );
}

export default App;
