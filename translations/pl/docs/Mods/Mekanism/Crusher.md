# Kruszący

Od Mekanism 9.7.0 można teraz zobaczyć wszystkie ciągi receptur Crushera przez polecenie `/ct mekrecipes crusher`

## Dodanie

```zenscript
mods.mekanism.crusher.addRecipe(IIngredient inputStack, IItemStack outputStack);

mods.mekanism.crusher.addRecipe(<minecraft:double_plant:4>, <minecraft:dye:1> * 5);
```

Od Mekanism 9.7.0 możliwe jest stosowanie IIngredients jako inputStack zamiast tylko IItemStacks.

Uwaga: Obecnie wszystko to jest w pętli nad różnymi możliwościami w java podczas dodawania zamiast tego musisz to zrobić w ZenScript. Obecnie w samych maszynach nie ma wbudowanego wsparcia dla składników składowych składowych czy też słownika.

## Usuwanie

```zenscript
mods.mekanism.crusher.removeRecipe(IIngredient outputStack, @Optional IIngredient inputStack);

mods.mekanism.crusher.removeRecipe(<minecraft:sand>, <minecraft:gravel>);
mods.mekanism.crusher.removeRecipe(<minecraft:gravel>);
```

Określenie parametru wejściowego usunie tylko konkretny przepis, który wykorzystuje dane wejściowe. Odrzucenie parametru wejściowego usunie wszystkie receptury, które wytwarzają dane wyjściowe.

## Usuwanie wszystkich przepisów

Od Mekanism 9.7.0 można obecnie usunąć wszystkie przepisy Crusher. (Wyłącza wszelkie przepisy dodane przez CraftTweaker)

```zenscript
mods.mekanism.crusher.removeAllRecipes();
```