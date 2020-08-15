# 功能接口的首页

根据Java 8的Java 语言规格，Java 的函数界面是：

> A functional interface is an interface that has just one abstract method (aside from the methods of `Object`), and thus represents a single function contract. This "single" method may take the form of multiple abstract methods with override-equivalent signatures inherited from superinterfaces; in this case, the inherited methods logically represent a single method.
> 
> For an interface I, let `M` be the set of `abstract` methods that are members of I that do not have the same signature as any `public` instance method of the class `Object`. Then, I is a *functional interface* if there exists a method `m` in `M` for which both of the following are true:
> 
> - `m` 的签名是一个子签名 ([§8.4.2](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.2)) 每个方法在 `M` 中的签名。
> - `m` 是返回类型替代的[§8.4.5](https://docs.oracle.com/javase/specs/jls/se8/html/jls-8.html#jls-8.4.5) `M` 中的每种方法
> 
> [来源](https://docs.oracle.com/javase/specs/jls/se8/html/jls-9.html#jls-9.8)

ZenScript是一个与 Java 后端交互的 Java 式编程语言，具有类似的定义。

## 简化程序
上述定义过于精确和复杂，必须根据正式语文规格来确定。 为开发者提供更简化的版本如下：

> 如果一个接口 `I` 被称为一个 *功能接口* 只定义了一个单一的抽象方法。

ZenScript 本身也接受此定义。

## 实用用法
到目前为止，上述文件更多地依赖于“什么”而不是“为什么”。 函数接口看起来像一个 gimmick，但它们特别有用，因为在 ZenScript 中，它们允许 *纯函数* (i)。 。您创建的 函数为 `函数`应传递到 Java 代码，而无需穿戴穿戴头巾的人。 这是我们定义为 "lambda"的东西。

Examples of applications of these interfaces are the [Recipe Functions](/Vanilla/Recipes/Crafting/Recipe_Functions/) that can be passed to recipes to change the output or input dynamically: `IRecipeFunction` and `IRecipeAction` are in fact two functional interfaces.

## 问题及其解决办法
ZenScript 语言可用的函数接口都过于具体。 一方面，它允许 为某些参数精细设计的功能； 另一方面，这严重限制了开发者能够做到的 的可能性。

出于这一原因， ZenScriptX 项目决定提供一组通用功能接口，可以 接收一定数量的输入参数和其他输出， 允许与基于 JavaScript 的 API进行更容易的互操作性。 在本页面</a>找到可用功能接口的完整列表

连同他们的所有参数和返回类型。</p> 



## 快速免责声明

请注意，在这个文档中，我们主要提到ZenScript 和 Java 之间的互操作性。 这是因为 ZenScript 已经为更高顺序的函数提供了支持(例如) 将函数存储在一个变量中，调用它们， 传递它们作为参数等，而无需在之间的任何功能接口。 为此，下列 代码将在 ZenScript 中无效：



```zenscript
val butn as Function = function (input as IIngredient) as IItemStack,
    if (input instanceof IItemStack) return into into as IItemStack;
    返回 null;
} 作为函数;

print(fun). pply(<minecraft:stick>).commandString; # 不编译
```


发生这种情况是因为功能方法没有暴露于ZenScript，而只是在 Java 后端。 要找到 个真正使用此功能接口的示例，请参阅 [序列文档](/Mods/Boson/Sequences/Docs/) 页面。


