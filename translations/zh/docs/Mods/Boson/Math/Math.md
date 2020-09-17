# `数学数`

`数组` 是一组基本数学函数的容器类。 欲了解更多信息，请参阅 [概念](/Mods/Boson/Math/Concept/) 页面。

## 班级详细信息
作为ZenScriptX项目的一部分，该类的完全合格名称是 `zenscriptx.math.Math`。

## 创建一个新实例
由于这个类只是数学函数的持有者，不可能创建一个新的实例。 相反，应该在课堂上引用所有 种方法。

## 方法
为了在空间上保存，方法将以单个代码片段显示， 按照他们 执行的操作类型分组，并附上上面的评论，其中概述了方法应该做些什么以及在使用方法时应该考虑到的任何其他条件 。 此外，如果多个方法关闭了彼此的 过载量，可能会将多个方法组合在一起(1)。 ……他们做了同样的事情，但他们有不同的论据或返回类型）。

```zenscript
# 这个方法做了一些
函数方法(参数为双倍，参数2 为布尔)，为双倍；
函数方法(参数为浮点型，参数2 为布尔) 为浮点；

# 此方法做了其他事情，可能返回 null
函数方法2() 作为布尔值？
```

### 数学常数
这些方法使人们能够获得必要时可用于其他操作的显著数学常数。 根据计算机内的使用情况，精度是尽可能高的精度。 。 最准确的数字代表了一个 `双倍`)。

```zenscript
# 获取PI的值，这是圆圈的圈子与其直径之间的比率，约为3。 4159
函数pi() 加倍；

# 获取E的值，这是自然对数的基础，大约2。 1828
函数e() 加倍；
```

### 三角函数
三角函数是与角度工作的函数，并将它们与 右角三角形两个侧长度的比率相连接， 及其所有反面功能。

```zenscript
# 计算所传递的角度正弦，其最小值为RADIANS
函数的负数(x 双倍)；
function sin(x as float) as float;

# 计算传递的角度正弦，其最小值在DEGREES中
函数sind(x 双倍) 为双倍；
function sind(x as float) as float;

# 计算通道上的角的宇宙，最大角位于RADIANS
函数成本(x 双倍) 为双倍；
function cos(x as float) as float;

# 计算通过的角度的宇宙，最大角位于DEGREES中
函数cod(x 双倍) 为双倍；
function codd(x as float) as float;

# 计算传入的角度的切分，最大角位于RADIANS
函数罐(x 双倍)；
作为浮点的函数tan(x as float)；

# 计算转过的角度的切分，在这个角中，最小值为DEGREES
函数tand(x 双倍)为双倍；
function tand(x as float) as float;

# 计算给定值的弧正弦值，返回-PI/2 和 PI/2 弧度值
函数asin(x 双倍)；
浮动asin(x as float)；

# 计算给定值的弧度，返回-90度和90度之间的数值
函数asind(x 双倍) 为双倍；
function asind(x as float) as float;

# 计算给定值的弧余量，返回值介于 0 到 PI 弧度之间的值
函数acos(fx as double ) 为加倍；
function acos(x as float) as float;

# 计算给定数值的弧余值，返回值介于0到180度之间
函数acosd(x 双倍)为双倍；
function asind(x as float) as float;

# 计算给定值的弧切角值，返回-PI/2 和 PI/2 弧度之间的值
函数阿坦(x 双倍)；
function atan(x as float) as float;

# 计算给定值的弧切角，返回一个值介于-90度和90度之间
函数atand(x 双倍)为双倍；
function atand(x as float) as float;

# 计算与矩形坐标相对应的极坐标'(r, th)'th'(x) y)”，通过计算“y/x”值的弧切角。 返回一个 -pi 和 pi 弧度之间的值
函数atan2(y为双倍，x为双倍)；
function atan2(y as float, x as float) as float;
```

### 双曲函数
双曲函数是为双曲线而不是一个圆圈而定义的三角函数的类比。

```zenscript
# 计算给定值
sinh(x 双倍)双曲正弦；
sinh(x as float)为浮点数；

# 计算给定值的双曲余体
函数cosh(x as 加倍) 为双倍；
function cosh(fx as float) as float;

# 计算给定值的双曲正切
function tanh(fx as 加倍) 加倍;
function tanh(fas float) as float;

# 计算给定值的反双曲正弦值
浮动继承(fx as 加倍)；
浮动继承(fx as float);

# 计算给定值的反双曲余弦值，返回ALWAYS为正结果
函数acosh(x 双倍)加倍；
function acosh(x as float) as float;

# 计算给定值反双曲正切
function atanh(x as 加倍) as 加倍;
function atanh(x as float) as float;
```

### 右角三角函数
这些是一些可以在右角三角形上计算的额外函数， 除了三角形 函数之外，但不在三角形的角进行操作。

```zenscript
# 用Pythagore的理论计算三角形的假设长度。 确保不会在计算
函数热点期间发生溢出或溢出事件(x 双倍，y 双倍)；
函数特色(fas float, y as float) as float;
```

### 权力和根基
这些函数能够比 乘法或随后减法更快、更有效地计算权力和根基。

