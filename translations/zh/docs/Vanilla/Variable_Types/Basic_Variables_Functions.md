# 基本变量功能

ZenScript 最基本的变量类型是字符串、整数和布尔值。

## 大多数单个类型

`true == true` 您可以检查两个值是否相同。  
`"Hello" != "World"` 您也可以检查两个值是否不平等。

## 字符串

字符串提供了一些功能

`"Hello".length` Returns the string's length as int.  
`"Hello"[1]` Returns the character at the string's given index as another string.  
`"Hello" in "Hell"` checks if the string before `in` contains the string after it as boolean. You can replace the `in` with `has` if you like that better.  
`"Hel" ~ "lo " + "World"` You also can add/concatenate strings. `string += "assignAdd"` 你也可以使用assignAdd/assignContatenate 操作员。

除此之外， [Java Strings](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) 且不使用 `字符` 类型也适用于ZenScript 字符!  
这包括：

- 小写
- toUpperCase
- getBytes
- hashCode
- 实习生：
- isEmpty
- toCharray
- 修饰
- 拆分

## 整数

整数提供一些功能

`+-*/%` 基本的 mathematic 运算符(勾选 [变量类型](/Vanilla/Variable_Types/Variable_Types) 页面)。 您也可以使用操作员分配令牌  
`0 至 10` 返回一个整数范围，范围从 0 到 10 之间。  
`1~10` Concatenates the Integers (返回 "110").

## 布尔值

布尔值提供了一些功能

`true ~false` Concatenates the booleans (return "truefalse").  
`& | ^` Boolian 运营者(and/or /xor).

## 数组/数组列表

数组和数组列表提供共同函数

`数组[1]` 返回给定索引中的项目。  
`数组[1] = "Hello"` 设置给定索引中的项目。  
`数组长度` 返回数组长度