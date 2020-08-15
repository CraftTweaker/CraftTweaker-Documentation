# Registre de chaleur

Le HeatRegistry permet d'assigner une valeur entière à un bloc qui interagit avec le chaudron, la Crucible et le four.

* Default Values: Vanilla fire | 1 Stoked Fire | 2

# Ajouter une source de chaleur

```zenscript
//stack doit avoir un état de bloc asssocié.
mods.betterwithmods.HeatRegistry.addHeatSource(IItemStack stack, int heat);

mods.betterwithmods.HeatRegistry.addHeatSource(IBlockState stack, int heat);

```