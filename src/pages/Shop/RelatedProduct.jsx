import img1 from '../../assets/1 (3).jpg';

const RelatedProduct = () => {
    return (
        <div className="mx-5">
            <h3 className="text-2xl font-bold py-10">Related products</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
                {/* card one */}
                <div className="card rounded-none">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body justify-center items-center">
                        <h2 className="text-2xl font-bold">Electronics Device</h2>
                        <p className='text-xl font-bold text-blue-600'>$30.00</p>
                    </div>
                </div>
                {/* card two */}
                <div className="card rounded-none">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body justify-center items-center">
                        <h2 className="text-2xl font-bold">Electronics Device</h2>
                        <p className='text-xl font-bold text-blue-600'>$30.00</p>
                    </div>
                </div>
                {/* card three */}
                <div className="card rounded-none">
                    <figure><img src={img1} alt="Shoes" /></figure>
                    <div className="card-body justify-center items-center">
                        <h2 className="text-2xl font-bold">Electronics Device</h2>
                        <p className='text-xl font-bold text-blue-600'>$30.00</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RelatedProduct;