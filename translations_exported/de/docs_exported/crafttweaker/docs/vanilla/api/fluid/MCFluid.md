# MCFluid

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.fluid.MCFluid
```

## Implemented Interfaces
MCFluid implementiert die folgenden Schnittstellen. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methoden
### makeStack

Erstellt eine neue [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) mit der angegebenen Menge an Flüssigkeit.

 Gibt `eine neue (unveränderbar) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

Rückgabetyp: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myMCFluid.makeStack(Betrag wie in);
myMCFluid.makeStack(1000);
```

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| amount    | int  | No description provided |



## Properties

| Name          | Type   | Has Getter | Has Setter |
| ------------- | ------ | ---------- | ---------- |
| commandString | String | true       | false      |

## Operatoren
### MUL

Erstellt eine neue [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack) mit der angegebenen Menge an Flüssigkeit.

 Gibt `eine neue (unveränderbar) [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)`

```zenscript
myMCFluid * Betrag als Int
myMCFluid * 1000
```

| Parameter | Type | Beschreibung            |
| --------- | ---- | ----------------------- |
| amount    | int  | No description provided |

