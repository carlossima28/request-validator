Msg = function(languague){
    return require('./' + languague + '.json')
}

module.exports = Msg;