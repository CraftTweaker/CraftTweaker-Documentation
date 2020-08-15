# 蓝图

蓝图制作包可以用来添加/移除沉浸工程蓝图制作器中的配方。

## PSA

[类别](/Mods/Immersive_Engineering/Variables/Categories/) 字符串非常特殊。 对于输入的没有已经建立的类别的字符串，它会创建一个新的类别，从而创建一个新的蓝图。 这意味着您可以添加一个名为“香蕉采购”的蓝图类别，提供"食物配方"。 在第一个条目找到后，它会在生成的类别下生成该类别字符串的所有附加配方。

## 调用包

您可以使用 `mods.immersiveengineering.Blueprint` 调用蓝图包。

## 添加配方

| 必填 | 类型 | 数据类型                                                        |
| -- | -- | ----------------------------------------------------------- |
| 必要 | 类别 | 字符串 [类别](/Mods/Immersive_Engineering/Variables/Categories/) |
| 必要 | 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/)               |
| 必填 | 输入 | [材料（IIngredient）](/Vanilla/Variable_Types/IIngredient/)     |

### 例子

```zenscript
//示例：
mods.immersiveengineering.Blueprint.addRecipe(String category, IItemStack output, IIngredient[…]输入)；

/Using an existing category String
mods.immersiveengineering.Blueprint. ddRecipe("components", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);

//Using a new category string (This can enving a new Blutrue item)
mods. mmersiveengineering.Blueprint.addRecipe("Banana Pancakes", <minecraft:diamond>, [<ore:logWood>, <minecraft:dirt>]);
```

## 删除配方

| 类型 | 数据类型                                          |
| -- | --------------------------------------------- |
| 输出 | [物品堆（IItemstack）](/Vanilla/Items/IItemStack/) |

### 比如：

```zenscript
//示例：
mods.immersiveengineering.Blueprint.removeRecipe(IItemStack 输出)；
mods.immersiveengineering.Blueprint.removeRecipe(<minecraft:diamond>)；
```