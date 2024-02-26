import banner from '../../assets/banner-1.jpg';

const Banner = () => {
    return (
        <div className="lg:min-h-[765px] min-h-[1150px] bg-cover px-2 lg:mb-10 lg:px-8 flex lg:flex-row flex-col lg:justify-around items-center" style={{ backgroundImage: `url(${banner})` }}>
            {/* texts */}
            <div className="hero-content py-10 text-center text-neutral-content lg:pb-56">
                <div className="max-w-xl text-left">
                    <h1 className="mb-5 text-5xl leading-snug font-bold">IT Consulting Services For Your Business</h1>
                    <p className="mb-5 text-lg font-medium leading-normal">We are leading technology solutions providing company all over the world doing over 40 years.</p>
                    <button className="btn btn-primary">Get Started</button>
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
                        <input type="submit" className='btn btn-primary' value="Submit Now" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Banner;