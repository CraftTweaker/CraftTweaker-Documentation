::requiredMod[Applied Energistics 2]{builtIn=false modLink=https://www.curseforge.com/minecraft/mc-mods/applied-energistics-2 requiredMod=AppliedEnergisticsTweaker requiredModLink=https://www.curseforge.com/minecraft/mc-mods/appliedenergisticstweaker}

# Applied Energistics 2 Inscriber

The Inscriber is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Inscribe Recipes

Inscribe recipes are recipes that only consume the middle input, the other inputs are not consumed.

The following script will add four recipes to the Inscriber that will do the following:

1) Output a Diamond when Inscribing Dirt in the middle slot.
2) Output Dirt when Inscribing Glass in the middle slot, and Dirt in the top slot.
3) Output Glass when Inscribing a Stick in the middle slot, and a Stick in the bottom slot. (Notice how we use `<item:minecraft:air>` as the first element of the array)
4) Output a piece of Redstone when Inscribing an Apple in the middle slot, an Arrow in the top slot and a Stick in the bottom slot.

```zenscript
// <recipetype:appliedenergistics2:inscriber>.addInscribeRecipe(name as string, output as IItemStack, middleInput as IIngredient, otherInputs as @Optional IIngredient[])

<recipetype:appliedenergistics2:inscriber>.addInscribeRecipe("inscriber_inscribe_test", <item:minecraft:diamond>, <item:minecraft:dirt>);
<recipetype:appliedenergistics2:inscriber>.addInscribeRecipe("inscriber_inscribe_test_top_input", <item:minecraft:dirt>, <item:minecraft:glass>, [<item:minecraft:dirt>] as IIngredient[]);
<recipetype:appliedenergistics2:inscriber>.addInscribeRecipe("inscriber_inscribe_test_bottom_input", <item:minecraft:glass>, <item:minecraft:stick>, [<item:minecraft:air>, <item:minecraft:stick>] as IIngredient[]);
<recipetype:appliedenergistics2:inscriber>.addInscribeRecipe("inscriber_inscribe_test_all_inputs", <item:minecraft:redstone>, <item:minecraft:apple>, [<item:minecraft:arrow>, <item:minecraft:stick>] as IIngredient[]);
```

#### Add Press Recipes

Press recipes are recipes that consume all the inputs.

The following script will add four recipes to the Inscriber that will do the following:

1) Output Scute when Pressing Lapis Lazuli in the middle slot.
2) Output Coal when Pressing White Dye in the middle slot, and White Wool in the top slot.
3) Output an Iron Ingot when Pressing Orange Dye in the middle slot, and Orange Wool in the bottom slot. (Notice how we use `<item:minecraft:air>` as the first element of the array)
4) Output a Gold Ingot when Pressing a Magenta Dye in the middle slot, Magenta Wool in the top slot and Light Blue Wool in the bottom slot.

```zenscript
// <recipetype:appliedenergistics2:inscriber>.addPressRecipe(name as string, output as IItemStack, middleInput as IIngredient, otherInputs as @Optional IIngredient[])

<recipetype:appliedenergistics2:inscriber>.addPressRecipe("inscriber_press_test", <item:minecraft:scute>, <item:minecraft:lapis_lazuli>);
<recipetype:appliedenergistics2:inscriber>.addPressRecipe("inscriber_press_test_top_input", <item:minecraft:coal>, <item:minecraft:white_dye>, [<item:minecraft:white_wool>] as IIngredient[]);
<recipetype:appliedenergistics2:inscriber>.addPressRecipe("inscriber_press_test_bottom_input", <item:minecraft:iron_ingot>, <item:minecraft:orange_dye>, [<item:minecraft:air>, <item:minecraft:orange_wool>] as IIngredient[]);
<recipetype:appliedenergistics2:inscriber>.addPressRecipe("inscriber_press_test_all_inputs", <item:minecraft:gold_ingot>, <item:minecraft:magenta_dye>, [<item:minecraft:magenta_wool>, <item:minecraft:light_blue_wool>] as IIngredient[]);
```

#### Remove Recipes

The following script will remove all Inscriber recipes that output a Logic Processor.

```zenscript
// <recipetype:appliedenergistics2:inscriber>.removeRecipe(output as IItemStack)

<recipetype:appliedenergistics2:inscriber>.removeRecipe(<item:appliedenergistics2:logic_processor>);
```