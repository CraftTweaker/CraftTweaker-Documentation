# Centrifuge térmico

## Paquete

`importar mods.ic2.ThermalCentrifuge;`

## Métodos

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[entrada IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **@Opcional int minHeat**

## Adicional

```zenscript
mods.ic2.ThermalCentrifuge.addRecipe([ItemStack[] salidas, entrada IIngredient, @Optional int minHeat);

mods.ic2.ThermalCentrifuge.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Eliminar

- Si usas Ic2 Experimental, para remover una receta, simplemente elimina la línea correspondiente en `config/ic2/thermal_centrifuge.ini`
- Si usas Ic2 Classic e Ic2c Extras, simplemente desactiva la receta correspondiente en `config/ic2/ic2machineRecipes.json`.