# Zablokuj rozcięcie

## Pakiet

`importuj mods.ic2.BlockCutter;`

## Metody

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście**
- **@Optional int twardość** Minimalne wymagania twardości ostrza.

## Dodanie

```zenscript
mods.ic2.BlockCutter.addRecipe(wyjście IItemStack, IIngredient input, @Optional int hardness default 0);

mods.ic2.BlockCutter.addRecipe(<minecraft:diamond>, <minecraft:dirt>);
```

## Usuwanie

Na razie po prostu usuń odpowiedni wiersz w `config/ic2/block_cutter.ini`.