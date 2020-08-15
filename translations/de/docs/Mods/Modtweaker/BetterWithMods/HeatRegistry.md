# Hitzeregistry

Die HeatRegistry erlaubt es, einem Block, der mit dem Cauldron, Crucible und Ofen interagiert, einen ganzzahligen Wert zuzuweisen.

* Default Values: Vanilla fire | 1 Stoked Fire | 2

# Eine Hitzequelle hinzufügen

```zenscript
//Stack muss einen asssoziierten Blockzustand haben.
mods.betterwithmods.HeatRegistry.addHeatSource(IItemStack stack, int heat);

mods.betterwithmods.HeatRegistry.addHeatSource(IBlockState stack, int heat);

```