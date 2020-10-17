# 条件文

ある条件を満たす(もしくは満たされない)場合にのみ実行されるコードを書くことができます。 それが、条件分が存在する理由です。 それが、条件分が存在する理由です。

## If

If文とは、条件分の最初の要素です。 それに続くコードを実行するのにtrueと評価されるべき条件を記述します。 **値を比較するには2つのイコールが必要です！ (等しいのは値を宣言するためです!)**

```zenscript
val test = 0;

if (test == 0) { //true
    print("Test is zero!");
}
```

## Else

Else文を条件文に追加すると、If文の条件がfalseと評価された時に実行されるコードを記述できます。

```zenscript
var test = 0;

if (test == 0) { //true
    //will be executed when test is equal to 0
    print("Test is zero!");
} else {
    //will be executed when test is not equal to 0
    print("Test is NOT zero!");
}

test = 1;
if (test == 0) { //false
    //will be executed when test is equal to 0
    print("Now, test is zero!");
} else {
    //will be executed when test is not equal to 0
    print("Now, test is NOT zero!");
}

```

## 確認事項

使用可能な算術記号は、`+`,`-`,`*`,`/`,`mod`,`concatenation(~)`です。

Supported Operands are `Logical OR(||)`, `Logical AND(&&)`, `Bitwise OR(|)`, `Bitwise AND(&)`, and `Bitwise XOR(^)`

```zenscript
//You can check for:


//Number values
val a = 0 as int;
if (a == 0) { print("NumVal"); }

//Calculated number values
val b = 1;
val c = 5;
//All evaluate to true
if (b+c == 6) { print("Num1!"); }
if (b*c == 5) { print("Num2!"); }
if (b/c == 0.2) { print("Num3!"); }

//OR, XOR, AND
val d = "Hello";
val e = "World";
val f = d~e; //f = "HelloWorld", the Tilde just concatenates one thing to another

//||(OR) means, as long as one of the criteria is met, it evaluates to true
if (d == "Hello" || e == "Hello") { print("OR1!"); }        //true
if (d == "Hello" || e == "World") { print("OR2!"); }        //true

//^(XOR) means, ONLY ONE criteria may be met, otherwise it evaluates to false
if (d == "Hello" ^ e == "Hello") { print("XOR1!"); }        //true
if (d == "Hello" ^ e == "World") { print("XOR2!"); }        //false

//&&(AND) means, both criteria need to be met, otherwise it evaluates to false
if (d == "Hello" && e == "Hello") { print("AND1!"); }       //false
if (d == "Hello" && e == "World") { print("AND2!"); }       //true
```

## 「?」演算子 

確かに、常にif/else文を使用するのは煩雑な場合があります。 特に、二者択一を条件で決めたいなら。 それが`?`演算子の実装理由です。 if/else文と同じロジックですが、実際に書く量は遥かに少ないです。 構文: `boolean ? if : else`

```zenscript
val switchy = false;

//swtichyの値を出力
print("Switchy is " ~ switchy);

//switchyがtrueならvInt = 1、そうでなければvInt = 2
val vInt = switchy ? 1 : 2;
print(vInt);

//switchyがtrueなら"Hello"を、それ以外なら"Bye"を出力
print(switchy ? print("Bye") : print("Hello"); "Hello" : "Bye");

//switchyがtrueなら"Bye"を、それ以外なら"Hello"を出力
switchy ?

```

## 演算子

これらの演算子が使用可能です。 ここにある全ての例文はtrueと評価されます。

