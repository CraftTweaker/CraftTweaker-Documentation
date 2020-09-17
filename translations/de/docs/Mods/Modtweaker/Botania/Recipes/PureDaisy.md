# Pure Daisy

Das PureDaisy-Paket wird zum Hinzufügen oder Entfernen von Rezepten in die Botania Pure Daisy verwendet.

## Anruf

Sie können das PureDaisy-Paket mit `mods.botania.PureDaisy` aufrufen

## Alle registrierten Rezepte finden

Sie können alle registrierten Pure Daisy Rezepte mit [`/ct botania daisy`](/Mods/Modtweaker/Botania/Commands/) finden.

## Rezeptzusatz

Die Zeit ist standardmäßig 150 Ticks

```zenscript
//mods.botania.PureDaisy.addRecipe(IIngredient blockInput, IItemStack blockOutput, @Optional int time);
mods.botania.PureDaisy.addRecipe(<minecraft:dirt>,<minecraft:grass>);
mods.botania.PureDaisy.addRecipe(<minecraft:planks>,<minecraft:grass>, 200);
```

## Rezept-Entfernung

```zenscript
//mods.botania.PureDaisy.removeRecipe(IIngrediente Ausgabe);
mods.botania.PureDaisy.removeRecipe(<minecraft:obsidian>);
```