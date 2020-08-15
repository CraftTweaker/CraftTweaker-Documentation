# 概念

循环是一个老的概念，也是编程的基础：对一组 元素重复相同的行动。 当筛选其中一些或转换集时。 或者甚至在列表中找到符合 的特定条件或在设置中递归计的第一个项目。

In procedural and imperative programming, most of that has been done with plain old `for` loops and a series of conditional statements with their relative `continue` and `break` statements. 虽然这似乎更简单， 它 需要很多代码来进行过滤等简单操作，并且可能产生可以持续更长时间的嵌套链。 此外，它不表示意图，除非代码用评论来指明它。

请考虑以下ZenScript 代码：

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

这个代码在第一眼看起来不是很明显的，需要用户阅读逻辑才能理解。 请考虑 这个通过序列构造的对应版本：

```zenscript
val nbtForMc = <sequence:ICraftingRecipe>(recipes.all)
    .filter(function (recipe) { return recipe.shaped; })
    .map(function (recipe) { return recipe.output; })
    .filterNot(function (output) { return isNull(output); })
    .filter(function (output) { return output.definition.owner == "minecraft"; })
    .any(function (output) { return output.hasTag; });
```

这个代码做到完全一样，而不仅仅是更简洁， 但也会传递更多的意思，即如果</code> 语句，嵌套的 `。 当然，由于有关守则的简单性，这似乎并不是一般性的改进。
但它可能有助于更复杂的逻辑。</p>

<p spaces-before="0">Another pro of the above code is that evaluation is not performed until the <code>any` call, meaning that the sequence can be extended via additional method calls over time and it won't be resolved until a "terminal" method is called (i.e. a method that does not return a `Sequence` itself). 这证明是极其有用的，因为没有必要去评估 整个 `配方。all` 数组。

要开始并利用序列，您可以咨询 [类文档](/Mods/Boson/Sequences/Docs/) 和 [如何获取一个](/Mods/Boson/Sequences/Obtaining/) 文档页面。
