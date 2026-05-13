interface DataType {
    closeMenu?: () => void;
}

const ScrollContact: React.FC<DataType> = () => {
    return (
        <>
            <li className='button'>
                <a href="https://calendly.com/tahirmurtaza5152/30min" target="_blank" rel="noopener noreferrer" style={{ cursor: 'pointer' }}>{`Let's Talk`} <i className="fas fa-comment-alt" /></a>
            </li>
        </>
    );
};

export default ScrollContact;