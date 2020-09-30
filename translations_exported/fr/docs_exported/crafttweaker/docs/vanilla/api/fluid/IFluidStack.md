# IFluidStack

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.fluid.IFluidStack
```

## Implemented Interfaces
IFluidStack implémente les interfaces suivantes. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methods
### copy

Copie la pile. Nécessaire uniquement lorsque des piles mutables sont impliquées.

 Renvoie : `Une nouvelle pile, qui contient les mêmes informations que celle-ci`

Type de retour : [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### mutable

Rend cette pile mutable

 Renvoie : `Une nouvelle pile, qui est mutable.`

Type de retour : [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.mutable();
```

### setAmount

Définit la quantité de fluide en MilliBuckets (MB)

 Retourne : `Une nouvelle pile, ou cette pile, selon que cette pile est mutable`

Type de retour : [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(amount as int);
myIFluidStack.setAmount(1000);
```

| Parameter | Type | Description                                   |
| --------- | ---- | --------------------------------------------- |
| amount    | int  | Le montant de la multiplication de cette pile |



## Properties

| Name          | Type                                                         | Has Getter | Has Setter |
| ------------- | ------------------------------------------------------------ | ---------- | ---------- |
| commandString | String                                                       | true       | false      |
| fluid         | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid) | true       | false      |

## Operators
### MUL

Définit la quantité de fluide en MilliBuckets (MB)

 Retourne : `Une nouvelle pile, ou cette pile, selon que cette pile est mutable`

```zenscript
myIFluidStack * montant en int
myIFluidStack * 1000
```

| Parameter | Type | Description                                   |
| --------- | ---- | --------------------------------------------- |
| amount    | int  | Le montant de la multiplication de cette pile |

