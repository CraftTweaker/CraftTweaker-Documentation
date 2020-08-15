# Mena desperdiciada

## Paquete

`importar mods.ic2.OreWasher;`

## Métodos

- **[IItemStack](/Vanilla/Items/IItemStack/)[] outputs**
- **[entrada IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **@Optional int water** Amount of water required for one round of processing of this recipe, measured in mB. Por defecto a 1000 si no se da.

## Adicional

```zenscript
mods.ic2.OreWasher.addRecipe(ItemStack[] salidas, entrada IIngrediente, @agua int opcional);

mods.ic2.OreWasher.addRecipe([<minecraft:diamond>, <minecraft:emerald>, <minecraft:nether_star>], <minecraft:dirt>);
```

## Eliminar

- Si usas Ic2 Experimental, para remover una receta, simplemente elimina la línea correspondiente en `config/ic2/ore_washer.ini`
- Si usas Ic2 Classic e Ic2c Extras, simplemente desactiva la receta correspondiente en `config/ic2/ic2machineRecipes.json`.