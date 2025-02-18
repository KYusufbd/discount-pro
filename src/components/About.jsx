const About = () => {
  return (
    <div>
      <div className="w-full bg-primary text-primary-content py-4">
        <div className="section flex flex-row justify-between">
          <h1 className="text-start font-bold text-3xl">About The Developer</h1>
        </div>
      </div>
      <div
        className="hero min-h-screen flex flex-col gap-12 py-10"
        style={{
          backgroundImage: "url(/bg-image.jpg)",
        }}
      >
        <div className="hero-content text-neutral-content text-start flex flex-row flex-wrap gap-24">
          <div className="h-80">
            <img className="h-full mx-auto" src="/user.png" alt="dev-image" />
          </div>
          <div className="max-w-md">
            <h1 className="mb-5 text-4xl font-bold">
              Hello, I&apos;m Kazi Yusuf
            </h1>
            <h3 className="mb-5 text-2xl font-semibold">
              MERN Stack Developer
            </h3>
            <p className="mb-5">
              I&apos;m a MERN stack developer specializing in front-end web
              development with React, Tailwind CSS, and Firebase, creating fast
              and user-friendly web applications.
            </p>
            <button className="btn btn-primary">Get Connected</button>
          </div>
        </div>
        <div className="section flex flex-row justify-start">
          <div className="flex flex-col gap-4 w-full md:w-4/5 text-lg text-primary-content px-6 py-10 outline-2 outline-base-100 rounded-2xl">
            <h3 className="text-3xl">Hello, I&apos;m Kazi Yusuf.</h3>
            <p>
              I&apos;m a MERN Stack Developer with a strong passion for building
              modern, high-performance web applications. With expertise in
              front-end development, I specialize in crafting sleek,
              user-friendly interfaces using:
            </p>
            <ul className="pl-12">
              <li>
                <strong>HTML, CSS, JavaScript</strong> - The building blocks of
                the web
              </li>
              <li>
                <strong>React & Tailwind CSS</strong> - For fast, responsive,
                and beautiful UIs
              </li>
              <li>
                <strong>Firebase</strong> - For seamless authentication &
                real-time database solutions
              </li>
              <li>
                <strong>MERN Stack</strong> - Building full-stack web
                applications with MongoDB, Express.js, React, and Node.js
              </li>
            </ul>
          </div>
        </div>
        <div className="section flex flex-row justify-end">
          <div className="flex flex-col gap-4 w-full md:w-4/5 text-lg text-primary-content px-6 py-10 outline-2 outline-base-100 rounded-2xl">
            <h3 className="text-3xl">What I Do</h3>
            <p>
              I focus on creating highly interactive, fast, and scalable web
              solutions. Whether it&apos;s developing an e-commerce platform, a
              coupon-collecting app, or a dynamic dashboard, I strive to deliver
              smooth user experiences and clean code architecture.
            </p>
          </div>
        </div>
        <div className="section flex flex-row justify-start">
          <div className="flex flex-col gap-4 w-full md:w-4/5 text-lg text-primary-content px-6 py-10 outline-2 outline-base-100 rounded-2xl">
            <h3 className="text-3xl">Skills & Technologies</h3>
            <ul className="pl-12">
              <li>
                <strong>Frontend:</strong> - React.js, Next.js, Tailwind CSS,
                Redux, Bootstrap
              </li>
              <li>
                <strong>Backend:</strong> Node.js, Express.js, MongoDB
              </li>
              <li>
                <strong>Tools:</strong> Git, GitHub, Vercel, Netlify, Postman
              </li>
            </ul>
          </div>
        </div>
        <div className="section flex flex-row justify-end">
          <div className="flex flex-col gap-4 w-full md:w-4/5 text-lg text-primary-content px-6 py-10 outline-2 outline-base-100 rounded-2xl">
            <h3 className="text-3xl">Get in Touch</h3>
            <p>
              Looking for a skilled MERN stack developer for your next project?
              Let’s collaborate!
            </p>
            <ul className="pl-12">
              <li>
                <strong>Email: </strong>
                <a href="mailto:yfaka001@gmail.com">yfaka001@gmail.com</a>
              </li>
              <li>
                <strong>LinkedIn: </strong>
                <a
                  href="https://www.linkedin.com/in/kazi-yusuf/"
                  target="_blank"
                >
                  linkedin.com/in/kazi-yusuf/
                </a>
              </li>
              <li>
                <strong>GitHub: </strong>
                <a href="https://github.com/KYusufbd" target="_blank">
                  github.com/KYusufbd
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
