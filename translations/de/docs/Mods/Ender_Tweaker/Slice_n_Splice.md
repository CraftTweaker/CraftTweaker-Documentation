# Slice 'n' Kopplung

## Paket

`importieren mods.enderio.SliceNSplice;`

## Methoden

**- [IItemStack](/Vanilla/Items/IItemStack/) Ausgabe** Das Ergebnis des Rezeptes.

**- [IIngredient](/Vanilla/Variable_Types/IIngredient/)[] Eingabe** Die Zutaten. Muss zwischen 1 und 6 Zutaten sein.

**- Int Energie Kosten** Wie viel FE das Rezept verwendet. Standard ist 5000.

**- float xp** Die xp wird aus diesem Rezept vergeben. Darf nicht negativ sein.

## Addition

```zenscript
mods.enderio.SliceNSplice.  
addRecipe(IItemStack Ausgabe, IIngredient[] Eingabe, @Optional int energyCost, @Optional float xp);

mods.enderio.SliceNSplice.  
addRecipe(<minecraft:emerald>, [<minecraft:diamond>, <minecraft:gold_ingot>, <minecraft:iron_ingot>], 5000, 0);
```

## Entfernen

```zenscript
mods.enderio.SliceNSplice.removeRecipe(IItemStack Ausgabe);

mods.enderio.SliceNSplice.removeRecipe(<enderio:block_enderman_skull:2>);
```