```zenscript
# 计算给定值
的 sqrt(x 双倍)正方根;
sqrt(x as float) 为浮点数;

# 计算给定值的负方根值
nsqrt(x 双倍) 为双倍；
function nsqrt(x as float) as float;

# Squares 给定的值
sq(x as 加倍) 为双倍；
function sq(x as float) as float;

# 提升指数的给定基本值
函数粉(基本值双倍，除数双倍)；
函数粉末(双倍，等于原样)为双倍；
函数粉末(等于浮点型，等于浮点数)；
函数粉末(基本为浮点型，例如：)为浮点型；
```

### Exponential Functions
指数函数是一个函数形式为 `y = a * b^x`。

```zenscript
# 计算器的数字(e)被提升到x
函数的功率(x 双倍)；
函数扩展(x 为浮点)；

# 计算函数 'exp(x) - 1' 更准确的数字接近于0
函数扩展(x 双倍)；
function expm1(x as float) as float;
```

### 对数函数
对数函数（通常称为对数）是指数函数的反函数。 与其他函数相差的 ，对数是根据基地定义的。 它代表必须向由此产生的能量增加 的数字来获得对数本身的论点。

```zenscript
# 将 x 的对数计算到给定的基础
函数登录数(x 双倍，基数为双倍)；
function logn(x as float, base as float) as float;

# 计算给定值的自然对数。 .x到底（数字）的对数
函数ln（x双倍）为加倍；
function ln(x as float) as float;

# 计算给定值的共同对数，即： x 到基础 10
函数log10(x 双倍)的对数值加倍；
function log10(x as float) as float；

# 计算给定值的二进制对数，即： x到基2的对数
函数log2(x 双倍)为双倍；
函数log2(x 为浮点数)；

# 计算 'ln(1 + x)', 更准确的数字更接近0
函数ln1p(x 双倍) 为双倍；
function ln1p(x as float) as float;
```

### 四舍五入函数
四舍五入函数是根据一套规则将实际数字映射到特定整数的函数。 取决于函数。

```zenscript
# 将给定的值环绕为正无限， 返回最小的实际数字，大于或等于x，是一个数学整数上限
(x 双倍)，为双倍；
函数上限（x 为浮点数）；

# 将给定的值环绕为正无限， 返回大于或等于 x
函数的最小整数(x 双倍)
如下所示的功能cerili(fo float)

# 将给定的值环绕为正无限，返回大于或等于x的最小整数。 扩大到代表最多的整数
函数ceill(x 双倍) 的长度；
函数浮点数（x 为浮点数）；

# 将给定的值环绕为负无限， 返回最大的实际数字，小于或等于 x 且是一个数学整数
函数底部(f×双倍) 为双倍；
function floor(x as float) as float;

# 将给定的值环绕为负无限， 返回小于或等于 x
函数浮点数的最大整数(x 双倍)
function floori(x as float) as int;

# 将给定值环绕为负无限，返回小于或等于x的最大整数。 扩展到代表性最大的整数
函数底线(fx双倍) 的时间长度；
function floorl(x as float) as long;

# 将给定的值环绕为零，有效地截断分数并返回一个数学整数
函数截断(x 双倍)；
作为浮点的函数截断(x as float)；

# 对最近数学整数的给定数值，偏向于偶数
函数四舍五入(x 双倍)；
function round(x as float) as float;

# 将给定的值环绕到最近的整数，并且偏向于偶数
函数roundi(x 双倍)
function roundi(x as float) as int;

# 将给定的值环绕到最近的整数，并且偏向于偶数值。 并将结果扩大到代表人数最多的整个数字
函数圆形(fx as 加倍)的长度；
函数圆形(x为浮点数)；
```

### 基于标志的函数
这些职能大多或完全是在争论的标志下运作。

```zenscript
# 返回给定值
函数潜逃(x 双倍)的绝对值双倍；
function abus(fx as float) as float;
function abus(fx as int) as int;
function abus(fx as long) as long;

# 返回给定值的符号作为数字: -1 表示负数。 0 表示零, 1 表示正数
函数符号(x双倍) 为双倍；
以浮点符号(x as float)；
函数符号(x as int)；
函数符号(x as long)；
```

### 比较函数
这些功能比较了各种论据，只根据一套规则返回其中的一个。

```zenscript
# 返回给定的两个值
最小函数(双倍, b 双倍) 中的小;
函数最小(浮点型, b as float) 为浮点;
函数最小(作为整数, b作为原文)；
函数最小(作为长度, b作为长度)；

# 返回给定的两个值中较大的值
函数最大值(双倍，b 双倍)；
function max(as float, b as float) as float;
function max(as int, b as int) as int;
函数最大长度(最大长度，b等长)；

# 两个边界之间给定的 x 值，如果x小于分钟，则实际返回分钟数， x大于最大值的最大值，x否则x
函数夹具(x为双倍，最小为双倍，最大为双倍)；
function clamp(x as float, min as float, max as float) as float;
函数夹击(x为整数，最小为整数，最大为整数)；
函数夹具(x长短，最小长度，最大长度) 为长度；
```

### 剩余函数
这些函数根据一套规则计算两个参数之间的其余部分。

```zenscript
# 根据IEEE 754 标准计算值和div 之间剩余的分量：'r = value - (round(value / div) * div)'
函数还原(值加倍, b. 平均输出功率超过1瓦；
函数重置(作为浮点值, div as float) 为浮点;
```

