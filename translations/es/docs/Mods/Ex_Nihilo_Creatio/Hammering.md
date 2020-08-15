# Hammering

## Paquete
```zenscirpt
`mods.exnihilocreatio.Hammer`
```

## Métodos

- **[entrada](/Vanilla/Variable_Types/IIngredient/) IIngrediente** El bloque que debe romperse.
- **[ItemStack](/Vanilla/Items/IItemStack/) salida** El elemento que el bloque suelta cuando está roto.
- **Int tool level** tool level for breaking the block.
- **Probabilidad flotante** de probabilidad entre 0-1.
- **Probabilidad fortune flota** de probabilidad entre 0-1.

## Adicional

```zenscript
mods.exnihilocreatio.Hammer.addRecipe(IIngredient, ItemStack, Int, Float, Float);

mods.exnihilocreatio.Hammer.addRecipe(<minecraft:log>, <minecraft:plank>, 0, 0.25, 0.5);
```

## Eliminar

```zenscript
mods.exnihilocreatio.Hammer.removeAll();
```
