// complete the given function

function palindrome(str){
	if(str === str.split("").reverse()){
		return { message: true };
	}
	return { message: false };
}
module.exports = palindrome
