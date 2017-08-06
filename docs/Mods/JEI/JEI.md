# JEI

CraftTweaker comes with support for JustEnoughItems (JEI).
Currently all you can do is hide items from JEI.

## Remove
You can either just remove the item from JEI or remove it and all of it's crafting table recipes.

```
//hide(IItemStack item);
mods.jei.JEI.hide(<minecraft:diamond>);


//removeAndHide(IIngredient output, @optional boolean NBT-Match)
mods.jei.JEI.removeAndHide(<minecraft:iron_leggings>);
mods.jei.JEI.removeAndHide(<ore:planks>, false);
```