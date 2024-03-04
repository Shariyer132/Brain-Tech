import img1 from '../../assets/1 (3).png';
import img2 from '../../assets/2 (4).png';
import img3 from '../../assets/3 (3).png';
import img4 from '../../assets/4 (1).png';

const Process = () => {
    return (
        <div className='max-w-7xl lg:mx-auto mx-5 my-28 flex flex-col'>
            <span className='text-blue-700 bg-[#E2EBF8] py-2 rounded-full px-5 mx-auto text-center'>PROCESS</span>
            <h2 className='md:text-4xl md:font-bold text-3xl font-semibold text-center pt-5 pb-10'>Our Working Process</h2>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10'>
                <div className="flex flex-col gap-5 items-center">
                    <img src={img1} alt="" />
                    <h4 className="text-2xl font-medium">Discovery</h4>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <img src={img2} alt="" />
                    <h4 className="text-2xl font-medium">Planning</h4>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <img src={img3} alt="" />
                    <h4 className="text-2xl font-medium">Execute</h4>
                </div>
                <div className="flex flex-col gap-5 items-center">
                    <img src={img4} alt="" />
                    <h4 className="text-2xl font-medium">Deliver</h4>
                </div>
            </div>                
        </div>
    );
};

export default Process;