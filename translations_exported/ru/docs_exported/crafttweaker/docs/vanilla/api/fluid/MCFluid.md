# MCFluid

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.fluid.MCFluid
```

## Implemented Interfaces
MCFluid реализует следующие интерфейсы. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### makeStack

Создает новый [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) с заданным количеством жидкости.

 Возвращается: `новый (неизменяемый) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

Возвратный тип: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myMCFluid.makeStack(сумма как int);
myMCFluid.makeStack(1000);
```

| Параметр | Тип | Description          |
| -------- | --- | -------------------- |
| amount   | int | Описание отсутствует |



## Свойства

| Название      | Тип    | Имеет Getter | Имеет Setter |
| ------------- | ------ | ------------ | ------------ |
| commandString | String | true         | false        |

## Операторы
### MUL

Создает новый [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) с заданным количеством жидкости.

 Возвращается: `новый (неизменяемый) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

```zenscript
myMCFluid * сумма как int
myMCFluid * 1000
```

| Параметр | Тип | Description          |
| -------- | --- | -------------------- |
| amount   | int | Описание отсутствует |

