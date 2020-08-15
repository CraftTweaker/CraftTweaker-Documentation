# Cortador de bloques

## Paquete

`importar mods.ic2.BlockCutter;`

## Métodos

- **[IItemStack](/Vanilla/Items/IItemStack/) output**
- **[entrada IIngrediente](/Vanilla/Variable_Types/IIngredient/)**
- **@Dureza opcional de los int** Requisitos mínimos de dureza para la hoja.

## Adicional

```zenscript
mods.ic2.BlockCutter.addRecipe(salida IItemStack, entrada IIngrediente, @Dulidad opcional int por defecto 0);

mods.ic2.BlockCutter.addRecipe(<minecraft:diamond>, <minecraft:dirt>);
```

## Eliminar

Por ahora, simplemente elimine la línea correspondiente en `config/ic2/block_cutter.ini`.