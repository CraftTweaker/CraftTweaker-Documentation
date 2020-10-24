# `Math`

`Math` is the container class for a set of basic mathematical functions. Refer to the [Concept](/Mods/Boson/Math/Concept/) page for more information.

## Class Details
Being part of the ZenScriptX Project, the fully qualified name for the class is `zenscriptx.math.Math`.

## Creating a New Instance
Since this class is just a holder of mathematical functions, it is impossible to create a new instance. Rather, all methods should be invoked on the class itself.

## Methods
To save up on space, the methods will be presented in a single snippet, grouped according to the kind of operation they perform with a comment above outlining what the method is supposed to do and any other conditions that should be kept into consideration when using the method. Moreover, multiple methods may be grouped together if they're close overloads of one another (i.e. they do the same thing, but they have different argument or return types).

```zenscript
# this method does something
function method(argument as double, argument2 as bool) as double;
function method(argument as float, argument2 as bool) as float;

# this method does something else, and may return null
function method2() as bool?;
```

### Mathematical Constants
These methods provide access to notable mathematical constants that may be used across other operations, if needed. Their precision is the biggest possible precision according to the used representation inside computers (i.e. the most accurate number representable with a `double`).

```zenscript
# Obtains the value of PI, which is the ratio of a circumpherence of a circle to its diameter, approximately 3.14159
function pi() as double;

# Obtains the value of E, that is the base of the natural logarithm, approximately 2.71828
function e() as double;
```

### Trigonometric Functions
Trigonometric functions are functions that work with angles and relate them to the ratio of two side lenghts of a right-angled triangle, along with all their inverse functions.

```zenscript
# Computes the sine of the angle passed in, which MUST be in RADIANS
function sin(x as double) as double;
function sin(x as float) as float;

# Computes the sine of the angle passed in, which MUST be in DEGREES
function sind(x as double) as double;
function sind(x as float) as float;

# Computes the cosine of the angle passed in, which MUST be in RADIANS
function cos(x as double) as double;
function cos(x as float) as float;

# Computes the cosine of the angle passed in, which MUST be in DEGREES
function cosd(x as double) as double;
function cosd(x as float) as float;

# Computes the tangent of the angle passed in, which MUST be in RADIANS
function tan(x as double) as double;
function tan(x as float) as float;

# Computes the tangent of the angle passed in, which MUST be in DEGREES
function tand(x as double) as double;
function tand(x as float) as float;

# Computes the arc sine of the given value, returning a value between -PI/2 and PI/2 radians
function asin(x as double) as double;
function asin(x as float) as float;

# Computes the arc sine of the given value, returning a value between -90 and 90 degrees
function asind(x as double) as double;
function asind(x as float) as float;

# Computes the arc cosine of the given value, returning a value between 0 and PI radians
function acos(x as double) as double;
function acos(x as float) as float;

# Computes the arc cosine of the given value, returning a value between 0 and 180 degrees
function acosd(x as double) as double;
function asind(x as float) as float;

# Computes the arc tangent of the given value, returning a value between -PI/2 and PI/2 radians
function atan(x as double) as double;
function atan(x as float) as float;

# Computes the arc tangent of the given value, returning a value between -90 and 90 degrees
function atand(x as double) as double;
function atand(x as float) as float;

# Computes 'th' of the polar coordinates '(r, th)' that correspond to the rectangular coordinates '(x, y)' via computing the arc tangent of the value 'y/x', returning a value between -pi and pi radians
function atan2(y as double, x as double) as double;
function atan2(y as float, x as float) as float;
```

### Hyperbolic Functions
Hyperbolic functions are analogs of the trigonometric functions, defined for a hyperbola rather than on a circle.

```zenscript
# Computes the hyperbolic sine of the given value
function sinh(x as double) as double;
function sinh(x as float) as float;

# Computes the hyperbolic cosine of the given value
function cosh(x as double) as double;
function cosh(x as float) as float;

# Computes the hyperbolic tangent of the given value
function tanh(x as double) as double;
function tanh(x as float) as float;

# Computes the inverse hyperbolic sine of the given value
function asinh(x as double) as double;
function asinh(x as float) as float;

# Computse the inverse hyperbolic cosine of the given value, returning ALWAYS a positive result
function acosh(x as double) as double;
function acosh(x as float) as float;

# Computes the inverse hyperbolic tangent of the given value
function atanh(x as double) as double;
function atanh(x as float) as float;
```

### Right-Angled Triangle Functions
These are some additional functions that can be computed on a right-angled triangle, in addition to the trigonometric functions, but that do not operate on the angles of the triangle.

```zenscript
# Computes the length of the hypothenuse of the triangle with the Pythagorean's theorem, making sure no overflow or underflow happens during the computation
function hypot(x as double, y as double) as double;
function hypot(x as float, y as float) as float;
```

### Powers and Roots
These functions allow to compute powers and roots in a quicker and more efficient way than the standard method of multiplications or subsequent subtraction.

