# MCFluido

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.fluid.MCFluid
```

## Implemented Interfaces
MCFluid implementa las siguientes interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### makeStack

Crea un nuevo [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) con la cantidad de fluido dada.

 Devuelve: `un nuevo (inmutable) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

Tipo de retorno: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myMCFluid.makeStack(amount as int);
myMCFluid.makeStack(1000);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| amount    | int  | No description provided |



## Properties

| Name          | Type   | Has Getter | Has Setter |
| ------------- | ------ | ---------- | ---------- |
| commandString | String | true       | false      |

## Operators
### MUL

Crea un nuevo [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) con la cantidad de fluido dada.

 Devuelve: `un nuevo (inmutable) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

```zenscript
myMCFluid * cantidad como int
myMCFluid * 1000
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| amount    | int  | No description provided |

