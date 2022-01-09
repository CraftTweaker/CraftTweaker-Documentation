::requiredMod[Tinkers' Construct]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/tinkers-construct}

# Tinkers' Construct Entity Melting

Entity Melting is a type of [IRecipeManager](/vanilla/api/managers/IRecipeManager) and implements all the methods that are available to IRecipeManager's, such as `removeRecipe()` and `removeAll()`.

## Methods

#### Add Recipe

The following script adds an Entity Melting Recipe that produces Molten Rose Gold (Fluid) when a Sheep (Entity) is melted in a Smeltery dealing 1 damage to the Sheep.

```zenscript
// <recipetype:tconstruct:entity_melting>.addRecipe(name as string, input as CTEntityIngredient, output as IFluidStack, damage as int)

<recipetype:tconstruct:entity_melting>.addRecipe("entity_melting_test", <entitytype:minecraft:sheep>, <fluid:tconstruct:molten_rose_gold>, 1);
```

#### Remove Recipes

The following script will do the following:

1) Remove all Entity Melting Recipes that produce Molten Iron (Fluid) 2) Remove all Entity Melting Recipes that use a Villager (Entity) as the input.

```zenscript
// <recipetype:tconstruct:entity_melting>.removeRecipe(output as IFluidStack)
// <recipetype:tconstruct:entity_melting>.removeRecipe(entity as MCEntityType)

<recipetype:tconstruct:entity_melting>.removeRecipe(<fluid:tconstruct:molten_iron>);
<recipetype:tconstruct:entity_melting>.removeRecipe(<entitytype:minecraft:villager>);
```