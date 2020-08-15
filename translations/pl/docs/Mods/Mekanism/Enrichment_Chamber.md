# Komora wzbogacania

Od Mekanism 9.7.0 jest teraz możliwe oglądanie wszystkich ciągów receptur w komorze wzbogacania poprzez polecenie `/ct mekrecipes wzbogacanie`

## Dodanie

```zenscript
mods.mekanism.enrichment.addRecipe(IIngredient inputStack, IItemStack outputStack);

mods.mekanism.enrichment.addRecipe(<minecraft:coal_block>, <mekanism:compressedcarbon> * 9);
```

Od Mekanism 9.7.0 możliwe jest stosowanie IIngredients jako inputStack zamiast tylko IItemStacks.

Uwaga: Obecnie wszystko to jest w pętli nad różnymi możliwościami w java podczas dodawania zamiast tego musisz to zrobić w ZenScript. Obecnie w samych maszynach nie ma wbudowanego wsparcia dla składników składowych składowych czy też słownika.

## Usuwanie

```zenscript
mods.mekanism.enrichment.removeRecipe(IIngredient inputStack, @Optional IIngredient outputStack);

mods.mekanism.enrichment.removeRecipe(<minecraft:mossy_cobblestone>, <minecraft:cobblestone>);
mods.mekanism.enrichment.removeRecipe(<minecraft:stonebrick:1>);
```

Określenie parametru wyjściowego usunie tylko konkretny przepis, który daje ten wyjście z tego wejścia. Pominięcie parametru wyjściowego usunie wszystkie przepisy, które może wytwarzać element wejściowy.

## Usuwanie wszystkich przepisów

Począwszy od Mekanism 9.7.0 można obecnie usunąć wszystkie przepisy dotyczące komory wzbogacania. (Wyłącza wszelkie przepisy dodane przez CraftTweaker)

```zenscript
mods.mekanism.enrichment.removeAllRecipes();
```