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
### containsOther

Checks if this IFluidStack, contains the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

 Returns: `true if this fluid contains the other fluid`

Return type: boolean

```zenscript
myIFluidStack.containsOther(other as crafttweaker.api.fluid.IFluidStack);
```

| Параметр | Тип                                                                  | Description                          |
| -------- | -------------------------------------------------------------------- | ------------------------------------ |
| other    | [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) | other IFluidStack to compare against |


### copy

Copies the stack. Only needed when mutable stacks are involved.

 Returns: `A new stack, that contains the same info as this one`

Возвратный тип: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### изменяемый

Makes this stack mutable

 Returns: `A new Stack, that is mutable.`

Возвратный тип: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.mutable();
```

### setAmount

Sets the fluid amount in MilliBuckets (mB)

 Возвращается: `Новый стек или этот стек, в зависимости от того, является ли этот стек мутируемым`

Возвратный тип: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(amount as int);
myIFluidStack.setAmount(1000);
```

| Параметр | Тип | Description                       |
| -------- | --- | --------------------------------- |
| amount   | int | The amount to multiply this stack |



## Свойства

| Название      | Тип                                                                              | Имеет Getter | Имеет Setter |
| ------------- | -------------------------------------------------------------------------------- | ------------ | ------------ |
| amount        | int                                                                              | true         | false        |
| commandString | String                                                                           | true         | false        |
| empty         | boolean                                                                          | true         | false        |
| fluid         | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)                     | true         | false        |
| registryName  | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true         | false        |

## Операторы
### MUL

Sets the fluid amount in MilliBuckets (MB)

 Возвращается: `Новый стек или этот стек, в зависимости от того, является ли этот стек мутируемым`

```zenscript
myIFluidStack * amount as int
myIFluidStack * 1000
```

| Параметр | Тип | Description                       |
| -------- | --- | --------------------------------- |
| amount   | int | The amount to multiply this stack |
### CONTAINS

Checks if this IFluidStack, contains the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

 Returns: `true if this fluid contains the other fluid`

```zenscript
myIFluidStack in other as crafttweaker.api.fluid.IFluidStack
```

| Параметр | Тип                                                                  | Description                          |
| -------- | -------------------------------------------------------------------- | ------------------------------------ |
| other    | [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) | other IFluidStack to compare against |

