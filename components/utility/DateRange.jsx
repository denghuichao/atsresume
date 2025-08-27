const DateRange = ({ startYear, endYear, id }) => {
    if (!startYear) {
        return <p id={id} className="sub-content"></p>;
    }

    const start = new Date(startYear);
    const end = new Date(endYear);
    
    // Format date as YYYY/MM
    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        return `${year}/${month}`;
    };
    
    return (
        <p id={id} className="sub-content">
            {formatDate(start)} - {end != "Invalid Date" ? formatDate(end) : 'Present'}
        </p>
    );
};

export default DateRange;
