module.exports = (buy, sell) => {
    if(buy>sell) {
        return `color: #dc3545`
    }else if(buy<sell) {
        return `color: #28a745`
    }
}