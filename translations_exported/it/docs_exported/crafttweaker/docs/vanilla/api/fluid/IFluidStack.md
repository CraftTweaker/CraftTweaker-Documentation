# IFluidStack

Questa classe è stata aggiunta da una mod con ID `crafttweaker`. Perciò, è necessario avere questa mod installata per poter utilizzare questa funzione.

## Importing the class
Potrebbe essere necessario importare il pacchetto, se si incontrano dei problemi (come castare un vettore), quindi meglio essere sicuri e aggiungere la direttiva di importazione.
```zenscript
crafttweaker.api.fluid.IFluidStack
```

## Interfacce Implementate
IFluidStack implementa le seguenti interfacce. Ciò significa che ogni metodo presente nell'interfaccia può essere usato anche per questa classe.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### containsOther

Checks if this IFluidStack, contains the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

 Returns: `true if this fluid contains the other fluid`

Return type: boolean

```zenscript
myIFluidStack.containsOther(other as crafttweaker.api.fluid.IFluidStack);
```

| Parameter | Type                                                                 | Description                          |
| --------- | -------------------------------------------------------------------- | ------------------------------------ |
| other     | [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) | other IFluidStack to compare against |


### copy

Copies the stack. Only needed when mutable stacks are involved.

 Returns: `A new stack, that contains the same info as this one`

Tipo di restituzione: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### mutabile

Makes this stack mutable

 Returns: `A new Stack, that is mutable.`

Tipo di restituzione: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.mutable();
```

### setAmount

Sets the fluid amount in MilliBuckets (mB)

 Restituisce: `Una nuova pila, o questa pila, a seconda che questa pila sia mutabile`

Tipo di restituzione: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(amount as int);
myIFluidStack.setAmount(1000);
```

| Parameter | Type | Description                       |
| --------- | ---- | --------------------------------- |
| amount    | int  | The amount to multiply this stack |



## Properties

| Name          | Type                                                                             | Ha Getter | Ha Setter |
| ------------- | -------------------------------------------------------------------------------- | --------- | --------- |
| amount        | int                                                                              | true      | false     |
| commandString | String                                                                           | true      | false     |
| empty         | boolean                                                                          | true      | false     |
| fluid         | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid)                     | true      | false     |
| registryName  | [crafttweaker.api.util.MCResourceLocation](/vanilla/api/util/MCResourceLocation) | true      | false     |

## Operators
### MUL

Sets the fluid amount in MilliBuckets (MB)

 Restituisce: `Una nuova pila, o questa pila, a seconda che questa pila sia mutabile`

```zenscript
myIFluidStack * amount as int
myIFluidStack * 1000
```

| Parameter | Type | Description                       |
| --------- | ---- | --------------------------------- |
| amount    | int  | The amount to multiply this stack |
### CONTAINS

Checks if this IFluidStack, contains the given IFluidStack by checking if the fluids are the same, and if this fluid's amount is bigger than the given fluid's amount

 Returns: `true if this fluid contains the other fluid`

```zenscript
myIFluidStack in other as crafttweaker.api.fluid.IFluidStack
```

| Parameter | Type                                                                 | Description                          |
| --------- | -------------------------------------------------------------------- | ------------------------------------ |
| other     | [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) | other IFluidStack to compare against |

