import styles from "./services.module.css"

function Services() {
  return (
    <div className="mt-10 lg:h-screen flex flex-col justify-center items-center gap-y-12">
        <h1 className={styles.heading}>Servic<span className="bg-[linear-gradient(to_right,_#fac37b,_transparent)]">es</span></h1>

    <div className="flex flex-wrap gap-10 justify-center items-center  border-solid ">
        <div className="card border-4 border-black rounded-sm px-6 h-fit pt-24 pb-10 w-72 ">
            <div>
                <h1 className="mb-6 font-bold text-xl">web Design</h1>
            </div>
            <div className="font-bold text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis veritatis magnam facere molestiae libero eum quas, quibusdam, beatae eius nesciunt </div>
        </div>

        <div className="card border-4 border-black rounded-sm px-6 h-fit pt-24 pb-10 w-72 ">
            <div>
                <h1 className="mb-6 font-bold text-xl">web Design</h1>
            </div>
            <div className="font-bold text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis veritatis magnam facere molestiae libero eum quas, quibusdam, beatae eius nesciunt </div>
        </div>

        <div className="card border-4 border-black rounded-sm px-6 h-fit pt-24 pb-10 w-72 ">
            <div>
                <h1 className="mb-6 font-bold text-xl">web Design</h1>
            </div>
            <div className="font-bold text-gray-500">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perferendis veritatis magnam facere molestiae libero eum quas, quibusdam, beatae eius nesciunt </div>
        </div>
    </div>
    </div>
  )
}

export default Services