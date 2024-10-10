import styles from "./about.module.css"

function About() {
  return (
    <div className='lg:h-screen flex w-screen flex-wrap justify-center overflow-hidden'>
        <div className='lg:w-[500px] w-screen relative bg-slate-500 flex justify-center md:items-start items-end'>
         <div className='w-72 mt-52 border-8'>
          <img src="/profile.jpg" alt="" />
         </div>
        </div>
        <div className='lg:w-[700px]  w-screen bg-gray-400 flex  md:items-center '>
         <div className="md:ms-20 px-4 md:px-0 md:w-2/3 mt-8">
        <h1 className={`${styles.heading} font`} >About <span className="font-bold bg-[linear-gradient(to_right,_#fac37b,_transparent)]">
           Me
          </span></h1>
        <p className={`${styles.paragraph} relative md:left-[3rem] w-fit text-xl`}>
          <span></span>
          I M an enthusiastic <span className="font-bold">web developer</span>. A detail-oriented and innovative programmer. Passionate about solving complex problems and creating efficient, scalable code for {/*both*/} <span className="font-bold">front-end</span>{/*and back-end*/} systems. Seeking an opportunity to contribute to a dynamic development team and utilize my expertise
        </p>
        <div className={`${styles.skills} relative md:left-[3rem] w-fit text-xl mt-6`}><span className="text-xl font-bold italic">My skills are : </span><div className={styles.badge}>HTML</div> <div className={styles.badge}>CSS</div><div className={styles.badge}>Bootsratp</div> <div className={styles.badge}>Tailwind</div> <div className={styles.badge}>JavaScript</div> <div className={styles.badge}>TypeScript</div> <div className={styles.badge}>React.Js</div> <div className={styles.badge}>Next.js</div> <div className={styles.badge}>Firebase</div>  
        </div>
        <button className="px-3 py-2 bg-black text-white rounded ms-14 mt-6">Contact Me</button>
         </div>
        </div>
    </div>
  )
}

export default About