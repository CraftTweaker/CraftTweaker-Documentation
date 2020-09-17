# Komora Reakcji ciśnieniowej

Od Mekanism 9.7. możliwe jest teraz wyświetlenie wszystkich ciągów receptur w komorze Reakcji ciśnieniowej przez polecenie `/ct mekrecipes prc`

## Dodanie

```zenscript
mods.mekanism.reaction.addRecipe(IInputInput. ILiquidStack liquidInput, IGasStack gasInput, IItemStack itemOutput, IGasStack gasput, podwójna energia, czas trwania);

mods. ekanism.reaction.addRecipe(<mekanism:polyethene>, <liquid:liquidethene>, <gas:oxygen>, <mekanism:polyethene> * 8, <gas:oxygen>, 50000, 2000);
```

Od Mekanism 9.7.0 możliwe jest użycie ISkładników jako produktu zamiast tylko IItemStacks.

Uwaga: Obecnie wszystko to jest w pętli nad różnymi możliwościami w java podczas dodawania zamiast tego musisz to zrobić w ZenScript. Obecnie w samych maszynach nie ma wbudowanego wsparcia dla składników składowych składowych czy też słownika.

## Usuwanie

```zenscript
mods mods.mekanism.reaction.removeRecipe(ISkładnik Produkt, ISkładnik Gazu-Wyjście Produktu, @Opcjonalny ISkładnik ElementInput, @Opcjonalny składnik płynny ISkładnika, @Opcjonalny gaz z ISkładnika);

mods. ekanism.reaction.removeRecipe(<mekanism:substrate>, <gas:ethene>, <mekanism:biofuel>, <liquid:water>, <gas:hydrogen>);
mods.mekanism.reaction.removeRecipe(<mekanism:polyethene>, <gas:oxygen>);
```

Określenie parametru wejściowego usunie tylko konkretny przepis, który wykorzystuje dane wejściowe. Odrzucenie parametru wejściowego usunie wszystkie receptury, które wytwarzają dane wyjściowe.

## Usuwanie wszystkich przepisów

Począwszy od Mekanism 9.7.0 można obecnie usunąć wszystkie przepisy komory reakcyjnej ciśnieniowej. (Wyłącza wszelkie przepisy dodane przez CraftTweaker)

```zenscript
mods.mekanism.reaction.removeAllRecipes();
```