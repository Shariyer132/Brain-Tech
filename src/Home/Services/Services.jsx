import Header from "../../components/Header/Header";
import img1 from '../../assets/1.png';

const Services = () => {
    return (
        <div className="bg-[#F6F7F9] py-32">
            <Header subHeader={'SERVICES'} header={'We Are Offering All Kinds of IT Solutions Services'} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 pt-10 place-items-center mx-5 max-w-7xl lg:mx-auto">
                {/* Card one */}
                <div className="card md:items-start gap-3 bg-base-100 p-8 shadow-xl">
                    <figure>
                        <img src={img1} alt="" className="rounded-xl w-24" />
                    </figure>
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <h2 className="card-title pb-3">Software Development</h2>
                        <p>At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.</p>
                    </div>
                </div>
                {/* Card two */}
                <div className="card md:items-start  gap-3 bg-base-100 p-8 shadow-xl">
                    <figure>
                        <img src={img1} alt="" className="rounded-xl w-24" />
                    </figure>
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <h2 className="card-title pb-3">Software Development</h2>
                        <p>At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.</p>
                    </div>
                </div>
                {/* Card three */}
                <div className="card md:items-start gap-3 bg-base-100 p-8 shadow-xl">
                    <figure>
                        <img src={img1} alt="" className="rounded-xl w-24" />
                    </figure>
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <h2 className="card-title pb-3">Software Development</h2>
                        <p>At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.</p>
                    </div>
                </div>
                {/* Card four */}
                <div className="card md:items-start gap-3 bg-base-100 p-8 shadow-xl">
                    <figure>
                        <img src={img1} alt="" className="rounded-xl w-24" />
                    </figure>
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <h2 className="card-title pb-3">Software Development</h2>
                        <p>At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.</p>
                    </div>
                </div>
                {/* Card five */}
                <div className="card md:items-start gap-3 bg-base-100 p-8 shadow-xl">
                    <figure>
                        <img src={img1} alt="" className="rounded-xl w-24" />
                    </figure>
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <h2 className="card-title pb-3">Software Development</h2>
                        <p>At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.</p>
                    </div>
                </div>
                {/* Card six */}
                <div className="card md:items-start gap-3 bg-base-100 p-8 shadow-xl">
                    <figure>
                        <img src={img1} alt="" className="rounded-xl w-24" />
                    </figure>
                    <div className="flex flex-col items-center text-center md:items-start md:text-left">
                        <h2 className="card-title pb-3">Software Development</h2>
                        <p>At vero eos et accusamus etiusto odio praesentium accusamus etiusto odio data center for managing database.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;