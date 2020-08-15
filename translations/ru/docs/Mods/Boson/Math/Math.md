# `Математика`

`Математика` — это класс контейнера для набора основных математических функций. Обратитесь к странице [Концепция](/Mods/Boson/Math/Concept/) для получения дополнительной информации.

## Детали урока
Являясь частью проекта ZenScriptX, полное имя для класса `zenscriptx.math.Math`.

## Создание нового экземпляра
Поскольку этот класс является просто обладателем математических функций, создать новый экземпляр невозможно. Напротив, все методы должны быть вызваны самим классом.

## Методы
Для экономии места методы будут представлены в одном сниппете, сгруппированы в соответствии с теми операциями, которые они выполняют с комментарием выше и описанием, что должен делать метод, и любыми другими условиями, которые следует сохранить при использовании метода. Более того, несколько методов могут быть сгруппированы вместе, если они близки к перегрузкам друг друга (i. , они делают то же самое, но имеют разные аргументы или возвратные типы).

```zenscript
# этот метод делает что-то
метод функции(аргумент как двойный, argument2 как bool) двойным;
метод функции (аргумент как float, argument2 как bool) как float;

# этот метод выполняет что-то еще, и может возвращать null
функции method2() как bool?;
```

### Математические константы
Эти методы обеспечивают доступ к заметным математическим константам, которые при необходимости могут быть использованы в других операциях. Their precision is the biggest possible precision according to the used representation inside computers (i.e. the most accurate number representable with a `double`).

```zenscript
# Obtains the value of PI, which is the ratio of a circumpherence of a circle to its diameter, approximately 3.14159
function pi() as double;

# Obtains the value of E, that is the base of the natural logarithm, approximately 2.71828
function e() as double;
```

### Тригонометрические функции
Тригонометрические функции - это функции, которые работают с углами и связывают их с отношением двух сторон длины треугольника справа углом, вместе со всеми их обратными функциями.

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

### Гиперболические функции
Гиперболические функции - это аналоговые тригонометрические функции, определяемые скорее для гиперболы, чем по кругу.

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

### Функции треугольника правого угла
Это некоторые дополнительные функции, которые могут быть рассчитаны под правым углом треугольника, в дополнение к тригонометрическим функциям , но они не работают над углами треугольника.

```zenscript
# Рассчитывает длину гипотезы треугольника с помощью теоремы Pythagorean, убедитесь, что переполнение или переполнение не происходит во время вычисления
функции hypot(x как двойная, y как двойное) как двойное;
функция hypot(x как float, y как float) как плавущие;
```

### Силы и корни
Эти функции позволяют быстрее и эффективнее вычислять мощности и корни по сравнению со стандартным методом умножения или последующего вычитания.

```zenscript
# Вычисляет положительный квадратный корень из данного значения
функции sqrt(x как двойное) как двойное;
функция sqrt(x как плавущий) как плавущие;

# Рассчитывает отрицательный квадратный корень из заданного значения
функции nsqrt(x как double) как double;
функции nsqrt(x as float) в качестве плавающего процесса;

# квадратирует данное значение
функции sq(x как двойное);
функция sq(x как float) как float;

# Повышает данное базовое значение экспоненциальному exp
функциональной порошке (базисная порошка как двойная, exp как двойная) как двойная;
функциональная порошка (основа, как двойная, exp как int) в два раза;
функция (базовая как float, как float) как float;
функция порошка (основа с плавающей точкой, выражена как int) как плавная;
```

### Exponential Functions
Экспоненциальная функция — это функция, которая принимает форму `y = a * b^x`.

```zenscript
# Вычисляет число Эйлера ((e), увеличенное до мощности x
функции exp(x как удвоенное) в два раза;
функция exp(x as float) как плавущие;

# Вычисляет функцию 'exp(x) - 1', с лучшей точностью для чисел, которые близки к нулю
функции expm1(x как двойное), как двойное;
функция expm1(x как float) как float;
```

### Логарифмические функции
Логарифмическая функция, широко известная как логарифм, представляет собой обратную функцию экспоненциальной функции. Differently from other functions, a logarithm is defined according to a base, which represents the number which has to be raised to the resulting power to obtain the argument of the logarithm itself.

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

### Функции округления
Скругляющая функция - это функция, которая сопоставляет реальное число с определенным целым числом согласно набору правил, в зависимости от функции.

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

### Функции подписи
Эти функции функционируют в основном или только на знаке аргумента.

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

### Функции сравнения
Эти функции сравнивают различные аргументы и возвращают только один из них в соответствии с определенным набором правил.

```zenscript
# Возвращает меньшее из двух заданных значений функции min
(как двойное, b двойное) как двойное;
функция min(a as float, b as float) как float;
функция min(a as int, b as int) как int;
функция min(a как длинная, b как долгое);

# возвращает больше двух заданных значений
функции max(a as double, b as double) как double;
max(a as float, b as float) as float;
function max(a as int, b as int) as int;
max(a as long, b as long) длинно;

# Зажигает заданное значение x между двумя границами, эффективно возвращая минуту, если x меньше минуты, max if x is more than max, x otherwise
function clamp(x as double, min as double), as double;
функция clamp(x как float, мин. как float, макс. float) как float;
функция зажигание (x как int, мин. как int, max int) как int;
зажигание функции (x длинной, не менее длинной, максимум длинной)
```

### Остальные функции
Эти функции вычисляют остаток между двумя аргументами в соответствии с набором правил.

```zenscript
# Вычисляет оставшуюся часть деления между значением и div в соответствии со стандартом IEEE 754: 'r = значение - (округление / div) * div)'
функция rem(значение двойное, div как двойное) в два раза;
функция rem(значение как float, div as float) как float;
```

