# HeatRegistry

Il HeatRegistry permette di assegnare un valore intero ad un blocco che interagisce con il Cauldron, il Crogiolo e il Kiln.

* Valori predefiniti: Fuoco di vaniglia <unk> 1 Fuoco Stoccato <unk> 2

# Aggiungere una fonte di calore

```zenscript
//stack deve avere uno stato di blocco asssociato.
mods.betterwithmods.HeatRegistry.addHeatSource(IItemStack stack, int heat);

mods.betterwithmods.HeatRegistry.addHeatSource(IBlockState stack, int heat);

```