import Header from "../../components/Header/Header";
import img1 from '../../assets/1 (1).png';
import img2 from '../../assets/2 (1).png';
import img3 from '../../assets/3 (1).png';
import { FaDollarSign } from "react-icons/fa";

const PricingPlan = () => {
    return (
        <div>
            <Header header='Our Pricing Plan' subHeader='PRICING' />
            <div className="flex flex-wrap justify-center py-20 pb-36 gap-8 max-w-7xl mx-auto">
                {/* card one */}
                <div className="card w-96 bg-base-100 shadow-xl relative">
                    <figure className="flex">
                        <p className="bg-blue-800 text-white absolute top-9 left-0 rounded-r-full px-6 py-2">SILVER</p>
                        <img src={img1} alt="Silver" className="w-1/3 pt-5" />
                    </figure>
                    <div className="text-center py-10 border-b mx-8">
                        <div className="flex justify-center items-baseline">
                            <span className="text-2xl"><FaDollarSign /></span>
                            <h2 className="text-6xl font-semibold">29.99</h2>
                        </div>
                        <p className="text-lg">Monthly Package</p>
                    </div>
                    <div className="max-w-72 mx-auto w-full flex flex-col gap-5 py-10">
                        <div className="flex items-center justify-between">
                            <p>Powerful Admin Panel</p>
                            <span className="text-lg font-extrabold text-blue-800">✓</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <p>1 Native Android App</p>
                            <span className="text-lg font-extrabold text-blue-800">✓</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <p>Multi-Language Support</p>
                            <span className="text-blue-800">🞭</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <p>Support via E-mail and Phone</p>
                            <span className="text-lg font-extrabold text-blue-800">✓</span>
                        </div>
                    </div>
                    <div className="card-actions justify-center -mb-5">
                        <button className="btn bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] hover:from-[#4E95ED] hover:to-[#0F359E] text-lg text-white px-9 border-0 rounded-full">Buy Now</button>
                    </div>
                </div>
                {/* card two */}
                <div className="card w-96 bg-[#0640AF] text-white shadow-xl relative">
                    <figure className="flex">
                        <p className="bg-white text-blue-800 absolute top-9 left-0 rounded-r-full px-6 py-2">GOLD</p>
                        <img src={img2} alt="Silver" className="w-1/3 pt-5" />
                    </figure>
                    <div className="text-center py-10 border-b mx-8">
                        <div className="flex justify-center items-baseline">
                            <span className="text-2xl"><FaDollarSign /></span>
                            <h2 className="text-6xl font-semibold">39.99</h2>
                        </div>
                        <p className="text-lg">Monthly Package</p>
                    </div>
                    <div className="max-w-72 mx-auto w-full flex flex-col gap-5 py-10">
                        <div className="flex items-center justify-between">
                            <p>Powerful Admin Panel</p>
                            <span className="text-lg font-extrabold">✓</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <p>2 Native Android App</p>
                            <span className="text-lg font-extrabold ">✓</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <p>Multi-Language Support</p>
                            <span className="text-lg font-extrabold ">✓</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <p>Support via E-mail and Phone</p>
                            <span className="text-lg font-extrabold ">✓</span>
                        </div>
                    </div>
                    <div className="card-actions justify-center -mb-5">
                        <button className="btn bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] hover:from-[#4E95ED] hover:to-[#0F359E] text-lg text-white px-9 border-0 rounded-full">Buy Now</button>
                    </div>
                </div>
                {/* card three */}
                <div className="card w-96 shadow-xl relative">
                    <figure className="flex">
                        <p className="bg-blue-800 text-white absolute top-9 left-0 rounded-r-full px-5 py-2">PLATINUM</p>
                        <img src={img3} alt="Silver" className="w-1/3 pt-5" />
                    </figure>
                    <div className="text-center py-10 border-b mx-8">
                        <div className="flex justify-center items-baseline">
                            <span className="text-2xl"><FaDollarSign /></span>
                            <h2 className="text-6xl font-semibold">79.99</h2>
                        </div>
                        <p className="text-lg">Monthly Package</p>
                    </div>
                    <div className="max-w-72 mx-auto w-full flex flex-col gap-5 py-10">
                        <div className="flex items-center justify-between">
                            <p>Powerful Admin Panel</p>
                            <span className="text-lg font-extrabold text-blue-800">✓</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <p>3 Native Android App</p>
                            <span className="text-lg font-extrabold text-blue-800">✓</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <p>Multi-Language Support</p>
                            <span className="text-lg font-extrabold text-blue-800">✓</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <p>Support via E-mail and Phone</p>
                            <span className="text-lg font-extrabold text-blue-800">✓</span>
                        </div>
                    </div>
                    <div className="card-actions justify-center -mb-5">
                        <button className="btn bg-gradient-to-tr from-[#0F359E] to-[#4E95ED] hover:from-[#4E95ED] hover:to-[#0F359E] text-lg text-white px-9 border-0 rounded-full">Buy Now</button>
                    </div>
                </div>
      
            </div>
        </div>
    );
};

export default PricingPlan;