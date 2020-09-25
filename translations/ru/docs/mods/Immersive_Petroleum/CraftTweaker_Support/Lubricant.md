# Регистрация смазки

## зарегистрироваться

| Тип   | Тип данных                                  |
| ----- | ------------------------------------------- |
| Input | [Fluidstack](/Vanilla/Liquids/IFluidStack/) |

### Предисловие

Количество жидкости используется каждые 4 билета.

### Пример кода:
```zenscript
mods.immersivepetroleum.Lubricant.register(IFluidStack lubricantEntry);
mods.immersivepetroleum.Lubricant.register(<fluid:lava> * 500);
```

## удалить все

### Пример кода:
```zenscript
mods.immersivepetroleum.Lubricant.removeAll();
```
