# Trocknen

Das `Trocknen` Paket erlaubt dir, Trockenrezepte hinzuzufügen oder zu entfernen.

## Anruf

Du kannst das Trockenpaket mit `mods.tconstruct.Drying` aufrufen

## Hinzufügen

Die Zeit ist in Ticks

```zenscript
//mods.tconstruct.Drying.addRecipe(IItemStack Output, IIngredient Input);
mods.tconstruct.Drying.addRecipe(<minecraft:leather>,<minecraft:rotten_flesh>, 100);
```

## Entfernen

```zenscript
//mods.tconstruct.Drying.removeRecipe(IItemStack output);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>);

//mods.tconstruct.Drying.removeRecipe(IItemStack output, IItemStack input);
mods.tconstruct.Drying.removeRecipe(<minecraft:leather>, <minecraft:rotten_flesh>);
```