# Mana Infusion

El paquete ManaInfusion se utiliza para añadir o quitar recetas para/de la Botania ManaPool.

## Llamando

Puedes llamar al paquete ManaInfusion usando `mods.botania.ManaInfusion`

## Encontrar todas las recetas registradas

Puedes encontrar todas las recetas de ManaInfusion registradas usando [`/ct botania infusions`](/Mods/Modtweaker/Botania/Commands/).

## Añadir receta

```zenscript
//mods.botania.ManaInfusion.addInfusion(salida ItemStack, entrada IIngredient, maná inte);
mods.botania.ManaInfusion.addInfusion(<minecraft:grass>, <ore:stone>, 1000);

//mods.botania.ManaInfusion.addAlchemy(salida ItemStack, entrada IIngredient, maná inte);
mods. otania.ManaInfusion.addAlchemy(<minecraft:gold_ore>, <ore:stone>, 5000);

//mods.botania.ManaInfusion.addConjuration(ItemStack output, IIngredient input , int mana);
mods.botania.ManaInfusion.addConjuration(<minecraft:stone>, <minecraft:stone>, 1000);
```

## Eliminación de receta

```zenscript
//mods.botania.ManaInfusion.removeRecipe(salida IIngredient);
mods.botania.ManaInfusion.removeRecipe(<minecraft:leather>);
mods.botania.ManaInfusion.removeRecipe(<minecraft:redstone> * 2);
```