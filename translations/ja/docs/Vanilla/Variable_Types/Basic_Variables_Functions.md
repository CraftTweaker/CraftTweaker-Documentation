# 基本的な変数の関数

ZenScriptにおける最も基本的な型は文字列型、Integer型、そしてBoolean型です。

## ほとんどの"単一の"型

`true == true` 2つの値が同一かどうかを確認できます。  
`"Hello" != "World"`2つの値が同一でないかを確認できます。

## 文字列型

文字列型には次の機能があります。

`"Hello".length` 文字列の長さをint型で返します。  
`"Hello"[1]` 指定された位置の文字を返します。  
`"Hello" in "Hell"` `in`演算子の前の文字列が後ろの文字列を含むかどうかをBoolean型で返します。 `in`は`has`に、好みで置き換えることができます。  
`"Hel" ~ "lo " + "World"` 文字列を追加・連結することもできます。 `string += "assignAdd"` 追加・連結代入演算子をを用いることもできます。

それらとは別に、[JavaのString](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)で使用可能な、`char`を使わない全てのメソッドもZenScriptで使用できます。  
次のものが該当します:

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

`+-*/%` 基本的な数学演算子([変数のタイプの概要](Variable_Types)の頁も参照してください). もちろん代入演算子として使うこともできます。  
`0 to 10` 0から10までの範囲のRangeを返します。  
`1~10` 整数を連結します(文字列として"110"が返ります)。

## Boolean型

Boolean型には次の機能があります。

`true ~ false` Boolean型を連結します(文字列型として"truefalse"が返ります).  
`& | ^` 真偽値演算子です(and/or/xor)。

## 配列/配列リスト

配列と配列リストは次の基本的な機能があります。

`array[1]` 指定したインデックスの位置に格納されているものを返します。  
`array[1] = "Hello"` 指定したインデックスの位置にものをセットします。  
`array.length` 配列の長さを返します。