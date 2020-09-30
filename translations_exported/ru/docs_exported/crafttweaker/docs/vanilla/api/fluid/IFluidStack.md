# IFluidStack

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.fluid.IFluidStack
```

## Implemented Interfaces
IFluidStack реализует следующие интерфейсы. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### copy

Копирует стек. Необходимы только тогда, когда задействованы мутирующие стеки.

 Возвращается: `Новый стек, содержащий ту же информацию, что и данный`

Возвратный тип: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### изменяемый

Делает этот стек мутации

 Возвращается: `Новый Стек, который является мутным.`

Возвратный тип: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.mutable();
```

### setAmount

Задает количество жидкости в вехах (MB)

 Возвращается: `Новый стек или этот стек, в зависимости от того, является ли этот стек мутируемым`

Возвратный тип: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(сумма как int);
myIFluidStack.setAmount(1000);
```

| Параметр | Тип | Description              |
| -------- | --- | ------------------------ |
| amount   | int | Сумма умножить этот стек |



## Свойства

| Название      | Тип                                                          | Имеет Getter | Имеет Setter |
| ------------- | ------------------------------------------------------------ | ------------ | ------------ |
| commandString | String                                                       | true         | false        |
| fluid         | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid) | true         | false        |

## Операторы
### MUL

Задает количество жидкости в вехах (MB)

 Возвращается: `Новый стек или этот стек, в зависимости от того, является ли этот стек мутируемым`

```zenscript
myIFluidStack * сумма как int
myIFluidStack * 1000
```

| Параметр | Тип | Description              |
| -------- | --- | ------------------------ |
| amount   | int | Сумма умножить этот стек |

