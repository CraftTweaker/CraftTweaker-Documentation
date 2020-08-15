# HeatRegistry

HeatRegistry позволяет присвоить целочисленное значение блоку, который взаимодействует с котлом, Котлом и Килном.

* Значения по умолчанию: Vanilla fire | 1 Stoked Fire | 2

# Добавление источника тепла

```zenscript
//стек должен иметь пораженное состояние блока.
mods.betterwithmods.HeatRegistry.addHeatSource(IItemStack, int heat);

mods.betterwithmods.HeatRegistry.addHeatSource(IBlockState stack, int heat);

```