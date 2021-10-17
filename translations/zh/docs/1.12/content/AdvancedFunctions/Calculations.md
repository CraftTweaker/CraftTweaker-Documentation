# 运算

有时候输入的数字并不能直接用， Sometimes you need some calculation.  
Remember that you can use more than two numbers at one, `1+1+1+1` would work fine as well.

## 一些忠告

When unexpected results happen in a calculation, it is very well possible that you used two different types.  
For example `13 % 6.5` returns 1, even though the correct result is 0. 为什么？ ZenScript 总是计算两个相同类型的变量。 在上述例子中，它就会将第二个数据转换成匹配第一个数据的类型。 在上述例子中，计算就会把运算处理成 `13 % 6`，第二个数字（双精度型）就会被转换为第一个数字的类型（整型）。

要始终注意两个数据的变量类型，在不确定的情况下最好使用 print 函数来将结果打印至日志中来检查结果是否正确。

## 算术运算符

我十分确定你一定熟知这些：

| 运算符 | 自运算  | 功能   | 例子     |
| --- | ---- | ---- | ------ |
| `+` | `+=` | 添加配方 | 1+2    |
| `-` | `-=` | 减    | 2-1    |
| `*` | `*=` | 乘    | 1*1    |
| `/` | `/=` | 除    | 2/2    |
| `%` | `%=` | 求模   | 13 % 6 |

## 连接

将内容放在原内容后面

```zenscript
//打印 "你好 世界"
print("你好" ~ " " ~ "世界");
```

## 运算结果

数学运算基本上会直接返回结果。 所以能用它干什么呢？

### 给变量赋值

有两种方法能够给变量赋值：

```zenscript
var test = 0;

//选择1:
//将 3 （1+2的运算结果）赋给变量 text
test = 1+2;

//选择2:
//将 5 （3+2 的运算结果）赋给变量 text
test = test + 2;

//Option 3:
//将 2 （5-3 的运算结果）赋给变量 text
test -= 3;
```

Option 1 and 2 assign the return variable using the `=` token.  
This is probably the easiest way for beginners and the only way if you want to assign a variable not used in the calculation.

Option 3 assigns the variable before the `-=` with the result of a normal subtraction.  
All Operators on on this page have their respective assign tokens, check the table above.

### 其他使用运算结果的地方

你可以将运算结果用在在函数中，或者作为条件语句的判定：

```zenscript
//打印 4
print(3+1);

//移除数组[4]中物品的合成配方
recipes.remove(array[3+1]);

//
if(3+1 == 2*2) {print("使用了计算！")}
```
