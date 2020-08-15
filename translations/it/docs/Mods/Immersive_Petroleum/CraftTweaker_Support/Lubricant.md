# Registrazione Lubrificante

## registerLubrificante

| Tipo     | Tipo Di Dati                                 |
| -------- | -------------------------------------------- |
| Input    | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/4tick | Intero                                       |

### Esempio Di Codice:

```zenscript
mods.immersivepetroleum.Lubricant.registerLubricant(ILiquidStack lubricantEntry, int amount);
mods.immersivepetroleum.Lubricant.registerLubricant(<liquid:lava>, 500);
```