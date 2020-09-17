# Resonador

ModTweaker te permite añadir o eliminar recetas de Resonador Extra 2

## Llamando

Puedes llamar al paquete Resonator usando `mods.extrautils2.Resonator`

## Eliminando

```zenscript
//mods.extrautils2.Resonator.remove(IItemStack out);
mods.extrautils2.Resonator.remove(<minecraft:redstone>);
```

## Adicional

```zenscript
<br /><br />//1 GP = 100 energy
//mods.extrautils2.Resonator.add(IItemStack output, IItemStack input, int energy, @Optional boolean addOwnerTag);
mods.extrautils2.Resonator.add(<minecraft:redstone_block>, <minecraft:gold_block>, 100);
mods.extrautils2.Resonator.add(<minecraft:gold_block>, <minecraft:iron_block>, 200, false);
```