
const Header = ({header, subHeader}) => {
    return (
        <div className="max-w-lg mx-auto text-center">
            <p className="text-blue-800">{subHeader}</p>
            <h2 className="sm:text-4xl lg:font-bold text-3xl font-semibold leading-normal py-5">{header}</h2>
            <progress className="progress progress-primary w-32"></progress>
        </div>
    );
};

export default Header;