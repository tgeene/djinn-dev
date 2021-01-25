<section>
	<p>In the field of web development there is a competition between different programming languages.
		The three biggest at the moment are arguably PHP, Python, and Javascript; with the latter to be discussed at another time.
		While PHP is used in over 75% of websites that utilize server side programing<sup>[1]</sup>, many developers hate it for one reason or another.
		PHP will never be able to compete with Python in terms of flexibility, with it's uses expanding beyond just the internet;
		but what it can do is evolve to become more like Python in its syntax and formatting, since Python was designed to be clean, easy to read, and self documenting.
	</p>
	<p>Lucky for developers like myself PHP8 was launched on 12/26/2020,
		and aside from some enterprise level speed upgrades there were some amazing quality of life changes introduced.
		The two I am most looking forward to are features I have been hoping would be introduced since I learned Python a few years ago.
		While these features are not essential, they make code cleaner and more intuitive.</p>
</section>

<section>
	<h2>Union Types</h2>
	<p>The first new feature I want going to talk about is <em>Union Types</em>;
		this is when you declare more than one type hint (when you designate either an expected variable or return type).
		Type hinting was added back in PHP7, but only allowed for a single type declaration.
		This meant that you would either have to declare only one type and potentially declare multiple methods for each type,
		or you just didn't used type hinting for that method.
		The beauty of PHP8 is that it allows you to set as many types as you need without accepting/returning type available in the language just
		by adding a single pipe "<code>|</code>" in between your type declarations.
	</p>
	<h3>Union Types Example</h3>
	<p>Looking below we can see how these 2 different languages acheive the same effect.
		While Python has had this feature much longer than PHP it requires using a library (possibly making loading faster, by only loading what is nessicary),
		and I personally feel that PHPs version of a
		<em>Union Type</em> is much cleaner and easier to use.</p>
	<p><strong>Python</strong></p>
	<pre>from typing import Union

class Number:
    _number: Union[int, float]

    @number.setter
    def number(self, number: Union[int, float]) -> None:
        self._number = number

    @property
    def number(self) -> Union[int, float]:
        return self._number</pre>
	<p><strong>PHP</strong></p>
	<pre>class Number {
    private int|float $number;

    public function setNumber(int|float $number): void {
        $this->number = $number;
    }

    public function getNumber(): int|float {
        return $this->number;
    }
}</pre>
</section>

<section>
	<h2>Named Arguments</h2>
	<p>The second feature I want to talk about is
		<em>Named Arguments</em>, and it is honestly the single greatest thing ever added to PHP (in my personal opinion).
		What this feature allows you to do is pass variables into a method by reference rather than by the order it is declared in the function.
		This means that if you need to only pass in the last variable of a given method and use the defaults on everything else you only have to declare that last variable
		instead of listing every default value like we use to do before. Whats great about this feature is it opens up the option of not worrying about variable order,
		and the lovely people who make PHP have even added this functionality to all the base methods and not just custom ones.
	</p>
	<h3>Named Argument Example 1</h3>
	<p>When declaring arguments in Python you use the equals operator "<code>=</code>", but when declaring them in PHP you will use the colon operator "<code>:</code>".
	</p>
	<p><strong>Python</strong></p>
	<pre>from typing import Union

def foo(a: str, b: str, c: Union[str, None], d: Union[str, None]):
    # method code here

foo(b='b value', d='d value', a='a value')</pre>
	<p><strong>PHP</strong></p>
	<pre>function foo(string $a, string $b, ?string $c = null, ?string $d = null)
{
    /* method code here */
}

foo(b: 'b value', d: 'd value', a: 'a value');</pre>
	<p>If you noticed the
		<code>?</code> before the type declaration and are wondering what on earth I am doing, it's something called a
		<em>nullable</em>. This is used as a simplified way of declaring var will either be a certain type or will be null, and could be classified as a
		<em>Union Type</em>.
	<h3>Named Argument Example 2</h3>
	<p>Another nice thing they added with this is a feature know as argument unpacking. By adding an unpacking operator ("<code>**</code>" for Python,
		"<code>...</code>" for PHP) before an array (list in Python) it will assign the keys of the array to be the names of the arguments and pass in the corresponding values.
	</p>
	<p><strong>Python</strong></p>
	<pre>from typing import Union

def foo(a: str, b: str, c: Union[str, None], d: Union[str, None]):
    # method code here

foo_vars = { b: 'b value', d: 'd value', a: 'a value' }
foo(**foo_vars)</pre>
	<p><strong>PHP</strong></p>
	<pre>function foo(string $a, string $b, ?string $c = null, ?string $d = null)
{
    /* method code here */
}

$foo_vars = [b => 'b value', d => 'd value', a => 'a value'];
foo(...$foo_vars);</pre>
</section>

<section>
	<h2>Conclusion</h2>
	<p>There are some who would argue that PHP's long life on top is coming to an end; that by the end of the decade there will be a new language on top.
		PHP has held strong for a long time, but in order to stay on top it has to grown and adapt.
		I feel that with these additions and a few others not talked about that PHP might stand a chance to stay on top,
		but without languages to challenge it every once in a while it will have no reason to grow.</p>
</section>

<footer>
	<h4>Article Citations</h4>
	<ol>
		<li>
			<a href='https://kinsta.com/blog/is-php-dead/' rel='nofollow' target='_blank'>Is PHP Dead? No! At Least Not According to PHP Usage Statistics</a>
		</li>
	</ol>
</footer>