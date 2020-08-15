# 材料生成器

使用这个包，你可以创建材料，然后用它来创建工具！

## 导入类

如果您遇到任何问题，可能需要导入类 (例如铸造一个 [数组](/AdvancedFunctions/Arrays_and_Loops/)) 这样比抱歉更安全并添加导入。  
`导入mods.contenttweiner.tconstruct.MaterialBuilder；`

## 创建材料

首先，您需要创建材料生成器。  
这可以使用静态创建方法。

```zenscript
//mods.contenttweeper.tconstruct.MaterialBuilder.create(String identier);
val myMat = mods.contenttweiner.tconstruct.MaterialBuilder.create("kindlich_mat");
```

请记住，您需要在完成更改后注册材料。  
这可以通过 `注册` 方法完成，这些方法将返回一个 [材料表示](/Mods/ContentTweaker/Tinkers_Construct/Material/) 的新材料。

```zenscript
myMat.register();
```

## 参数

您可以使用 `myMaterial.name` 设置和获取这些属性。

| 财产            | 类型                                               | 附加注释              |
| ------------- | ------------------------------------------------ | ----------------- |
| identifier    | string                                           | 唯一名称              |
| 颜色            | int                                              |                   |
| hidden        | 布尔值                                              |                   |
| 液体            | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)   | 冶炼输出              |
| 可合成的          | bool                                             | 可以在部件生成器中创建       |
| 可写            | bool                                             | 可以使用连铸创建。 需要设置液体！ |
| 代表性项目         | [IItemStack](/Vanilla/Items/IItemStack/)         | 在罐头手册中显示物品        |
| 代表            | [IOREDictentre](/Vanilla/OreDict/IOreDictEntry/) | 如果代表项目无效则显示       |
| 碎纸箱           | [IItemStack](/Vanilla/Items/IItemStack/)         | 使用而不是部件构造器中的罐头碎片。 |
| localizedName | 字符串                                              | 显示的名称             |

## 计算的属性

### 项目本地化

如果你需要使用此函数来计算材料名称。  
使用 [材质代表](/Mods/ContentTweaker/Tinkers_Construct/Material/) 此材料和被重命名的工具名称 (例如"Mattock")

```zenscript
myMAt.itemLocalizer = function(thisMaterial, itemName){return "酷" + itemName;};
```

## 添加材料项

如果您在部件构建器中使用给定的项目， 你可以设置将提供多少材料点或修复多少物品。

```zenscript
///myMaterial.addItem(Ingredient item, @Optional(1) int amountNeed, @Optional(144) int amountMatched));
myMaterial.addItem(<item:minecraft:iron_pickaxe>);
myMaterial.addItem(<item:minecraft:iron_block>, 4, 288);

///myMaterial.removeItem(ItemStack item);
myMaterial.removeItem(<minecraft:iron_block>);
```

- `项目` 是匹配的物品。 您可以使用 [项目条件](/Vanilla/Items/Item_Conditions/) 但没有变压器。 
- `数量` 是匹配的项目数量。 你可以将它们拆分到工具构造提供的所有位置，这也允许你超过64。 在上面的第二个例子中，你需要每个添加4个铁块。 默认值为 1。
- `数量匹配` 是按 `数量添加的物质点数。需要`。 在上面的第二个例子中，铁块给出了两个重要点。 默认值为144(1个英寸/1个物料值)。
- 如果您使用 `移除函数`，它将会移除与项目匹配的所有特性成分。

## 材料特性

您可以将特性添加到材料中。  
此材料制作的所有项目都将具有此特性。  
使用一个带有特性标识符的字符串 和可选的 `依赖于` 字符串将告诉您哪个项目类型应该受到特性的影响。  
或者，您可以使用 [特性表示](/Mods/ContentTweaker/Tinkers_Construct/Trait/)但只有当特性在运行时间CoT时已经初始化(这很可能只适用于自定义特性)时，它才会起作用。 `依赖程度` 的可能值是：

- `null` (默认) → 所有项目，除非该减速已经具有其他特性。
- `"head"`
- `"句柄"`
- `“额外”`
- `“bow”`
- `“bowstring”`
- `“投影”`
- `"shaft"`
- `“逃跑”`

```zenscript
myMaterial.addMaterialTrait("fiery");
myMaterial.addMaterialTrait("fiery", "bowstring");
```

您也可以删除材料特性(在做批处理材料时特别有用)。  
您使用他们的标识符字符串和可选的依赖关系移除他们。  
如果您忽略依赖关系或使用 `null` 所有带该标识符的特性将被删除。

```zenscript
///myMaterial.remove(String identificer, @Optional String Dependency);
myMaterial.remove("cactus");
myMaterial.remove("cactus", "bowstring");
```

## 材料统计

为了让TiCon能够构建您的材料，它需要知道材料统计信息。  
只有添加了状态的工具类型才能建立！

```zenscript
<br />myMat.addHeadMaterialStats(int durability, float miningSpeed, float attackDamage, int harvestLevel);
myMat.removeHeadMaterialStats();


myMat.addHandleMaterialStats(float modifier, int durability);
myMat.removeHandleMaterialStats();


myMat.addExtraMaterialStats(int extraDurability);
myMat.removeExtraMaterialStats();


myMat.addBowMaterialStats(float drawSpeed, float range, float bonusDamage);
myMat.removeBowMaterialStats();


myMat.addBowStringMaterialStats(float modifier);
myMat.removeBowStringMaterialStats();


myMat.addArrowShaftMaterialStats(float modifier, int bonusAmmo);
myMat.removeArrowShaftMaterialStats();


myMat.addFletchingMaterialStats(float accuracy, float modifier);
myMat.removeFletchingMaterialStats();


myMat.addProjectileMaterialStats();
myMat.removeProjectileMaterialStats();
```

## 例子

```zenscript
#loader contenttnowl
#modloaded tconstruct

valal testMat = mods.contenttweeper.tconstruct.MaterialBuilder.create(“kindlich_mat”)；
testMat.color = 0x8e661b；
testMat.craftable = true；
testMat. iquid = <liquid:lava>;
testMat.castable = true;
testMat.addItem(<item:minecraft:comparator>);
testMat. ddItem(<item:minecraft:repeater>, 1, 2);
testMat.additem(<item:minecraft:red_flower:4>);
testMat.representativeitem = <item:minecraft:red_flower:4>;
testMat. ddHeadMaterialStats(100, 1.5f, 5.5f, 5.5f, 5);
testMat.addHandleMaterialStats(0.3, 500);
testMat.addBowStringMaterialStats(0.5f);
testMat.addMat.MaterialTrait(<ticontrait:kindlich_test>, "bowstring");
testMat. ddMat.addMaterialTrait(<ticontrait:kindlich_test>, "head");
testMat.addMaterialTrait("爆破", "bowstring");
testMat. ddMaterialTrait("爆破", "head");

/null (或根本没有指定该参数) 表示这是一个默认特性。
///默认特性仅在没有其他特性添加到该物质类型时才会被查询。
///在这种情况下，密度特性只会在工具棒上，因为弓箭头和磁头已经有其他特性。
testMat.addMaterialTrait("dense", null);

//Faulty, 应该出错，尽管只是在输入过程中，当时将检查字符串。
testMat.addMaterialTrait("dance", null);

testMat.itemLocalizer = function(thisMat, itemLocalizer = function(thisMat, itemName){return "酷" + itemName;};
testMat.localizedName = "Wicked";
testMat.register();
```