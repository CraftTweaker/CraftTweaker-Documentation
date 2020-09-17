# 套装处理器

打包处理程序是获取标签的唯一途径。

## 语句
这个括号处理程序的语法非常容易遵循， 同时，它允许了各种各样的 种可能性。在这种可能性中，它的标签应由括号处理器还原。

```zenscript
<tag-TYPE:NAMESPACE:NAME>
```

在上述代码片段 所有上限中的零件是开发者可以自定义的位数，代表将返回的 目标。

`TYPE` 确定将创建的 [标签类型](/Mods/Boson/Tags/TagType/) 类型必须是标识标签类型的 mnemonics 之一。 请参阅链接页面中的有效标签类型列表。

`命名` 指明标签的名称空间，即拥有标签的模组ID。 在大多数情况下，命名空间将是 `forge` 或 `Minecraft`， 但也可以使用其他名称空格，e。 . 适用于 mod-specific 标签。

`命名` 代表应该获取的标签的名称。

请参阅行为部分以了解这个括号处理程序返回的内容。

## 行为
不同于其他在 CraftTweaker 中存在的括号处理程序， 这个括号处理器的行为差异 ，加载器正在处理括号处理器中的脚本。

### `个标签` 加载器
如果括号处理程序在脚本中被 [`标签` 加载器](/Mods/Boson/Loaders/Tags/)引用， 它将返回 [`标签`](/Mods/Boson/Tags/Tag/). 这允许操纵标签 本身中包含的元素。 欲了解更多信息，请参阅类文档。

### `前置` 加载器
如果括号处理程序在脚本中被 `预设` 加载器所引用，它将会抛出一个异常。 因为标签 稍后被加载到Minecraft生命周期中，即在配方注册之前。

### 每个其它加载器
如果括号处理程序在一个脚本中被任何其他加载器加载， 包括默认 `recipevent` one, 然后它将返回 [`Tag Ingredient`](/Mods/Boson/Tags/TagIngredient/)。 这不允许操纵 标签内容， 但允许将标签用于配方和其他调用方法，需要实例为 [`IIngredient`](/Vanilla/Variable_Types/IIngredient/) 作为参数。

## 示例使用

这个第一个示例展示了一个 `Tag Ingredient` 用于添加一个新配方。 注意 `个项目` 标签 类型的用法：

```zenscript
valable taggredient = <tag-items:forge:ingots/iron>;
配方.addShapelessRecipe("test", <minecraft:iron_ingot> * 3, [tagIngredient, tagIngredient, tagIngredient]);
```

这第二个示例显示了一个 `标签` 类型 `块` 的操纵：

```zenscript
#loader 标签
val tag = <tag-blocks:minecraft:enderman_holdable>;
tag.add("minecraft:iron_block" as NameSpacedString);
```
