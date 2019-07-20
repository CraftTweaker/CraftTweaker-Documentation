# 基本的な変数の関数

ZenScriptにおける最も基本的な型は文字列型、Integer型、そしてBoolean型です。

## Most single types

`true == true` 2つの値が同一かどうかを確認できます。  
`"Hello" != "World"`2つの値が同一でないかを確認できます。

## 文字列型

文字列型にはいくつかの機能があります。

`"Hello".length` 文字列の長さをint型で返します。  
`"Hello"[1]` 指定された位置の文字を返します。  
`"Hello" in "Hell"` `in`演算子の前の文字列が後ろの文字列を含むかどうかをBoolean型で返します。 `in`は`has`に、好みで置き換えることができます。  
`"Hel" ~ "lo " + "World"` 文字列を追加・連結することもできます。 `string += "assignAdd"` you can also use the assignAdd/assignConcatenate operators.

Aside from these, all methods that are available to [Java Strings](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html) and do not use the `char` type are also available to ZenScript strings!  
This includes:

- toLowerCase
- toUpperCase
- getBytes
- hashCode
- intern
- isEmpty
- toCharArray
- trim
- split

## Integers

Integers provide some functionality

`+-*/%` Basic mathematic operators (check the [variable Types](Variable_Types) page). You can also use the operatorAssign tokens  
`0 to 10` Returns an Integer Range ranging from 0 to 10.  
`1~10` Concatenates the Integers (returns "110").

## Booleans

Booleans provide some functionality

`true ~ false` Concatenates the booleans (returns "truefalse").  
`& | ^` Boolean operators (and/or/xor).

## Arrays/ArrayLists

Arrays and ArrayLists provide common functions

`array[1]` returns the item at the given index.  
`array[1] = "Hello"` Sets the item at the given index.  
`array.length` returns the arrays length