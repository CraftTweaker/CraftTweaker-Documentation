# `Math`

`Math` は、基本的な数学関数のセットのためのコンテナクラスである。 詳細については、 [コンセプト](/Mods/Boson/Math/Concept/) のページを参照してください。

## クラスの詳細
ZenScriptX プロジェクトの一部であるため、クラスの完全修飾名は `zenscriptx.math.Math` です。

## 新しいインスタンスの作成
このクラスは単なる数学関数の保持者であるため、新しいインスタンスを作成することはできません。 むしろ、すべての メソッドはクラス自体で呼び出される必要があります。

## メソッド
スペースを節約するために、メソッドは1つのスニペットに表示されます。 操作の種類に応じてグループ化された は、メソッドが何をするべきか、および を使用する際に保持すべきその他の条件について、上記のコメントで実行します。 さらに、それらが互いの近くの過負荷なら 複数のメソッドをグループ化することができます (i. を選択します。これらは同じことを行いますが、異なる引数または戻り値の型があります。

```zenscript
# this method does something
function method(argument as double, argument2 as bool) as double;
function method(argument as float, argument2 as bool) as float;

# this method does something else, and may return null
function method2() as bool?;
```

### 数学的定数
これらのメソッドは、必要に応じて他の操作で使用できる顕著な数学定数へのアクセスを提供します。 それらの精度は、コンピュータ内で使用される表現に従って可能な限り最大の精度です (i. を選択します。 ダブル `で表現可能な最大`の正確な数字です。

```zenscript
# Obtains the value of PI, which is the ratio of a circumpherence of a circle to its diameter, approximately 3.14159
function pi() as double;

# Obtains the value of E, that is the base of the natural logarithm, approximately 2.71828
function e() as double;
```

### 三角関数
三角関数は、角度で動作し、 直角三角形の2つの辺の長さの比率に関連付ける関数です。 全ての逆関数を使っています

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

### 双曲線関数
双曲線関数は、円ではなく双曲線用に定義された三角関数のアナログです。

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

### 右角三角形関数
これらは直角三角形で計算できる追加関数です 三角関数 に加えて、三角形の角度では動作しません。

```zenscript
# Computes the length of the hypothenuse of the triangle with the Pythagorean's theorem, making sure no overflow or underflow happens during the computation
function hypot(x as double, y as double) as double;
function hypot(x as float, y as float) as float;
```

### 力とルート
これらの関数は、 乗算またはその後の減算の標準的な方法よりも速く、より効率的な方法で力と根を計算することができます。

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
指数関数は、 `y = a * b^x` の形式をとる関数です。

```zenscript
# Computes Euler's number (e) raised to the power of x
function exp(x as double) as double;
function exp(x as float) as float;

# Computes the function 'exp(x) - 1', with a better accuracy for numbers that are nearer to zero
function expm1(x as double) as double;
function expm1(x as float) as float;
```

### 対数関数
対数関数は、一般に対数として知られている、指数関数の逆関数です。 Differently from other functions, a logarithm is defined according to a base, which represents the number which has to be raised to the resulting power to obtain the argument of the logarithm itself.

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

### 丸める機能
丸める関数は、実数を特定の整数に、ルールのセットに従ってマップする関数です。 機能に応じて。

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

### 看板ベースの関数
これらの関数は、ほとんどの場合または単に引数のサイン上で動作します。

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

### 比較関数
これらの関数は、さまざまな引数を比較し、特定のルールに従ってそのうちの1つだけを返します。

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

### 残りの関数
これらの関数は、ルールのセットに従って、2つの引数間の残りの部分を計算します。

```zenscript
# Computes the remainder of the division between value and div according to the IEEE 754 standard: 'r = value - (round(value / div) * div)'
function rem(value as double, div as double) as double;
function rem(value as float, div as float) as float;
```

