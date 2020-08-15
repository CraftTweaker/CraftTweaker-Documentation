# 材料代表

材料表现为Tinkers制造材料。  
您可以从 [材质构造器](/Mods/ContentTweaker/Tinkers_Construct/MaterialBuilder/) 或从 [材质套装处理器](/Mods/ContentTweaker/Tinkers_Construct/Brackets/Bracket_Material/) 获取这样一个对象。

## 导入类

如果您遇到任何问题，可能需要导入类 (例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)) 这样比抱歉更安全并添加导入。  
`导入mods.contenttweaker.tconstruct.Material`

## ZenGetter

| ZenGetter            | 类型     |
| -------------------- | ------ |
| identifier           | string |
| commandString #命令字符串 | string |

## 添加材料项

如果您在部件构建器中使用给定的项目， 你可以设置将提供多少材料点或修复多少物品。

    ///myMaterial.addItem(Ingredient item, @Optional(1) int amountNeed, @Optional(144) int amountMatched));
    myMaterial.addItem(<item:minecraft:iron_pickaxe>);
    myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);
    

- `项目` 是匹配的物品。 您可以使用 [项目条件](/Vanilla/Items/Item_Conditions/) 但没有变压器。 
- `数量` 是匹配的项目数量。 你可以将它们拆分到工具构造提供的所有位置，这也允许你超过64。 在上面的第二个例子中，你需要每个添加4个铁块。 默认值为 1。
- `数量匹配` 是按 `数量添加的物质点数。需要`。 在上面的第二个例子中，铁块给出了两个重要点。 默认值为144(1个英寸/1个物料值)。

## 添加材料特性

您可以将特性添加到材料中。  
此材料制作的所有项目都将具有此特性。  
使用一个 [属性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/) 或一个带标识符的字符串 (推荐)，返回无效。  
您也可以提供依赖字符串， 这将导致特性仅用于某些类型，例如头等。 忽略该参数将注入空， 这将导致特性仅在零件类型上，当该部分还没有其他非空依赖修饰符。

建议使用字符串变换，因为在CoT运行时，大多数特性尚不可用，甚至在CrT运行时也是如此。 并非所有这些材料都已初始化，但如果你使用了字符串，添加材料将推迟到可用材料后进行。 仍然不是错误证明，也没有简单的方法来检查打字，所以请注意错误消息告诉您哪些特性尚未找到.

```zenscript
myMaterial.addTrait("fiery", "head");
myMaterial.addTrait(<ticontrait:fiery>);
```