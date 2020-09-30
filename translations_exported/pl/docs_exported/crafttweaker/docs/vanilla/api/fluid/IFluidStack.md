# IFluidStack

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.fluid.IFluidStack
```

## Implemented Interfaces
IFluidStack implementuje następujące interfejsy. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### copy

Kopiuje stos. Wymagane tylko wtedy, gdy stosowane są zmienne stosy.

 Zwraca: `Nowy stos, który zawiera te same informacje co ten`

Typ zwrotu: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### zmienny

Sprawia, że ten stos może być zmienny

 Zwraca: `Nowy Stack, który jest zmienny.`

Typ zwrotu: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
miIFluidStack.mutable();
```

### setAmount

Ustawia ilość płynów w mililitrach (MB)

 Zwraca: `Nowy stos lub ten stos, w zależności od tego, czy ten stos jest zmienny`

Typ zwrotu: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(ilość jak int);
myIFluidStack.setAmount(1000);
```

| Parameter | Type | Description               |
| --------- | ---- | ------------------------- |
| amount    | int  | Ilość mnożenia tego stosu |



## Properties

| Name          | Type                                                         | Has Getter | Has Setter |
| ------------- | ------------------------------------------------------------ | ---------- | ---------- |
| commandString | String                                                       | true       | false      |
| fluid         | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid) | true       | false      |

## Operators
### MUL

Ustawia ilość płynów w mililitrach (MB)

 Zwraca: `Nowy stos lub ten stos, w zależności od tego, czy ten stos jest zmienny`

```zenscript
myIFluidStack * ilość jako int
myIFluidStack * 1000
```

| Parameter | Type | Description               |
| --------- | ---- | ------------------------- |
| amount    | int  | Ilość mnożenia tego stosu |

