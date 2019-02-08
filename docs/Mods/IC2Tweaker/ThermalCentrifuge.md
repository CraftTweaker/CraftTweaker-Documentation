# Thermal Centrifuge

## Package
`import mods.ic2.ThermalCentrifuge;`

## Methods
- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[IIngredient](/Vanilla/Variable_Types/IIngredient/) input**
- **@Optional int minHeat**

## Addition
```
mods.ic2.ThermalCentrifuge.addRecipe([IItemStack[] outputs, IIngredient input, @Optional int minHeat);

mods.ic2.ThermalCentrifuge.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Removal

To remove an existed recipe, simply remove the corresponding line in config/ic2/thermal_centrifuge.ini.
