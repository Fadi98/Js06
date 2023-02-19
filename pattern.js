function pattern() {
    let a = "";
    for (let i = 0; i < 5; i++) {
        for (let j = 0; j <= i; j++) {
            a += "* ";
        }
        a += "\n";
    }
    console.log(a);
}
pattern()
module.exports = pattern;
