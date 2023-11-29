// 0-promise.js

function getResponseFromAPI() {
    return new Promise((resolve, reject) => {
        // Your API call or asynchronous operation goes here
        // For example, a simple setTimeout to simulate an asynchronous operation
        setTimeout(() => {
            // Assuming some data is retrieved successfully
            const data = { message: "API response data" };

            // Resolve the promise with the data
            resolve(data);
        }, 1000); // Simulating a delay of 1000 milliseconds
    });
}

export default getResponseFromAPI;
