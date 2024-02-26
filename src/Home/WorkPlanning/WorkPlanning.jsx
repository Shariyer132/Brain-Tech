import img from '../../assets/process-bg.jpg';
const WorkPlanning = () => {
    return (
        <div className='flex flex-col max-w-7xl sm:mx-auto lg:flex-row justify-center mx-3 items-center gap-14 my-10'>
            <div className="card shadow-xl max-w-sm py-12 w-full text-white" style={{ backgroundImage: `url(${img})` }}>
                <div className="card-body">
                    <p className='text-lg'>WORKING PROCESS</p>
                    <h2 className="text-4xl max-w-64 font-bold leading-tight pb-7 pt-2">Our Working Process - How We Work For Our Customers</h2>
                    <div className="card-actions">
                        <button className="btn bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] hover:from-[#4E95ED] hover:to-[#0F359E] text-lg text-white px-9 border-0">Contact Us</button>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 md:px-5 gap-5 px-10 place-items-center'>
                {/* card one */}
                <div className='flex flex-col gap-4'>
                    <h2 className='text-5xl font-bold'>1.</h2>
                    <h5 className='text-xl font-semibold'>Discovery</h5>
                    <p>Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.</p>
                </div>
                {/* card two */}
                <div className='flex flex-col gap-4'>
                    <h2 className='text-5xl font-bold'>2.</h2>
                    <h5 className='text-xl font-semibold'>Discovery</h5>
                    <p>Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.</p>
                </div>
                {/* card three */}
                <div className='flex flex-col gap-4'>
                    <h2 className='text-5xl font-bold'>3.</h2>
                    <h5 className='text-xl font-semibold'>Discovery</h5>
                    <p>Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.</p>
                </div>
                {/* card four */}
                <div className='flex flex-col gap-4'>
                    <h2 className='text-5xl font-bold'>4.</h2>
                    <h5 className='text-xl font-semibold'>Discovery</h5>
                    <p>Quisque placerat vitae lacus ut scelerisque. Fusce luctus odio ac nibh luctus, in porttitor theo lacus egestas.</p>
                </div>

            </div>
        </div>
    );
};

export default WorkPlanning;