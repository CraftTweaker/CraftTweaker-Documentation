# Rejestracja smaru

## zarejestruj

| Typ   | Typ danych                                  |
| ----- | ------------------------------------------- |
| Input | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

### Preface

Ilość podawanego płynu jest używana co 4 kliknięcia.

### Przykład kodu:
```zenscript
mods.immersiveoilum.Lubricant.register(IFluidStack LubricantEntry);
mods.immersiveoilum.Lubricant.register(<fluid:lava> * 500);
```

## usuń wszystko

### Przykład kodu:
```zenscript
mods.immersivepetroleum um.Lubricant.removeAll();
```
