function circularTraversal(arr) {
    const n = arr.length;
    let res = [];

    for (let i = n - 1; i >= 0; i--) {
        res.push(arr[i][0]);
    }

    for (let j = 1; j < n; j++) {
        res.push(arr[0][j]);
    }

    for (let i = 1; i < n; i++) {
        res.push(arr[i][n - 1]);
    }

    for (let j = n - 2; j >= 1; j--) {
        res.push(arr[n - 1][j]);
    }

    console.log(res.join(" "));
}

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

circularTraversal(arr);
