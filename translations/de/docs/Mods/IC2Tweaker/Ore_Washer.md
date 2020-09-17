# Erzwäscher

## Paket

`importieren mods.ic2.OreWasher;`

## Methoden

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) Eingabe**
- **@Optional int water** Amount of water required for one round of processing of this recipe, measured in mB. Standardwert 1000 wenn nicht angegeben.

## Addition

```zenscript
mods.ic2.OreWasher.addRecipe(IItemStack[] Ausgänge, Ingrediente Eingabe, @Optionales Int-Wasser);

mods.ic2.OreWasher.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Entfernen

- Wenn Ic2 Experimental verwendet wird, um ein Rezept zu entfernen, entfernen Sie einfach die entsprechende Zeile in `config/ic2/ore_washer.ini`
- Wenn Ic2 Classic und Ic2c Extras verwendet werden, um ein Rezept zu entfernen, deaktivieren Sie einfach das entsprechende Rezept in `config/ic2/ic2machineRecipes.json`.