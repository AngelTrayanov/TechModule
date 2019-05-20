function sortByTwo(arr) {
    input = arr.sort(compareLength);

    function compareLength(a, b) {
        if (a.length < b.length) {
            return a.length - b.length;
        } else if (a.length === b.length) {
            return a > b; // return a.localeCompare(b);  
        } else if (a.length > b.length) {
            return a.length - b.length;
        }
    }
    arr.forEach(element => console.log(element));
}
//sortByTwo(["Isacc", "Theodor", "Jack", "Harrison", "George"]);
sortByTwo(['rota', "beta", "alpha","gamma"]);
//arr1.sort((a,b)=>a.localCompare(b)); for string comparison
//input = arr.sort((a,b)=>{return a.length - b.length || a.localCompare(b)});