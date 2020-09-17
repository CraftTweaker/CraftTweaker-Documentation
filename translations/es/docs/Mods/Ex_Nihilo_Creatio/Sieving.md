# Sieving

## Paquete

Para acceder a `Sieve` sin aclarar la ruta completa, puede importar el paquete en la parte superior de su Script con lo siguiente:

```zenscript
mods.exnihilocreatio.SieveSieve;
```

## Metodos

- **[IIngrediente](/Vanilla/Variable_Types/IIngredient/) bloque** El bloque que suelta la salida.
- **[ItemStack](/Vanilla/Items/IItemStack/) salida** El elemento que cae del bloque..
- **Probabilidad flotante** La probabilidad debe estar entre 0-1.

## Malla de cuerda

```zenscript
addFlintMeshRecipe(IIngredient, IItemStack, Float chance);
addFlintMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.01);
```

## Malla de Flint

```zenscript
addIronMeshRecipe(IIngredient, IItemStack, Float chance);
addIronMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 0.1);
```

## Malla de hierro

```zenscript
addDiamondMeshRecipe(IIngredient, IItemStack, Float chance);
addDiamondMeshRecipe(<minecraft:gravel>, <minecraft:diamond>, 1);
```

## Malla de Diamante

```zenscript
mods.exnihilocreatio.Sieve.removeAll();
```

## Eliminar

```zenscript
Sieve.removeAll();
```
