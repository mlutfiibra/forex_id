module.exports = (number) => {
    let rupiah = '';		
	let angkarev = number.toString().split('').reverse().join('');
	for(let i = 0; i < angkarev.length; i++) if(i%3 == 0) rupiah += angkarev.substr(i,3)+'.';
    
    return 'Rp.'+rupiah.split('',rupiah.length-1).reverse().join('');
}