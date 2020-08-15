# コンセプト

Loopingは古い概念であり、プログラミングの基礎の一つである: 要素のグループに対して同じ一連のアクションを繰り返す。 いくつかのセットをフィルタリングしたり変換したりしています Or even finding the first item in a list that satisfies a certain condition or a count the items in a set recursively.

手続き型および命令型プログラミングで そのほとんどは、 `ループのプレーン古い` と、 相対的な `条件文の一連の` と `break` で行われています。 これは従う方が簡単に見えるかもしれませんが、 はフィルタリングのような単純な操作には多くのコードを必要とし、さらに長く続くことができるネストチェーンを生成する可能性があります。 さらに、コードがコメントで指定しない限り、インテントを表しません。

以下の ZenScript コードを検討してください。

```zenscript
var nbtForMc = false;

for recipe in recipes.all {
    if (recipe.shaped) {
        val output = recipes.output;
        if (!isNull(output)) {
            if (output.definition.owner == "minecraft") {
                val hasData = output.hasTag;
                if (hasData) {
                    nbtForMc = true;
                    break;
                }
            }
        }
    }
}
```

このコードが一見すると明らかではなく、理解するためにロジックを読み取る必要があります。 シーケンスを介して構築されたこの等価なもの を考えてみましょう:

```zenscript
val nbtForMc = <sequence:ICraftingRecipe>(recipes.all)
    .filter(function (recipe) { return recipe.shaped; })
    .map(function (recipe) { return recipe.output; })
    .filterNot(function (output) { return isNull(output); })
    .filter(function (output) { return output.definition.owner == "minecraft"; })
    .any(function (output) { return output.hasTag; });
```

This code does the exact same and not only it's more concise, but also conveys more meaning that a chain of nested `if` statements. 確かに、これは問題のコードのシンプルさのために一般的な改善のようには思えません。 しかし、より複雑な論理に有用である可能性がある。

Another pro of the above code is that evaluation is not performed until the `any` call, meaning that the sequence can be extended via additional method calls over time and it won't be resolved until a "terminal" method is called (i.e. a method that does not return a `Sequence` itself). これは、 全体の `recipes.all` 配列を評価する必要がないため、非常に有用であることを証明します。

シーケンスを始めて活用するには、 [クラスドキュメント](/Mods/Boson/Sequences/Docs/) と [](/Mods/Boson/Sequences/Obtaining/) ドキュメント ページを1つ取得する方法を参照してください。
