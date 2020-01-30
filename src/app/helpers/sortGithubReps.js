module.exports = array => array.sort( (a,b) => {
    if (a.size < b.size) return 1;
    if (a.size > b.size) return -1;
    return 0;
})