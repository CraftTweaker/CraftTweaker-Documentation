# カスタム関数

CTやアドオンによって提供される関数がそれを実行しないことがあります。 あなた自身の関数を書く方法は次のとおりです! 関数に入れ子にすることもできます

## 基本構文

一般的に、静的な使用を宣言します。

```zenscript
function NAME ([arguments[as type]]) [as returnType]{
    [Statements]
    [return VALUE;]
}
```

括弧内のものは、達成したいものに応じて任意です。 具体的な機能を詳しく見てみましょう。

## 静的関数

静的関数はスクリプトが実行される前に作成され、スクリプト内のどこからでもアクセスできます。  
[クロススクリプト参照](/AdvancedFunctions/Cross-Script_Reference) を使用して、スクリプトの外で宣言された関数にアクセスすることもできます。

### 無効な機能

Void 関数は、値を返さない関数です。

```zenscript
//calls the function tens() without arguments
tens();

//calls the function realTens() with the String "Hello World!" as argument
realTens("Hello World!");


//crates function tens() with no required arguments
function tens(){
    //Calls function realTens() with "" as argument
    realTens("");
}


//creates function realTens() with one string required as argument
function realTens(a as string){
    //prints the argument 10 times
    for i in 1 to 11{
        print(a);
    }
}
```

### 戻り値関数

関数が返す値を指定することもできます。 戻り値の型を定義するには、 `を` キーワードとして使用することをお勧めします。

```zenscript
//calls add function with 1 and 99 as parameters
val result = add(1,99);
print(result);

//you can place the add function inside the print function as well
print(add(2,64));

//defines function add() with a and b as parameters (both set to be Integers!) and sets the return type to Integer
function add(a as int,b as int) as int{
    //returns the sum of a and b
    return a+b;
}
```

## 変数としての関数

変数などの関数も使用できます。 この場合、それらは個別のクラスとして作成されます。 Other than that, they work pretty much the same as static functions, you call them by their variable name.  
You can even use them as [global variables](/AdvancedFunctions/Global_Static_Variables/) this way.

メソッドをキャストする必要がある場合 (グローバルに対してと同様)、以下を使用できます。

    global addition as function(int, int)int = function (a as int, b as int) as int {
        return a + b;
    };
    
    print(addition(1,2));