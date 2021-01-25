/**
 * Object.prototype.forEach() polyfill
 * https://gomakethings.com/looping-through-objects-with-es6/
 * @author Chris Ferdinandi
 * @license MIT
 */
if(!Object.prototype.forEach)
{
	Object.defineProperty(Object.prototype, 'forEach', {
		value: function(callback, thisArg) {
			if(this == null)
			{
				throw new TypeError('Not an object');
			}
			thisArg = thisArg || window;
			for(let key in this)
			{
				if(this.hasOwnProperty(key))
				{
					callback.call(thisArg, this[key], key, this);
				}
			}
		}
	});
}

/**
 * Foreach loop that works with all browsers
 * @param array
 * @param callback
 * @param scope
 */
const forEach = function (array, callback, scope) {
	for (let i = 0; i < array.length; i++) {
		callback.call(scope, i, array[i]); // passes back stuff we need
	}
};

/**
 * Conversion of PHP's ucfirst to JS as Prototype
 * @returns {string}
 */
if(!String.prototype.capitalize)
{
	String.prototype.capitalize = function() {
		return this.charAt(0).toUpperCase() + this.slice(1)
	}
}

/**
 * Conversion of PHP's substr_replace to JS
 *
 * @param str
 * @param replace
 * @param start
 * @param length
 * @returns {string}
 */
function substr_replace(str, replace, start, length) {
	if (start < 0)
	{
		// start position in str
		start = start + str.length
	}

	length = length !== undefined ? length : str.length
	if (length < 0)
	{
		length = length + str.length - start
	}

	return [
		str.slice(0, start),
		replace.substr(0, length),
		replace.slice(length),
		str.slice(start + length)
	].join('')
}

// Update Email To Links
const userFirst = 'trevor',
	  userLast = 'geene',
	  host = 'gmail',
	  ext = 'com';
const emailLinks = document.querySelectorAll('a.email');
forEach(emailLinks, function (index, element) {
	element.text = userFirst + '.' + userLast + '@' + host + '.' + ext;
	element.href = 'mailto:' + element.text;
});

// Update Phone Tel Links
const areaCode = '702',
	  firstThree = '485',
	  lastFour = '7566';
const phoneLinks = document.querySelectorAll('a.phone');
forEach(phoneLinks, function (index, element) {
	element.text = areaCode + '.' + firstThree + '.' + lastFour;
	element.href = 'tel:+1' + areaCode + firstThree + lastFour;
});

// Handle Mobile Menu
const toggleActive = () => {
	if(window.innerWidth <= 530)
	{
		document.getElementById('main-nav').classList.toggle('active');
	}
};