import async from 'async';

// asyn fn with callback
function asyncFunction1(callback) {
    setTimeout(() => {
        console.log('Async Function 1');
        callback(null, 'From AsyncFn 1');
    }, 1000);
}

// asyn fn with callback 2
function asyncFunction2(callback2) {
    setTimeout(() => {
        console.log('Async Function 2');
        callback2(null, 'From AsyncFn 2');
    }, 3000);
}

// Using async.waterfall to execute functions sequentially
async.waterfall([
    (callback) => asyncFunction1(callback),
    (resultFromAsyncFunction1, callback) => {
        asyncFunction2(callback);
    }
], (error, result) => {
    if (error) {
        console.error('Error:', error);
        return;
    }
    console.log('Results (waterfall):', result);
});

// Using async.parallel to execute functions in parallel
async.parallel([
    (callback) => asyncFunction1(callback),
    (callback) => asyncFunction2(callback)
], (error, results) => {
    if (error) {
        console.error('Error:', error);
        return;
    }
    console.log('Results (parallel):', results);
});
