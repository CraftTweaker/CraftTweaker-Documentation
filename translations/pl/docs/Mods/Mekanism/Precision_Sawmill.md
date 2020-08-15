# Precision Sawmill

Od Mekanism 9.7.0 można teraz zobaczyć wszystkie ciągi receptur Tartaku Precision przez polecenie `/ct mekrecipes tartak`

## Dodanie

```zenscript
mods.mekanism.sawmill.addRecipe(IIngredient inputStack, IItemStack outputStack, @Opcjonalny bonusOutput, @Opcjonalny podwójny bonusSzansa);

mods. ekanism.sawmill.addRecipe(<minecraft:bow>, <minecraft:stick> * 3, <minecraft:string> * 3, 0.5);
mods.mekanism.sawmill.addRecipe(<minecraft:torch>, <minecraft:stick>);
```

Od Mekanism 9.7.0 możliwe jest stosowanie IIngredients jako inputStack zamiast tylko IItemStacks.

Uwaga: Obecnie wszystko to jest w pętli nad różnymi możliwościami w java podczas dodawania zamiast tego musisz to zrobić w ZenScript. Obecnie w samych maszynach nie ma wbudowanego wsparcia dla składników składowych składowych czy też słownika.

## Usuwanie

```zenscript
mods.mekanism.sawmill.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack, @Optional IIngredient bonusOutput);

mods.mekanism.sawmill.removeRecipe(<minecraft:bed>, <minecraft:planks>, <minecraft:wool>);
mods.mekanism.sawmill.removeRecipe(<minecraft:planks:*>);
```

Określenie parametru wyjściowego usunie tylko konkretny przepis, który daje ten wyjście z tego wejścia. Pominięcie parametru wyjściowego usunie wszystkie przepisy, które może wytwarzać element wejściowy.

## Usuwanie wszystkich przepisów

Od Mekanism 9.7.0 można obecnie usunąć wszystkie przepisy o Tartaku Precision Tartak. (Wyłącza wszelkie przepisy dodane przez CraftTweaker)

```zenscript
mods.mekanism.sawmill.removeAllRecipes();
```