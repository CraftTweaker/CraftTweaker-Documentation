# Piec wielkopiecowy

## Pakiet

`import mods.ic2.BlastFurnace;`

## Metody

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[Składnik](/Vanilla/Variable_Types/IIngredient/) wejście**
- **int total alFluidCost** Per-tick skroplony koszt powietrza IC2, mierzony w mB/tick
- **int time** Całkowity koszt czasu, mierzony w tickach

## Dodanie

```zenscript
mods.ic2.BlastFurnace.addRecipe(IItemStack[] wyjścia IIngredient, int totalFluidCost, int time);

mods.ic2.BlastFurnace.addRecipe([<minecraft:diamond>, <minecraft:emerald>], <minecraft:dirt> * 64, 1, 1000);
```

## Usuwanie

Na razie po prostu usuń odpowiedni wiersz w `config/ic2/blast_furnace.ini`.