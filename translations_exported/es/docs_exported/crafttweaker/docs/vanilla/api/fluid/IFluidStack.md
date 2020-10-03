# IFluidStack

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.fluid.IFluidStack
```

## Implemented Interfaces
IFluidStack implementa las siguientes interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### copy

Copia la pila. Sólo es necesario cuando se trata de pilas mutables.

 Devuelve: `Una nueva pila que contiene la misma información que esta`

Tipo de retorno: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### mutable

Hace esta pila mutable

 Devuelve: `Una nueva pila, que es mutable.`

Tipo de retorno: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.mutable();
```

### setAmount

Establece la cantidad de fluido en MilliBuckets (MB)

 Devuelve: `Una pila nueva, o esta pila, dependiendo de si esta pila es mutable`

Tipo de retorno: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(amount as int);
myIFluidStack.setAmount(1000);
```

| Parameter | Type | Description                         |
| --------- | ---- | ----------------------------------- |
| amount    | int  | La cantidad a multiplicar esta pila |



## Properties

| Name          | Type                                                         | Has Getter | Has Setter |
| ------------- | ------------------------------------------------------------ | ---------- | ---------- |
| commandString | String                                                       | true       | false      |
| fluid         | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid) | true       | false      |

## Operators
### MUL

Establece la cantidad de fluido en MilliBuckets (MB)

 Devuelve: `Una pila nueva, o esta pila, dependiendo de si esta pila es mutable`

```zenscript
myIFluidStack * cantidad como int
myIFluidStack * 1000
```

| Parameter | Type | Description                         |
| --------- | ---- | ----------------------------------- |
| amount    | int  | La cantidad a multiplicar esta pila |

