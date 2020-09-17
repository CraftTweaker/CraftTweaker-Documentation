# Wycinek 'n'

## Pakiet

`import mods.enderio.SliceNSplice;`

## Metody

**- [IItemStack](/Vanilla/Items/IItemStack/) wyjście** wynik przepisu.

**- [Składnik](/Vanilla/Variable_Types/IIngredient/)[] wejścia** Składniki. Musi zawierać od 1 do 6 składników.

**- int energyCost** Ile FE używa receptury. Domyślnie 5000.

**- float xp** xp jest przyznany z tego przepisu. Nie może być negatywny.

## Dodanie

```zenscript
mods.enderio.SliceNSplice.  
addRecipe(IItemStack output, IIngredient[] input, @Optional int energyCost, @Optional float xp);

mods.enderio.SliceNSplice.  
addRecipe(<minecraft:emerald>, [<minecraft:diamond>, <minecraft:gold_ingot>, <minecraft:iron_ingot>], 5000, 0);
```

## Usuwanie

```zenscript
mods.enderio.SliceNSplice.removeRecipe(IItemStack output);

mods.enderio.SliceNSplice.removeRecipe(<enderio:block_enderman_skull:2>);
```