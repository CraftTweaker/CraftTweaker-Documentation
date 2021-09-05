::requiredMod[Astral Sorcery]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/astral-sorcery}

# Astral Sorcery Liquid Interaction

Liquid Interaction is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methoden

#### Rezept hinzufügen

The following script adds two new Liquid Interaction recipes.

The first recipe has a weight of 20 and produces a Diamond from Water (Fluid) and Lava (Fluid) with a 0% chance to consume the Water and a 20% chance to consume the Lava.

The second recipe has a weight of 80 and spawns a Horse (Entity) from Water (Fluid) and Lava (Fluid) with a 0% chance to consume the Water and a 20% chance to consume the Lava.

```zenscript
// <recipetype:astralsorcery:liquid_interaction>.addRecipe(name as string, output as IItemStack, reactant1 as IFluidStack, chanceConsumeReactant1 as float, reactant2 as IFluidStack, chanceConsumeReactant2 as float, weight as int)
// <recipetype:astralsorcery:liquid_interaction>.addRecipe(name as string, output as MCEntityType, reactant1 as IFluidStack, chanceConsumeReactant1 as float, reactant2 as IFluidStack, chanceConsumeReactant2 as float, weight as int)

<recipetype:astralsorcery:liquid_interaction>.addRecipe("interaction_item", <item:minecraft:diamond>, <fluid:minecraft:water>, 0, <fluid:minecraft:lava>, 20, 20);
<recipetype:astralsorcery:liquid_interaction>.addRecipe("interaction_entity", <entitytype:minecraft:horse>, <fluid:minecraft:water>, 0, <fluid:minecraft:lava>, 20, 80);
```

#### Remove Recipes

The following script will remove the Liquid Interaction that gives Stone from Water (Fluid) and Lava (Fluid).

Liquid Interactions also allow you to spawn Entities as the output of the recipe instead of an item. There are no default recipes for it in Astral Sorcery however, but if a mod adds an interaction you can remove it.

```zenscript
// <recipetype:astralsorcery:liquid_interaction>.removeRecipe(output as IItemStack)
// <recipetype:astralsorcery:liquid_interaction>.removeRecipe(output as MCEntityType)

<recipetype:astralsorcery:liquid_interaction>.removeRecipe(<item:minecraft:stone>);
```