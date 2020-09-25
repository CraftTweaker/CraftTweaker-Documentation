# Registrazione Lubrificante

## registrati

| Tipo  | Tipo Di Dati                                |
| ----- | ------------------------------------------- |
| Input | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

### Prefazione

La quantità di fluido fornita viene utilizzata ogni 4 Biglietti.

### Esempio Di Codice:
```zenscript
mods.immersivepetroleum.Lubricant.register(IFluidStack lubricantEntry);
mods.immersivepetroleum.Lubricant.register(<fluid:lava> * 500);
```

## removeAll

### Esempio Di Codice:
```zenscript
mods.immersivepetroleum.Lubricant.removeAll();
```
