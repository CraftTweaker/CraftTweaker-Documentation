# Tablica do krojenia

Tablica Chopping pozwala na wrzucenie przedmiotu do wielu części innego przedmiotu.

Domyślnie cięto chleb tylko na 6 kawałków.

## Usuwanie przepisów o kropkach

## Usuń pasujące przepisy.

```zenscript
mods.cfm.ChoppingBoard.remove(@Optional final IIngredient output, @Optional final IIngredient input);

// Usuń przepis z chleba jako element wejściowy
mods.cfm.ChoppingBoard. emove(null,<minecraft:bread>);
// Usuń przepisy, które dają 6 kawałków chleba (takie same jak powyżej receptury, więc nie będą miały żadnego efektu, jeśli zostaną użyte po)
modów. fm.ChoppingBoard.remove(<cfm:item_bread_slice>.withKwot(6));
```

## Dodawanie przepisów o kropce

Dodaj przepis na kropkę.

## Wejście wymaga rozmiaru stosu 1.

```zenscript
mods.cfm.ChoppingBoard.addRecipe(@Nonnull final wyjście IItemStack, @Nonnull final IItemStack);

// Dodaj przepis aby wyciąć pszenicę na 2 kijki
mods.cfm.ChoppingBoard. ddRecipe(<minecraft:stick>.withAmount(2),<minecraft:wheat>);
// Dodaj przepis na chleb do 3 pszenicy
mods.cfm.ChoppingBoard.addRecipe(<minecraft:wheat>.withAmount(3),<minecraft:bread>);
```