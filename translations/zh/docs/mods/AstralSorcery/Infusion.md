::requiredMod[Astral Sorcery]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/astral-sorcery}

# Astral Sorcery Infusion

Infusion is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## 方法

#### 添加配方

The following script adds a Starlight Infuser recipe that produces Dirt when a Diamond is infused with Water (Fluid).

The recipe takes 200 ticks to craft (10 seconds) and consumes multiple blocks of Water (Fluid).

The recipe will accept water from Containment Chalices that are around the Infuser.

The recipe will not transfer it's NBT from the input to the output. (If you wanted to make a recipe to Infuse a Diamond Sword to create a Netherite Sword, you can set `copyNBTToOutputs` to `true` so that enchantments carry over.

```zenscript
// <recipetype:astralsorcery:infusion>.addRecipe(name as string, itemOutput as IItemStack, itemInput as IIngredient, liquidInput as MCFluid, craftingTickTime as int, consumptionChance as float, consumeMultipleFluids as bool, acceptChaliceInput as bool, copyNBTToOutputs as bool)

<recipetype:astralsorcery:infusion>.addRecipe("infusion_test", <item:minecraft:dirt>, <item:minecraft:diamond>, <fluid:minecraft:water>, 200, 2, true, true, false);
```

#### Remove Recipes

The following script will remove the Starlight Infuser recipe for Diamond.

```zenscript
// <recipetype:astralsorcery:infusion>.removeRecipe(output as IItemStack)

<recipetype:astralsorcery:infusion>.removeRecipe(<item:minecraft:diamond>);
```