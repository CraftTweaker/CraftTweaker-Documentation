# Komora Oczyszczania

Od Mekanism 9.7.0 można teraz zobaczyć wszystkie ciągi receptur Komory Oczyszczenia poprzez polecenie `/ct mekrecipes oczyszczanie`

## Dodanie

```zenscript
mods.mekanism.purification.addRecipe(IIngredient itemInput, @Optional IGasStack gasInput, IItemStack itemOutput);

mods.mekanism.purification.addRecipe(<minecraft:wool:1>, <gas:hydrogenchloride>, <minecraft:wool>);
mods.mekanism.purification.addRecipe(<minecraft:coal:1>, <minecraft:coal>);
```

Od Mekanism 9.7.0 inputGas nie jest już ograniczony tylko do tlenu

Również od Mekanism 9.7.0 możliwe jest użycie ISkładników jako produktu zamiast tylko IItemStacks.

Uwaga: Obecnie wszystko to jest w pętli nad różnymi możliwościami w java podczas dodawania zamiast tego musisz to zrobić w ZenScript. Obecnie w samych maszynach nie ma wbudowanego wsparcia dla składników składowych składowych czy też słownika.

## Usuwanie

```zenscript
mods.mekanism.purification.removeRecipe(ISkładnik itemOutput, @Optional IIngredient itemInput, @Optional IIngredient gasInput);

mods.mekanism.purification.removeRecipe(<mekanism:clump:2>, <mekanism:shard:2>, <gas:oxygen>);
mods.mekanism.purification.removeRecipe(<mekanism:clump:1>);
```

Określenie parametru wejściowego usunie tylko konkretny przepis, który wykorzystuje dane wejściowe. Odrzucenie parametru wejściowego usunie wszystkie receptury, które wytwarzają dane wyjściowe.

## Usuwanie wszystkich przepisów

Od Mekanism 9.7.0 można obecnie usunąć wszystkie przepisy komory oczyszczania. (Wyłącza wszelkie przepisy dodane przez CraftTweaker)

```zenscript
mods.mekanism.purification.removeAllRecipes();
```