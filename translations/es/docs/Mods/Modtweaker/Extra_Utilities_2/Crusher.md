# Triturador

ModTweaker te permite añadir o eliminar recetas extra de triturador 2

## Llamando

Puedes llamar al paquete triturador usando `mods.extrautils2.Crusher`

## Eliminando

```zenscript
//mods.extrautils2.Crusher.remove(IItemStack out);
mods.extrautils2.Crusher.remove(<minecraft:redstone>);
```

## Adicional

```zenscript
//mods.extrautils2.Crusher.add(Salida de ItemStack, entrada de ItemStack ItemStack Opcional, @ItemStack secondaryOutput, @Optional float secondaryChance);
mods. xtrautils2.Crusher.add(<minecraft:gold_ingot> * 9, <minecraft:gold_block>, <minecraft:iron_ingot>, 0.1f);
mods.extrautils2.Crusher.add(<minecraft:iron_ingot> * 9, <minecraft:iron_block>);
```