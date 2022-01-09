# 基本的な変数の関数

ZenScriptにおける最も基本的な型は文字列型、Integer型、そしてBoolean型です。

## ほとんどの"単一の"型
`true == true` You can check if two values are the same.  
`"Hello" != "World"` You can also check if two values are unequal.

## 文字列型
文字列型には次の機能があります。

`"Hello".length` Returns the string's length as int.  
`"Hello"[1]` Returns the character at the string's given index as another string.  
`"Hello" in "Hell"` checks if the string before `in` contains the string after it as boolean. You can replace the `in` with `has` if you like that better.  
`"Hel" ~ "lo " + "World"` You also can add/concatenate strings. `string += "assignAdd"` 追加・連結代入演算子をを用いることもできます。

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

## 整数
整数には次の機能があります。

`+-*/%` Basic mathematic operators (check the [variable Types](/Vanilla/Variable_Types/Variable_Types) page). You can also use the operatorAssign tokens  
`0 to 10` Returns an Integer Range ranging from 0 to 10. `1~10` Concatenates the Integers (returns "110").


## Boolean型
Boolean型には次の機能があります。

`true ~ false` Concatenates the booleans (returns "truefalse").  
`& | ^` Boolean operators (and/or/xor).

## 配列/配列リスト
配列と配列リストは次の基本的な機能があります。

`array[1]` returns the item at the given index.  
`array[1] = "Hello"` Sets the item at the given index.  
`array.length` returns the arrays length
