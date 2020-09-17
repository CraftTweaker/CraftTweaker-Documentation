# Komora rozpuszczania chemicznego

Od Mekanism 9.7. możliwe jest teraz wyświetlenie wszystkich ciągów przepisów Komory Rozwiązań Chemicznych poprzez polecenie `/ct mekrecipes dissolution`

## Dodanie

```zenscript
mods.mekanism.chemical.dissolution.addRecipe(IIngredient inputStack, IGasStack outputGas);

mods.mekanism.chemical.dissolution.addRecipe(<minecraft:ice>, <gas:water>);
```

Od Mekanism 9.7.0 możliwe jest stosowanie IIngredients jako inputStack zamiast tylko IItemStacks.

Uwaga: Obecnie wszystko to jest w pętli nad różnymi możliwościami w java podczas dodawania zamiast tego musisz to zrobić w ZenScript. Obecnie w samych maszynach nie ma wbudowanego wsparcia dla składników składowych składowych czy też słownika.

## Usuwanie

```zenscript
mods.mekanism.chemical.dissolution.removeRecipe(IIngredient outputGas, @Optional IIngredient inputStack);

mods.mekanism.chemical.dissolution.removeRecipe(<gas:osmium>, <mekanism:oreblock>);
mods.mekanism.chemical.dissolution.removeRecipe(<gas:tin>);
```

Określenie parametru wejściowego usunie tylko konkretny przepis, który wykorzystuje dane wejściowe. Odrzucenie parametru wejściowego usunie wszystkie receptury, które wytwarzają dane wyjściowe.

## Usuwanie wszystkich przepisów

Począwszy od Mekanism 9.7.0 można obecnie usunąć wszystkie przepisy komory rozpuszczania chemicznego. (Wyłącza wszelkie przepisy dodane przez CraftTweaker)

```zenscript
mods.mekanism.chemical.dissolution.removeAllRecipes();
```