```zenscript
# Computes the positive square root of the given value
function sqrt(x as double) as double;
function sqrt(x as float) as float;

# Computes the negative square root of the given value
function nsqrt(x as double) as double;
function nsqrt(x as float) as float;

# Squares the given value
function sq(x as double) as double;
function sq(x as float) as float;

# Raises the given base value to the exponent exp
function pow(base as double, exp as double) as double;
function pow(base as double, exp as int) as double;
function pow(base as float, exp as float) as float;
function pow(base as float, exp as int) as float;
```

### Exponential Functions
An exponential function is a function that takes the form of `y = a * b^x`.

```zenscript
# Computes Euler's number (e) raised to the power of x
function exp(x as double) as double;
function exp(x as float) as float;

# Computes the function 'exp(x) - 1', with a better accuracy for numbers that are nearer to zero
function expm1(x as double) as double;
function expm1(x as float) as float;
```

### Logarithimic Functions
A logarithmic function, commonly known as logarithm, is the inverse function of the exponential function. Differently from other functions, a logarithm is defined according to a base, which represents the number which has to be raised to the resulting power to obtain the argument of the logarithm itself.

```zenscript
# Computes the logarithm of x to the given base
function logn(x as double, base as double) as double;
function logn(x as float, base as float) as float;

# Computes the natural logarithm of the given value, i.e. the logarithm of x to the base e (Euler's number)
function ln(x as double) as double;
function ln(x as float) as float;

# Computes the common logarithm of the given value, i.e. the logarithm of x to the base 10
function log10(x as double) as double;
function log10(x as float) as float;

# Computes the binary logarithm of the given value, i.e. the logarithm of x to the base 2
function log2(x as double) as double;
function log2(x as float) as float;

# Computes 'ln(1 + x)', with a better accuracy for numbers that are nearer to zero
function ln1p(x as double) as double;
function ln1p(x as float) as float;
```

### Rounding functions
A rounding function is a function that maps a real number to a specific integer number according to a set of rules, depending to the function.

```zenscript
# Rounds the given value towards positive infinity, returning the smallest real number that is greater than or equal to x and is a mathematical integer
function ceil(x as double) as double;
function ceil(x as float) as float;

# Rounds the given value towards positive infinity, returning the smallest integer that is greater than or equal to x
function ceili(x as double) as int;
function ceili(x as float) as int;

# Rounds the given value towards positive infinity, returning the smallest integer that is greater than or equal to x, expanded to the biggest representable whole number
function ceill(x as double) as long;
function ceill(x as float) as long;

# Rounds the given value towards negative infinity, returning the biggest real number that is less than or equal to x and is a mathematical integer
function floor(x as double) as double;
function floor(x as float) as float;

# Rounds the given value towards negative infinity, returning the biggest integer that is less than or equal to x
function floori(x as double) as int;
function floori(x as float) as int;

# Rounds the given value towards negative infinity, returning the biggest integer that is less than or equal to x, expanded to the biggest representable whole number
function floorl(x as double) as long;
function floorl(x as float) as long;

# Rounds the given value towards zero, effectively truncating the fractional part and returning a mathematical integer
function truncate(x as double) as double;
function truncate(x as float) as float;

# Rounds the given value towards the closest mathematical integer, with a bias towards even numbers
function round(x as double) as double;
function round(x as float) as float;

# Rounds the given value towards the closest integer, with a bias towards even numbers
function roundi(x as double) as int;
function roundi(x as float) as int;

# Rounds the given value towards the closest integer, with a bias towards even numbers, and expanding the result to the biggest representable whole number
function roundl(x as double) as long;
function roundl(x as float) as long;
```

### Sign-based Functions
These functions operate mostly or solely on the sign of the argument.

```zenscript
# Returns the absolute value of the given value
function abs(x as double) as double;
function abs(x as float) as float;
function abs(x as int) as int;
function abs(x as long) as long;

# Returns the sign of the given value as a number: -1 for negative numbers, 0 for zero, 1 for positive numbers
function sign(x as double) as double;
function sign(x as float) as float;
function sign(x as int) as int;
function sign(x as long) as long;
```

### Comparison Functions
These functions compare the various arguments and return only one of them according to a certain set of rules.

```zenscript
# Returns the smaller of the two given values
function min(a as double, b as double) as double;
function min(a as float, b as float) as float;
function min(a as int, b as int) as int;
function min(a as long, b as long) as long;

# Returns the bigger of the two given values
function max(a as double, b as double) as double;
function max(a as float, b as float) as float;
function max(a as int, b as int) as int;
function max(a as long, b as long) as long;

# Clamps the given x value between two bounds, effectively returning min if x is smaller than min, max if x is bigger than max, x otherwise
function clamp(x as double, min as double, max as double) as double;
function clamp(x as float, min as float, max as float) as float;
function clamp(x as int, min as int, max as int) as int;
function clamp(x as long, min as long, max as long) as long;
```

### Remainder Functions
These functions compute the remainder between two arguments according to a set of rules.

```zenscript
# Computes the remainder of the division between value and div according to the IEEE 754 standard: 'r = value - (round(value / div) * div)'
function rem(value as double, div as double) as double;
function rem(value as float, div as float) as float;
```

