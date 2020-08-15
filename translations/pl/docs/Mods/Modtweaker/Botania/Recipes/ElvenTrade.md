# Handel Elven

Pakiet ElvenTrade jest używany do dodawania lub usuwania przepisów do/z portalu Botanicznego do Alfheim.

## Dzwonienie

Możesz wywołać pakiet ElvenTrade używając `mods.botania.ElvenTrade`

## Znajdź wszystkie zarejestrowane przepisy

Wszystkie zarejestrowane przepisy ElvenTrade można znaleźć za pomocą [`/ct botania trades`](/Mods/Modtweaker/Botania/Commands/).

## Dodanie przepisu

```zenscript
//mods.botania.ElvenTrade.addRecipe(IIngredient[] wyjścia IIngredient[] wejścia);
mods.botania.ElvenTrade.addRecipe([<minecraft:iron_ingot>], [<minecraft:dirt>,<minecraft:grass>]);
```

## Usuwanie przepisów

```zenscript
//mods.botania.ElvenTrade.removeRecipe(IIngredient output);
mods.botania.ElvenTrade.removeRecipe(<Botania:dreamwood>);
```