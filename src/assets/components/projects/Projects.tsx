import styles from "./projects.module.css"

function Projects() {
  return (
    <div className="mt-10 flex flex-col justify-center items-center gap-y-12 ">
        <h1 className={styles.heading}>Proje<span className="bg-[linear-gradient(to_right,_#fac37b,_transparent)]">cts</span></h1>

    <div className="flex flex-wrap gap-10 justify-center items-center  border-solid ">
        <div className="card  rounded-sm  h-fit pt-24 pb-10 w-72 ">
            <div>
            <img src="/projects/image_1.jpeg" alt="" />
            </div>
                <h1 className="mb-2 mt-3 font-bold text-xl">web Design</h1>
            <div className="font-bold text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis veritatis magnam facere molestiae libero eum quas, quibusdam, beatae eius nesciunt </div>
        </div>

        <div className="card rounded-sm h-fit pt-24 pb-10 w-72 ">
            <div>
            <img src="/projects/image_2.jpeg" alt="" />
            </div>
                <h1 className="mb-2 mt-3 font-bold text-xl">web Design</h1>
            <div className="font-bold text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis veritatis magnam facere molestiae libero eum quas, quibusdam, beatae eius nesciunt </div>
        </div>

        <div className="card rounded-sm h-fit pt-24 pb-10 w-72 ">
            <div>
                <img src="/projects/image_3.jpeg" alt="" />
            </div>
            <h1 className="mb-2 mt-3 font-bold text-xl">web Design</h1>
            <div className="font-bold text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis veritatis magnam facere molestiae libero eum quas, quibusdam, beatae eius nesciunt </div>
        </div>
        <div className="card  rounded-sm h-fit pt-24 pb-10 w-72 ">
            <div>
            <img src="/projects/image_1.jpeg" alt="" />
            </div>
                <h1 className="mb-2 mt-3 font-bold text-xl">web Design</h1>
            <div className="font-bold text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis veritatis magnam facere molestiae libero eum quas, quibusdam, beatae eius nesciunt </div>
        </div>

        <div className="card rounded-sm h-fit pt-24 pb-10 w-72 ">
            <div>
            <img src="/projects/image_2.jpeg" alt="" />
            </div>
                <h1 className="mb-2 mt-3 font-bold text-xl">web Design</h1>
            <div className="font-bold text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis veritatis magnam facere molestiae libero eum quas, quibusdam, beatae eius nesciunt </div>
        </div>

        <div className="card rounded-sm h-fit pt-24 pb-10 w-72 ">
            <div>
                <img src="/projects/image_3.jpeg" alt="" />
            </div>
            <h1 className="mb-2 mt-3 font-bold text-xl">web Design</h1>
            <div className="font-bold text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis veritatis magnam facere molestiae libero eum quas, quibusdam, beatae eius nesciunt </div>
        </div>
    </div>
    </div>
  )
}

export default Projects