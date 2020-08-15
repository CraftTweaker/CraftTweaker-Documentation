# Registro Lubricante

## registrador Lubricant

| Tipo     | Tipo de Datos                                |
| -------- | -------------------------------------------- |
| Input    | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| mB/4tick | Entero                                       |

### Ejemplo de código:

```zenscript
mods.immersivepetroleum.Lubricant.registerLubricant(ILiquidStack lubricantEntry, int amount);
mods.immersivepetroleum.Lubricant.registerLubricant(<liquid:lava>, 500);
```