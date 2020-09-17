# Ołtarz Runy

Pakiet Runeołtarza jest używany do dodawania lub usuwania przepisów do/z Altarza Ruy Botanicznej.

## Dzwonienie

Możesz wywołać pakiet RuneAltar używając `mods.botania.Runeołtar`

## Znajdź wszystkie zarejestrowane przepisy

Wszystkie zarejestrowane przepisy na ołtarzu Rune można znaleźć używając [`/ct botania`](/Mods/Modtweaker/Botania/Commands/).

## Dodanie przepisu

```zenscript
//mods.botania.RuneAltar.addRecipe(wyjście IItemStack, IIngredient[] wejścia, int mana);
mods.botania.RuneAltar.addRecipe(<minecraft:planks>,[<minecraft:grass>, <minecraft:dirt>], 200);
```

## Usuwanie przepisów

```zenscript
//mods.botania.RuneAltar.removeRecipe(IIngredient output);
mods.botania.RuneAltar.removeRecipe(<Botania:rune>);
```