let a = {
    b:2,
    c:3,
    d : {
        aa:22,
        bb:33,
        cc: {
            aaa:333
        }
    }
};

function deepCopy (dest) {
    let reserve = {};
    function unpack (what, where) {
        for (let eachKey in what) {
            console.log(what);
            console.log(where);
            console.log(eachKey);
            console.log(what[eachKey]);
            if (what.hasOwnProperty(eachKey)){
                if (typeof what[eachKey] === 'object'){
                    where[eachKey] = {};
                    console.log('есть гибридная жопа', eachKey);
                    unpack(what[eachKey], where[eachKey]);
                }else{
                    console.log(eachKey);
                    console.log('what = ',what);
                    console.log('where =',where);
                    where[eachKey] = what[eachKey];
                }
            }
        }
        return (what,where)
    } 
    unpack(dest, reserve);
return reserve
};

let b = deepCopy(a);
console.log(a === b);           //false
console.log(a.d === b.d);       //false
console.log(a.d.cc === b.d.cc); //false