# SAG Mill

## Paquete

`importar mods.enderio.SagMill;`

## Métodos

- **[ItemStack](/Vanilla/Items/IItemStack/)[] salida** Los resultados de la receta.
- **posibilidades float[]** La probabilidad de que este objeto aparezca. Debe tener la misma longitud que la salida.
- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/) entrada** La entrada.
- **Bonificación de cadena** Esto impacta cómo funcionan las bolas de molienda. Puede no ser NINGUNA (sin bono), MULTIPLY_OUTPUT (puede aumentar la probabilidad > 1.0), y CHANCE_ONLY (probabilidad de límite a 1.0).
- **int energyCost** Cuánto utiliza la receta. Por defecto es 5000.
- **xp decimal** El xp se concede de esta receta. Puede no ser negativo.

## Adicional

```zenscript
mods.enderio.SagMill.addRecipe(IItemStack[] salida, posibilidades flotantes[], entrada IIngredient, bonusType @Optional String, @Optional int energyCost, @Optional int float[] xp);

mods.enderio.SagMill.addRecipe([<minecraft:planks>], [100], <minecraft:log>);
```

## Eliminar

```zenscript
mods.enderio.SagMill.removeRecipe(entrada IItemStack);

mods.enderio.SagMill.removeRecipe(<minecraft:cobblestone>);
```