| 名称          | 演算子          | 詳細                                                                                                                                               | 例文                |
| ----------- | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------ | ----------------- |
| Not         | `!`          | booleanを反転します                                                                                                                                    | !false            |
| 不等価         | `!=`         | 前後の値が等しくないかどうかを評価します                                                                                                                             | 1 != 2            |
| 等価          | `==`         | 前後の値が等しいかどうかを評価します                                                                                                                               | 1 == 1            |
| 大なり         | `>`       | 前の値が後ろの値より大きいかどうかを評価します                                                                                                                          | 1 > 2             |
| 大なりイコール     | `>=`      | 前の値が後ろの値以上かどうかを評価します                                                                                                                             | 1 >= 1            |
| より小さい       | `<`       | 前の値が後ろの値未満かどうかを評価します                                                                                                                             | 1 < 2             |
| 小なりイコール     | `<=`      | 前の値が後ろの値以下かどうかを評価します                                                                                                                             | 1 <= 1            |
| 論理と         | `&&` | 値の前と後の両方が true かどうかをチェックします。一方または両方が false の場合は false                                                                                            | true && true      |
| 論理的 OR      | `\|\|`     | 前または後の値が true であるかどうかをチェックします。どちらもtrue でない場合は false                                                                                              | false \|\| true |
| Bitwise XOR | `^`          | 両方が true の場合は before または after の値が true の場合は false であるかどうかをチェックします。                                                                              | true ^ false      |
| ビット方向と      | `&`      | beforeとafterの値に対してビット単位のAND演算を行います。 詳しくは [この](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) を参照してください。 | true && true      |
| ビットワイズ OR   | `\|`        | beforeとafterの値に対してビット単位のOR演算を行います。 詳しくは [この](https://stackoverflow.com/questions/4014535/differences-in-boolean-operators-vs-and-vs) を参照してください。  | false \|\| true |

### `|` と `|||` (と `&` と `&&`)

単一と二重の主な違い, セマンティクスはさておき. ダブルは、各条件の後にチェックを実行し、早期に終了することです - これは短絡と呼ばれます。 しかし、たとえ最初のものが全体の状態をキャンセルしていたとしても、単一は条件のチェーン全体を通過します。 これはリソースを節約するだけでなく、 **null チェック** やチェーン状態などのスクリプトを簡単に実行できます。

```zenscript
var a = 5;
var item = ... as IItemStack;

// Even though a is 5, it still goes through all of the conditions listed
if (a == 5 | a == 3 | a == 10 | a == -1) {
    ...
}

// Even though a is 5 and the condition is impossible (a variable can't be both 3 and 5), it still goes through all of the conditions listed
if (a == 3 & a < 2 & a > 8 & a == 5) {
    ... 
}

// 項目が null でない場合は、項目から変数にアクセスする前に
if (!isNull(item) && item.amount == 1) {
...
}

// Checks if item is not null while accessing variables from a potentially null item, throwing an error if the item is null
if (!isNull(item) & item.amount == 1) {
    ...
}
```

## in/has演算子

The `in` and the `has` operator check if something is in something.  
First you need the list you want to check in, then the `in`/`has` then the value you want to check for. `in` and `has` are the same keyword for ZS, but in most cases people use `has` for checking if a collection contains an item and in for loops as this represents the English grammar.

### in/has loadedMods

loadedModリストにあるかどうかを確認することで、Modがロードされているかを確認できます。

```zenscript
//While contains checks can use in
if (loadedMods in "mcp") {
    print("Minecraft Coder Pack loaded");
}

//Most people prefer using has
if (loadedMods has "mcp") {
    print("Minecraft Coder Pack loaded");
}
```

### In/has IIngredient

You can also check if an item matches a definition by comparing two IIngredients.  
With this one you need to be a bit careful as not to confuse the two entries:  
This is only true when the IIngredient AFTER the `in` can also be found completely in the one BEFORE the `in`.  
In most cases you will use the `has` keyword instead as it's intention is more clear and it does exactly the same.

```zenscript
// Checks if the iron ingot is in the oreDict "ingotIron"
if (<ore:ingotIron> in <minecraft:iron_ingot>) {
    print("Iron ingots are in the right oreDict");
}

// Preferred, same function as previous
if (<ore:ingotIron> has <minecraft:iron_ingot>) { 
    print("Iron ingots are in the right oreDict");
}
```

これは、 `が` の後にあるIIngredientのすべての一致するアイテムが `が`を持っている場合にのみ当てはまります : すべてのほこりを含むIIngredientを持っていると言います(e. . レッドストーンとグロウストーンの塵:

```zenscript
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>;
val allDusts = <ore:dustAll>;
allDusts.add(redstone, glowstone);

//True as redstone is a part of alldusts
if (allDusts has redstone) {

}

//False as allDusts consists of redstone and glowstone, and redstone only consists of redstone.
if (redstone has allDusts) {

}
```