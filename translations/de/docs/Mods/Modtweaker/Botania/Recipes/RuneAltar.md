# Rune Altar

Das RuneAltar Paket wird zum Hinzufügen oder Entfernen von Rezepten zum Botania Rune Altar.

## Anruf

Du kannst das RuneAltar-Paket mit `mods.botania.RuneAltar` aufrufen

## Alle registrierten Rezepte finden

Du kannst alle registrierten Rune Altar Rezepte mit [`/ct botania altar`](/Mods/Modtweaker/Botania/Commands/) finden.

## Rezeptzusatz

```zenscript
//mods.botania.RuneAltar.addRecipe(IItemStack Ausgabe, IIngredient[] Eingabe, int Mana);
mods.botania.RuneAltar.addRecipe(<minecraft:planks>,[<minecraft:grass>, <minecraft:dirt>], 200);
```

## Rezept-Entfernung

```zenscript
//mods.botania.RuneAltar.removeRecipe(IIngredient output);
mods.botania.RuneAltar.removeRecipe(<Botania:rune>);
```