# Heat Sources

A class to configure valid block states that can serve as heat sources to replace the burner or fluid heaters.

## Import
```zenscript
import mods.foundry.Heating;
```

## Methoden
```zenscript
// Adds a block state with provided temperature level to the heat source list
// Don't forget to add all the states of a block if necessary!
Heating.addStateSource(IBlockState state, int heat);
```
