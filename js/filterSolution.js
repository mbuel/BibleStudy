console.log('test');

function FilterAndSort(a, b) {
    console.log(a,b);
    return a.score > b.score ? 1 : -1;

    if (a.score > b.score) {
        if (a.date > b.date) {
            return 1;
        } else {
            return -1;
        }
    } else {
        return -1;
    }
}

let arr = [
    {name: "Player A", score: 6, date: 5-20-2021},
    {name: "Player B", score: 2, date: 5-20-2020},
    {name: "Player C", score: 3, date: 5-20-2019}
    ]
    arr = arr.sort(FilterAndSort)
    arr.filter((a, b) => (a.submitted > b.submitted) ? 1 : -1)

console.log(arr);