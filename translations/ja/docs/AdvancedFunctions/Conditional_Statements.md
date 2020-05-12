# 条件文

ある条件を満たす(もしくは満たされない)場合にのみ実行されるコードを書くことができます。 それが、条件分が存在する理由です。

## If

If文とは、条件分の最初の要素です。 それに続くコードを実行するのにtrueと評価されるべき条件を記述します。 値を比較する時には、等号が2つ必要になることに注意してください。等号が一つだけだと、値の宣言文になってしまいます。

```zenscript
val test = 0;

if(test == 0){ //true
    print("Test is zero!");
}
```

## Else

Else文を条件文に追加すると、If文の条件がfalseと評価された時に実行されるコードを記述できます。

```zenscript
var test = 0;

if(test == 0){//true
    //testが0のときに実行されます
    print("Test is zero!");
} else {
    //testが0以外のときに実行されます
    print("Test is NOT zero!");
}

test = 1
if(test == 0){//false
    //testが0のときに実行されます
    print("Now, test is zero!");
} else {
    //testが0以外のときに実行されます
    print("Now, test is NOT zero!");
}

```

## 確認事項

使用可能な算術記号は、`+`,`-`,`*`,`/`,`mod`,`concatenation(~)`です。

使用可能な論理演算記号は`OR(|)`, `AND(&)`, `XOR(^)`です。

```zenscript
//確認事項:


//数値
val a = 0 as int;
if(a==0){print("NumVal");}

//算術演算
val b = 1;
val c = 5;
//すべてtrueと評価されます
if(b+c==6){print("Num1!");}
if(b*c==5){print("Num2!");}
if(b/c==0.2){print("Num3!");}

//OR, XOR, AND
val d = "Hello";
val e = "World";
val f = d~e; //f = "HelloWorld", チルダは連結の演算子です

//|(OR)は式のいずれかがtrueと評価される場合、全体としてtrueと評価されることを意味します。
if(d=="Hello" | e == "Hello"){print("OR1!");}       //true
if(d=="Hello" | e == "World"){print("OR2!");}       //true

//^(XOR)はたった一つの式だけがtrueと評価されるときのみ全体としてtrueと評価されます。そうでなければfalseと評価されます。
if(d=="Hello" ^ e == "Hello"){print("XOR1!");}      //true
if(d=="Hello" ^ e == "World"){print("XOR2!");}      //false

//&(AND)はどの式もtrueと評価されないと全体としてtrueと評価されません。そうでなければfalseと評価されます。
if(d=="Hello" & e == "Hello"){print("AND1!");}      //false
if(d=="Hello" & e == "World"){print("AND2!");}      //true
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
print(switchy ? "Hello" : "Bye");

//Prints "Bye" if switchy is true, otherwise prints "Hello"
switchy ? print("Bye") : print("Hello");

```

## Operators

You can use these operators. All the examples given evaluate to true.

| Name             | token   | Explanation                                                                          | Example      |
| ---------------- | ------- | ------------------------------------------------------------------------------------ | ------------ |
| Not              | `!`     | Inverts a boolean                                                                    | !false       |
| Not Equal        | `!=`    | Checks if the value before and after are not equal                                   | 1 != 2       |
| Equal            | `==`    | Checks if the value before and after are equal                                       | 1 == 1       |
| Greater than     | `>`  | Checks if the value before is greater than after                                     | 1 > 2        |
| Greater or Equal | `>=` | Checks if the value before is greater than or equal with after                       | 1 >= 1       |
| Lesser then      | `<`  | Checks if the value before is fewer than after                                       | 1 < 2        |
| Lesser or Equal  | `<=` | Checks if the value before is fewer than or equal with after                         | 1 <= 1       |
| AND              | `&` | Checks whether both, value before and after are true, false if one or both are false | true & true  |
| OR               | `|`     | Checks if the value before or after is true. True, is both are true                  | true | true  |
| XOR              | `^`     | Checks if either the value before or after is true, false if both or none is true    | true ^ false |

## The in/has Operator

The `in` and the `has` operator check if something is in something.  
First you need the list you want to check in, then the `in`/`has` then the value you want to check for. `in` and `has` are the same keyword for ZS, but in most cases people use `has` for checking if a collection contains an item and in for loops as this represents the English grammar.

### in/has loadedMods

You can check, if a mod is loaded by checking if it's in the loadedMods list

```zenscript
//While contains checks can use in
if(loadedMods in "mcp"){
    print("Minecraft Coder Pack loaded");
}

//Most people prefer using has
if(loadedMods has "mcp"){
    print("Minecraft Coder Pack loaded");
}
```

### in/has IIngredient

You can also check if an item matches a definition by comparing two IIngredients.  
With this one you need to be a bit careful as not to confuse the two entries:  
This is only true when the IIngredeint AFTER the `in` can also be found completely in the one BEFORE the `in`.  
In most cases you will use the `has` keyword instead as it's intention is more clear and it does exactly the same.

```zenscript
if(<ore:ingotIron> in <minecraft:iron_ingot>){
    print("Iron ingots are in the right oreDic");
}

if(<ore:ingotIron> has <minecraft:iron_ingot>){
    print("Iron ingots are in the right oreDic");
}
```

This is only then true, when ALL matching items from the IIngredient AFTER the `has` can also be found in the IIngredient BEFORE `has`: Say we have an IIngredient that contains all dusts (e.g. redstone and glowstone dust):

```zenscript
val redstone = <minecraft:redstone>;
val glowstone = <minecraft:glowstone>
val allDusts = <ore:dustAll>;
allDusts.add(redstone, glowstone);

//True as redstone is a part of alldusts
if(allDusts has redstone) {

}

//False as allDusts consists of redstone and glowstone, and redstone only consists of redstone.
if(redstone has allDusts) {

}
```