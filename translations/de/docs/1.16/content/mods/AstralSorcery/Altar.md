::requiredMod[Astral Sorcery]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/astral-sorcery}

# Astral Sorcery Altar

The Altar is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methoden

#### Rezept hinzufügen

The following script adds two recipes to the Altar that will do the following: 1) The first recipe is made in the Iridescent Altar (`RADIENCE` Altar Type) and outputs Dirt after 50 ticks (2.5 seconds) and using 50 starlight.

2) The second recipe is made in the Celestial Altar (`CONSTELLATION` Altar Type) and outputs a Diamond after 50 ticks (2.5 seconds) and using 50 starlight.

The second recipe is just an example of using a pattern to register the recipe, both methods produce the same result.

The recipe grids **NEEDS** to be 5x5. If your recipe isn't 5x5, you need to pad it out with Air until it is 5x5.

 The default Altar Types are: `DISCOVERY` `ATTUNEMENT` `CONSTELLATION` `RADIANCE` You can get them by using `/ct dump astralAltarTypes` in-game as well.

```zenscript
// <recipetype:astralsorcery:altar>.addRecipe(name as string, altarType as string, output as IItemStack, ingredients as IIngredient[][], duration as int, starlightRequired as int)
// <recipetype:astralsorcery:altar>.addRecipe(name as string, altarType as string, output as IItemStack, pattern as string[], ingredients as IIngredient[string], duration as int, starlightRequired as int)

val air = <item:minecraft:air>;

<recipetype:astralsorcery:altar>.addRecipe("altar_test", "RADIANCE", <item:minecraft:dirt>, [
[air, air, air, <item:minecraft:arrow>, air],
[air, <item:minecraft:diamond>, air, air, air],
[air, air, <item:minecraft:apple>, air, air],
[air, air, air, air, air],
[<item:minecraft:glass>, air, air, air, <item:minecraft:stick>]
], 50, 50);

<recipetype:astralsorcery:altar>.addRecipe("altar_pattern_test", "CONSTELLATION", <item:minecraft:diamond>, [
"_____",
"_qwe_",
"_ewq_",
"_____",
"_____"], {q: <item:minecraft:apple>, w: <tag:items:minecraft:wool>, e: <item:minecraft:dirt>}, 50, 50);
```

#### Remove Recipes

The following script will remove the Formation Wand recipe from the Altar.

```zenscript
// <recipetype:astralsorcery:altar>.removeByName(name as string);

<recipetype:astralsorcery:altar>.removeByName("astralsorcery:altar/architect_wand");
```