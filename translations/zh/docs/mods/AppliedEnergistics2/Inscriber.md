::requiredMod[Applied Energistics 2]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2 requiredMod=AppliedEnergisticsTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/appliedenergisticstweaker}

# 应用能源2 压印器

Inscriber是一种 [IRecipeManager](/vanilla/api/managers/IRecipeManager) 的类型，并实现了IRecipeManager's 所有可用的方法。 例如 `removeRecipe()` 和 `removeAll()`。

## 方法

#### 添加Inscribe配方

下文的脚本为压印器添加了四种配方，分别如下：

1) 将泥土放在中间的格子进行压印，输出钻石。 2) 将泥土放在上方的格子、玻璃放在中间的格子进行压印，输出泥土。 3) 将木棍分别放在中间和下放的格子进行压印，输出玻璃。 （请注意数组首元素`<item:minecraft:air>`的使用方法） 4) 将箭放在上方的格子、苹果放在中间的格子、木棍放在下放的格子进行压印，输出红石。

```zenscript
// <recipetype:appliedenergistics2:inscriber>.addInscribeRecipe(name as string, output as IItemStack, middleInput as IIngredient, otherInputs as @Optional IIngredient[])

<recipetype:appliedenergistics2:inscriber>.addInscribeRecipe("inscriber_inscribe_test", <item:minecraft:diamond>, <item:minecraft:dirt>);
<recipetype:appliedenergistics2:inscriber>.addInscribeRecipe("inscriber_inscribe_test_top_input", <item:minecraft:dirt>, <item:minecraft:glass>, [<item:minecraft:dirt>] as IIngredient[]);
<recipetype:appliedenergistics2:inscriber>.addInscribeRecipe("inscriber_inscribe_test_bottom_input", <item:minecraft:glass>, <item:minecraft:stick>, [<item:minecraft:air>, <item:minecraft:stick>] as IIngredient[]);
<recipetype:appliedenergistics2:inscriber>.addInscribeRecipe("inscriber_inscribe_test_all_inputs", <item:minecraft:redstone>, <item:minecraft:apple>, [<item:minecraft:arrow>, <item:minecraft:stick>] as IIngredient[]);
```

#### 添加Press配方

下文的脚本为压印器添加了四种配方，分别如下：

1) Output Scute when Pressing Lapis Lazuli in the middle slot. 2) Output Coal when Pressing White Dye in the middle slot, and White Wool in the top slot. 3) Output an Iron Ingot when Pressing Orange Dye in the middle slot, and Orange Wool in the bottom slot. (Notice how we use `<item:minecraft:air>` as the first element of the array) 4) Output a Gold Ingot when Pressing a Magenta Dye in the middle slot, Magenta Wool in the top slot and Light Blue Wool in the bottom slot.

```zenscript
// <recipetype:appliedenergistics2:inscriber>.addPressRecipe(name as string, output as IItemStack, middleInput as IIngredient, otherInputs as @Optional IIngredient[])

<recipetype:appliedenergistics2:inscriber>.addPressRecipe("inscriber_press_test", <item:minecraft:scute>, <item:minecraft:lapis_lazuli>);
<recipetype:appliedenergistics2:inscriber>.addPressRecipe("inscriber_press_test_top_input", <item:minecraft:coal>, <item:minecraft:white_dye>, [<item:minecraft:white_wool>] as IIngredient[]);
<recipetype:appliedenergistics2:inscriber>.addPressRecipe("inscriber_press_test_bottom_input", <item:minecraft:iron_ingot>, <item:minecraft:orange_dye>, [<item:minecraft:air>, <item:minecraft:orange_wool>] as IIngredient[]);
<recipetype:appliedenergistics2:inscriber>.addPressRecipe("inscriber_press_test_all_inputs", <item:minecraft:gold_ingot>, <item:minecraft:magenta_dye>, [<item:minecraft:magenta_wool>, <item:minecraft:light_blue_wool>] as IIngredient[]);
```

#### Remove Recipes

下面的脚本会移除所有输出产物为逻辑处理器的压印器的配方。

```zenscript
// <recipetype:appliedenergistics2:inscriber>.removeRecipe(output as IItemStack)

<recipetype:appliedenergistics2:inscriber>.removeRecipe(<item:appliedenergistics2:logic_processor>);
```