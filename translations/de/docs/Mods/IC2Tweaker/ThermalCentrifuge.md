# Thermische Zentrifuge

## Paket

`importieren mods.ic2.ThermalCentrifuge;`

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Eingabe**
- **@Optionales Int minder Hitze**

## Addition

```zenscript
mods.ic2.ThermalCentrifuge.addRecipe([IItemStack[] Ausgänge, IIngrediente Eingabe, @Optional int minHeat);

mods.ic2.ThermalCentrifuge.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Entfernen

- Wenn Ic2 Experimental verwendet wird, um ein Rezept zu entfernen, entfernen Sie einfach die entsprechende Zeile in `config/ic2/thermal_centrifuge.ini`
- Wenn Ic2 Classic und Ic2c Extras verwendet werden, um ein Rezept zu entfernen, deaktivieren Sie einfach das entsprechende Rezept in `config/ic2/ic2machineRecipes.json`.