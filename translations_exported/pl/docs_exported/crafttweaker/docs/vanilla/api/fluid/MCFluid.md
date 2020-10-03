# MCFluid

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.fluid.MCFluid
```

## Implemented Interfaces
MCFluid implementuje następujące interfejsy. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### makeStack

Tworzy nowy [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) z podaną ilością płynu.

 Zwraca: `nowy (niezmienny) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

Typ zwrotu: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myMCFluid.makeStack(ilość jak int);
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

Tworzy nowy [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) z podaną ilością płynu.

 Zwraca: `nowy (niezmienny) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

```zenscript
myMCFluid * ilość jako int
myMCFluid * 1000
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| amount    | int  | No description provided |

