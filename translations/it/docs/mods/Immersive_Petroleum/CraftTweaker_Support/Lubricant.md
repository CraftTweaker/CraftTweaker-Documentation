# Lubricant Registration

## registrati

| Type  | Data Type                                   |
| ----- | ------------------------------------------- |
| Input | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

### Prefazione

La quantità di fluido fornita viene utilizzata ogni 4 Biglietti.

### Code Example:
```zenscript
mods.immersivepetroleum.Lubricant.register(IFluidStack lubricantEntry);
mods.immersivepetroleum.Lubricant.register(<fluid:lava> * 500);
```

## removeAll

### Code Example:
```zenscript
mods.immersivepetroleum.Lubricant.removeAll();
```
