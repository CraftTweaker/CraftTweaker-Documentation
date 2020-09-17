# Druckmaschine

ModTweaker ermöglicht das Hinzufügen oder Entfernen von Forstwirtschaftsrezepten

## Anruf

You can call the package using `mods.forestry.Squeezer`

## Rezept entfernen

Vorsicht, du kannst keine Rezepte entfernen, die Flüssigkeitsbehälter füllen oder ableiten, wie z. B. Forstdosen!

```zenscript
//mods.forestry.Squeezer.removeRecipe(ILiquidStack liquid, @Optional IIngredient[] Zutaten);
mods.forestry.Squeezer.removeRecipe(<liquid:juice>);
mods.forestry.Squeezer.removeRecipe(<liquid:seed.oil>, [<minecraft:wheat_seeds>]);
```

## Rezeptzusatz

```zenscript
//mods.forestry.Squeezer.addRecipe(ILiquidStack fluidOutput, IItemStack[] Zutaten, int timePerItem, @Optional WeightedItemStack itemOutput);
//mods. orestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:redstone>], 120);
mods.forestry.Squeezer.addRecipe(<liquid:lava>, [<minecraft:obsidian>], 120, <minecraft:redstone> % 20);
```

| Parameter   | Type                                                              | beschreibung                                            |
| ----------- | ----------------------------------------------------------------- | ------------------------------------------------------- |
| fluidOutput | [ILiquidStack](/Vanilla/Liquids/ILiquidStack/)                    | Ausgabe des Rezepts                                     |
| zutaten     | [IItemStack](/Vanilla/Items/IItemStack/)[]                        | Die Artikeleingabe(n) des Rezepts                       |
| timePerItem | int                                                               | Menge an InputFluid für organische Gegenstände benötigt |
| itemOutput  | [Gewichteter Gegenstandstapel](/Vanilla/Items/WeightedItemStack/) | Ausgabemultiplikator                                    |