# Elfenhandel

Das ElvenTrade Paket wird zum Hinzufügen oder Entfernen von Rezepten nach/vom Botania Portal nach Alfheim verwendet.

## Anruf

Sie können das ElvenTrade-Paket mit `mods.botania.ElvenTrade` anrufen

## Alle registrierten Rezepte finden

Alle registrierten ElvenTrade-Rezepte finden Sie unter [`/ct botania trades`](/Mods/Modtweaker/Botania/Commands/).

## Rezeptzusatz

```zenscript
//mods.botania.ElvenTrade.addRecipe(IIngredient[] Ausgaben, IIngredient[] Eingabe);
mods.botania.ElvenTrade.addRecipe([<minecraft:iron_ingot>], [<minecraft:dirt>,<minecraft:grass>]);
```

## Rezept-Entfernung

```zenscript
//mods.botania.ElvenTrade.removeRecipe(IIngredient output);
mods.botania.ElvenTrade.removeRecipe(<Botania:dreamwood>);
```