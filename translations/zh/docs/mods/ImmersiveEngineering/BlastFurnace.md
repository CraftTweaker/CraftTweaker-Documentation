::requiredMod[Immersive Engineering]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/immersive-engineering}

# 沉浸工程 高炉

The Blast Furnace is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`. Along with the Blast Furnace is the Blast Furnace Fuel, which is also a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## 方法

#### 添加配方

写入以下脚本将添加一个配方，将羊毛提供给高炉，在 1000 ticks 后输出木炭和线（作为炉渣）

```zenscript
// <recipetype:immersiveengineering:blast_furnace>.addRecipe(配方类型, 材料, 所需ticks, 输出物品,炉渣);

<recipetype:immersiveengineering:blast_furnace>.addRecipe("wool_to_charcoal", <tag:items:minecraft:wool>, 1000, <item:minecraft:charcoal>, <item:minecraft:string>);
```

#### Add Fuel

写入以下脚本将向高炉中添加一种燃料，该燃料将使用名为“Sword of the Sungod”的金剑并燃烧 100000 ticks。

```zenscript
// <recipetype:immersiveengineering:blast_furnace_fuel>.addFuel(string name, IIngredient fuel, int burnTime)

<recipetype:immersiveengineering:blast_furnace_fuel>.addFuel("the_sungods_sword_can_burn", <item:minecraft:golden_sword>.withTag({display: {Name: "{\"text\":\"Sword of the Sungod\"}" as string}}), 100000);
```

#### Remove Recipes

写入以下脚本将把高炉中输出木炭的配方全部删除。

```zenscript
// <recipetype:immersiveengineering:blast_furnace>.removeRecipe(IItemStack output)

<recipetype:immersiveengineering:blast_furnace>.removeRecipe(<item:minecraft:charcoal>);
```

#### Remove Fuels

写入以下脚本将使木炭不再作为一种燃料

```zenscript
// <recipetype:immersiveengineering:blast_furnace_fuel>.removeRecipe(IItemStack fuel)

<recipetype:immersiveengineering:blast_furnace_fuel>.removeFuel(<item:minecraft:charcoal>);
```