# Kompressor

## Paket

`importieren mods.ic2.Compressor;`

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Eingabe**

## Addition

```zenscript
mods.ic2.Compressor.addRecipe(IItemStack Ausgabe, IIngredient);

mods.ic2.Compressor.addRecipe(<minecraft:diamond_block>, <minecraft:dirt> * 64);
```

## Entfernen

- Wenn Ic2 Experimental verwendet wird, um ein Rezept zu entfernen, entfernen Sie einfach die entsprechende Zeile in `config/ic2/compressor.ini`
- Wenn Ic2 Classic verwendet wird, um ein Rezept zu entfernen, deaktivieren Sie einfach das entsprechende Rezept in `config/ic2/ic2machineRecipes.json`.