function solve(names) {
    function sorting(a,b) {
        let result = a.length - b.length;
        if (result === 0) {
            result = a.localeCompare(b);
        }
        return result;
    }
    let result = names.filter((e,i,arr)=>i===arr.indexOf(e)).sort(sorting);
    console.log(result.join('\n'));
}
solve(["Ashton","Ashton","Ashton",
"Kutcher",
"Ariel",
"Lilly",
"Keyden",
"Aizen",
"Billy",
"Braston",'b','a']);