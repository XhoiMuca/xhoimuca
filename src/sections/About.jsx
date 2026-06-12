import { useState } from 'react';
import Globe from 'react-globe.gl';

import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('xhoi.work@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/Avatar.PNG" alt="Avatar" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I’m Xhoi Muça</p>
              <p className="grid-subtext">
              With 3 years of experience, I specialize in frontend development, app creation, and WordPress, building fast, user-friendly, and visually appealing digital solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/skills.png" alt="skills" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
              I blend the right languages, frameworks, and tools to create apps that look great, run smoothly, and work everywhere.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 41.3281482, lng: 19.8184435, text: 'I am here', color: 'white', size: 15 }]}
              />
            </div>
            <div>
            <p className="grid-headtext">I’m flexible with time zones and can work with teams anywhere</p>
<p className="grid-subtext">Based in Tirana, Albania — open to remote work worldwide.</p>
<a href="#contact">
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" /> 
</a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
              I build things with code — sometimes on purpose, sometimes by happy accident. For me, programming is equal parts creativity, problem-solving, and stubbornness. Always exploring new tech and leveling up my skills.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/contact.png"
              alt="contact"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-contain sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <button className="copy-container" onClick={handleCopy} aria-label="Copy email address">
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">xhoi.work@gmail.com</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
