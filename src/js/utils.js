export const formatDate = (date) => {
    var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
    var newData = new Date(date);
    var day = newData.getDate();
    var monthIndex = newData.getMonth();
    var year = newData.getFullYear();

    return `${day} ${monthNames[monthIndex]} ${year}`;
}