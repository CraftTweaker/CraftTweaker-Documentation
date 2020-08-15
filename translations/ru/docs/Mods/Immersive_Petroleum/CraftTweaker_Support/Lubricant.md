# Регистрация смазки

## регистрЛюбрикант

| Тип     | Тип данных                                   |
| ------- | -------------------------------------------- |
| Input   | [Fluidstack](/Vanilla/Liquids/ILiquidStack/) |
| мБ/4тик | Целое                                        |

### Пример кода:

```zenscript
mods.immersivepetroleum.Lubricant.registerLubricant(ILiquidStack lubricantEntry, int amount);
mods.immersivepetroleum.Lubricant.registerLubricant(<liquid:lava>, 500);
```