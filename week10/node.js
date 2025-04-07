function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched successfully!");
    }, 2000);
}

fetchData((message) => {
    console.log(message);
});
