# Kombinacja

Od Mekanism 9.7.0 jest teraz możliwe wyświetlenie wszystkich ciągów receptur kombinacji przez kombinator poleceń `/ct mekrecipes`

## Dodanie

```zenscript
mods.mekanism.combiner.addRecipe(IIngredient itemInput, @Optional IIngredient extraInputt, IItemStack itemOutput);

mods.mekanism.combiner.addRecipe(<minecraft:stone> * 4, <minecraft:cobblestone>, <minecraft:stonebrick>);
mods.mekanism.combiner.addRecipe(<minecraft:torch> * 4, <minecraft:stick>);
```

Począwszy od Mekanism 9.7.0 możliwe jest użycie ISkładników jako produktu wejścia i ekstraInput zamiast tylko IItemStacks.

Uwaga: Obecnie wszystko to jest w pętli nad różnymi możliwościami w java podczas dodawania zamiast tego musisz to zrobić w ZenScript. Obecnie w samych maszynach nie ma wbudowanego wsparcia dla składników składowych składowych czy też słownika.

## Usuwanie

```zenscript
mods.mekanism.combiner.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack, @Optional IIngredient extraInput);

mods.mekanism.combiner.removeRecipe(<minecraft:gravel>, <minecraft:flint>, <minecraft:cobblestone>);
mods.mekanism.combiner.removeRecipe(<minecraft:iron_ore>);
```

Określenie parametru wejściowego usunie tylko konkretny przepis, który wykorzystuje dane wejściowe. Odrzucenie parametru wejściowego usunie wszystkie receptury, które wytwarzają dane wyjściowe.

## Usuwanie wszystkich przepisów

Od Mekanism 9.7.0 można obecnie usunąć wszystkie przepisy łącznika. (Wyłącza wszelkie przepisy dodane przez CraftTweaker)

```zenscript
mods.mekanism.combiner.removeAllRecipes();
```