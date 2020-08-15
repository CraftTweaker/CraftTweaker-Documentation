# 获取 `序列`s

## 概览
获取 `序列` 是一个两个步骤过程：首先需要获取正确类型的 序列构造函数的引用， 然后通过传递给定类型元素的列表或一个现成的 指定类型的数组将完成构造过程。

一些CraftT弱化集成也可以直接或通过方法获得一个 `序列` 的方法。 在这个 的情况下，没有必要进行任何构造函数调用。 另一方面，通用类型将不会明确指定 ，要求用户对返回类型做智能笔记。

## 第 1 步：构造器
引用一个 `序列` 构造器是通过一个特殊的括号处理器完成的，它具有以下语法：

```zenscript
<sequence:CLASSNAME>
```

在上面的代码片段 `CLASSNAME` 代表此 序列将通用的类的简短或完全限定名称。 用简单的字句来定义构造函数调用时序列能够 存储的元素类型。

请考虑以下两个例子：

```zenscript
<sequence:IItemStack> # 1
<sequence:crafttweaker.item.IIngredient> # 2
```

标记为 `# 1` 的序列表达式将返回一个构造函数的引用，一个序列将能够为 持有 `IItemStack` 的实例。 请注意，这需要在当前脚本中导入类才能正常工作。

标记为 `# 2` 的序列表达式将返回一个构造函数的引用，一个序列将能够为 持有任何类型的 `IIngredient`表示它将接受 `IItemStack`s, 但也 `IOreDictEntr`ies 或其他任何 自定义 `IIngredient` 实现。

**重要：** 此初始类型只会影响当前序列类型。 总是可以通过任意 `序列`-类型转换调用来更改此序列中储存的类型 以后才能更改， 例如 `地图` More information are available in the [class documentation](/Mods/Boson/Sequences/Docs/).

## 第 2 步：调用构造器
由于括号处理程序不会调用构造函数，而只是简单地引用它，所以现在需要直接调用 构造函数。 这可以通过正常的方法调用语法完成，但它可以通过括号处理程序 而不是方法名称完成。

序列的构造函数是一个vararg, 意思是它可以接受任何数量的参数, 只要他们都是构造函数引用中给定的 通用类型。 例如，括号处理器 `<sequence:IItemStack>` 将无法在构造器中接受 `<ore:ingotCopper>` 因为一个 `IOreedDictEnter` 不是 `IItemStack`。

不可能向构造函数提供任何参数，在这种情况下，序列将为空。

也可以提供数组本身或数组的参考，其形式可以是方法或变量。 在这种情况下，只有当类型匹配 `CLASSNAME`时，数组才会被接受。 在哪里 `CLASSNAME` 是序列中的 类型对象的名称。 请注意，此行为 **可能需要** 个实验性标志才能启用。 Refer to the [Experimental Flags Preprocessor](/Mods/Boson/Preprocessor/Exp/) for more information.

下面是一个代码片段，显示如何应用上述代码。

```zenscript
val emptySequence = <sequence:string>();
val sequenceWacks = <sequence:IItemStack>(<minecraft:iron_ingot>, <minecraft:gold_nugget>, <minecraft:apple>);
val 序列Ofipes = <sequence:ICraftingRecipe>(配方。 (ll); # 需要指定 Esao
```

## 接下来是什么？
现在 `序列` 已经建立，请参考 [类文档](/Mods/Boson/Sequences/Docs/) 以获取 支持的方法列表。
