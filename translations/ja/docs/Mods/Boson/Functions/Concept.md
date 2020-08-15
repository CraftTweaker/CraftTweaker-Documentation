# 関数インタフェースのPrimer

Java 8のJava言語仕様によると、Javaの機能インターフェースは次のとおりです。

> A functional interface is an interface that has just one abstract method (aside from the methods of `Object`), and thus represents a single function contract. This "single" method may take the form of multiple abstract methods with override-equivalent signatures inherited from superinterfaces; in this case, the inherited methods logically represent a single method.
> 
> インターフェイスのための I let `M` `abstract` メソッドの集合で、クラスの `public` instance method of the class `Object`. 次の両方が真である *M* に `m` メソッドが存在する場合 `関数型インターフェイス` です。
> 
> - `m` の署名は、 ([§8.4.2](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.2)) のすべてのメソッドの署名のサブ署名 `M` です。
> - `m` は[§8.4.5](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.5)) の `M` 内のすべてのメソッドに対して返り値となる。
> 
> [ソース](https://docs.oracle.com/javase/specs/jls/se8/html/jls-9.html#jls-9.8)

ZenScriptは、Javaバックエンドと相互作用するJavaのようなプログラミング言語であり、同様の定義を持っています。

## 簡略化
上記の定義は、正式な言語仕様から期待されなければならない、非常に正確で複雑なものです。 開発者のためのより簡単なバージョンは次のとおりです。

> インターフェイス `I` は、単一の抽象メソッドのみを定義する場合、 *関数インターフェイス* と呼ばれます。

この定義は ZenScript 自身にも受け入れられます。

## 実用的な使い方
これまで、上記のドキュメントは「なぜ」ではなく「何」に依存してきました。 Functional interfaces may seem like a gimmick, but they're particularly useful, since in ZenScript they allow *Pure Functions* (i.e. the things you create with `function`) to be passed to Java code without requiring weird shenanigans. これは私たちが "lambda" と定義するものです。

これらのインターフェイスのアプリケーションの例としては、 [レシピ関数](/Vanilla/Recipes/Crafting/Recipe_Functions/) があります。レシピは、出力または入力を動的に変更するために渡すことができます: `IRecipeFunction` と `IRecipeAction` は 事実2つの機能インターフェイス内にあります。

## 問題とその解決策
ZenScript言語で利用可能な機能インターフェイスは、すべて過度に特定されています。 On one hand, this allows finely crafted functions for certain parameters; on the other hand, this severely limits the possibilities of what can be done by the developer.

For this reason, the ZenScriptX Project decided to provide a set of general purpose functional interfaces that can receive a set amount of input parameters and output something else, allowing for easier interoperability with Java-based APIs. 利用可能な関数型インターフェイスの完全な一覧は [このページ](/Mods/Boson/Functions/List/)で見つけることができます すべての引数と戻り値の型と一緒に作られています

## クイック免責事項
このドキュメントでは、主にZenScriptとJavaの間の相互運用性について言及していることに注意してください。 これは、 ZenScriptが既に高次関数のサポートを提供しているためです。 関数を変数に格納し、関数を呼び出します。 関数間で関数インターフェイスを必要とせずに、 パラメータとして渡します。 このため、以下の コードは ZenScript で無効になります:

```zenscript
val fun as Function = function (input as IIngredient) as IItemStack {
    if (input instanceof IItemStack) return input as IItemStack;
    return null;
} as Function;

print(fun.apply(<minecraft:stick>).commandString); # doesn't compile
```

これは、関数型メソッドが ZenScript に公開されず、Java バックエンドにのみ公開されるために発生します。 このような関数インタフェースの実際の使用例を見つけるには、 [シーケンスドキュメント](/Mods/Boson/Sequences/Docs/) ページを参照してください。


