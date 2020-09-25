# Schmiermittelregistrierung

## registrieren

| Type  | Datentyp                                    |
| ----- | ------------------------------------------- |
| Input | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

### Vorwort

Die angegebene Menge an Flüssigkeit wird alle 4 Ticks verwendet.

### Beispielcode:
```zenscript
mods.immersivepetroleum.Lubricant.register(IFluidStack lubricantEntry);
mods.immersivepetroleum.Lubricant.register(<fluid:lava> * 500);
```

## alle entfernen

### Beispielcode:
```zenscript
mods.immersivepetroleum.Lubricant.removeAll();
```
