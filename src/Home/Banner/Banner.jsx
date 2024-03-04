import banner from '../../assets/banner-1.jpg';

const Banner = () => {
    return (
        <div className="lg:min-h-[765px] sm:min-h-[1150px] min-h-[1250px] bg-cover px-2 lg:mb-10 lg:px-8 flex lg:flex-row flex-col lg:justify-around items-center" style={{ backgroundImage: `url(${banner})` }}>
            {/* texts */}
            <div className="hero-content py-10 text-center text-neutral-content lg:pb-56">
                <div className="max-w-xl lg:text-left flex flex-col items-center lg:items-start">
                    <h1 className="mb-5 sm:text-5xl sm:leading-snug text-4xl font-bold">IT Consulting Services For Your Business</h1>
                    <p className="mb-5 sm:text-lg sm:font-medium sm:leading-normal">We are leading technology solutions providing company all over the world doing over 40 years.</p>
                    <div><button className="btn bg-gradient-to-tr from-[#0F359E] text-white to-[#4E95ED] border-0">Get Started</button></div>
                </div>
            </div>
            {/* form */}
            <div className="card shrink-0 max-w-md w-full h-2/3 shadow-2xl bg-base-100">
                <h3 className='text-2xl pt-7 pb-3 font-bold text-center'>Schedule Your Appointment</h3>
                <p className='text-center'>We here to help you 24/7 with experts</p>
                <form className="card-body gap-4">
                    <div className='form-control'>
                        <input type="name" placeholder="Name" className="input input-bordered" required />
                    </div>
                    <div className='form-control'>
                        <input type="emal" placeholder="E-Mail" className="input input-bordered" required />
                    </div>
                    <div className='form-control'>
                        <input type="number" placeholder="Phone Number" className="input input-bordered" required />
                    </div>
                    <div className='form-control'>
                        <input type="text" placeholder="Your Website" className="input input-bordered" required />
                    </div>
                    <div className='form-control'>
                        <input type="password" placeholder="password" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6">
                        <input type="submit" className='btn bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] border-0 text-white' value="Submit Now" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Banner;