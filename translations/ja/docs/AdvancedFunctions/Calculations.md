# 計算

数字入力だけでは十分でない場合があります。 ときに計算が必要になる場面があります。  
1回の計算に3つ以上の数値が利用できることに留意してください。`1+1+1+1`も問題なく計算されます。

## アドバイス

計算結果が予期せぬものとなった場合、異なる型同士を計算に用いた可能性が十二分にあります。  
例えば、`13 % 6.5`は1を返しますが、数学的に正しい答えは0です。 なぜ? ZenScriptは2つの変数を常に同じ型として計算します。 なので、2番めの値の型を最初の値の型と一致するように自動的にキャストされます。 この例では、実際に行われた計算は`13 % 6`でした。2番めの値(double)が最初の値(integer)と一致するように自動キャストされたためです。

常に、2つの変数の型に気を配り、怪しければprint関数を用いてlogに出力し、結果を確認しましょう。

## Arithmetic Operators

I'm pretty sure all of you know these already, don't you?

| Token | Tokenassign | Function       | Example |
| ----- | ----------- | -------------- | ------- |
| `+`   | `+=`        | Addition       | 1+2     |
| `-`   | `-=`        | Substraction   | 2-1     |
| `*`   | `*=`        | Multiplication | 1*1     |
| `/`   | `/=`        | Division       | 2/2     |
| `%`   | `%=`        | Modulo         | 13 % 6  |

## Concatenation

Puts one thing at the and of the other

```zenscript
//prints "Hello World"
print("Hello" ~ " " ~ "World");
```

## Calculation results

A calculation usually ends up with a result. So what to do with that?

### Assigning a variable

There are two ways of assigning a value to a variable:

```zenscript
var test = 0;

//Option 1:
//assigns test with the value 3 (1+2)
test = 1+2;

//Option 2:
//assigns test with 5 (3+2)
test = test + 2;

//Option 3:
//assigns test with 2 (5-3)
test -= 3;
```

Option 1 and 2 assign the return variable using the `=` token.  
This is probably the easiest way for beginners and the only way if you want to assign a variable not used in the calculation.

Option 3 assigns the variable before the `-=` with the result of a normal subtraction.  
All Operators on on this page have their respective assign tokens, check the table above.

### Using the result otherwise

You can always use the result of a calculation in a function or a conditional statement:

```zenscript
//prints 4
print(3+1);

//removes the item on array[4]
recipes.remove(array[3+1]);

//
if(3+1 == 2*2) {print("Used a calculation!")}
```