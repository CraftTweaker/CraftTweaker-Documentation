# IFluidStack

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Diese Klasse importieren
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.fluid.IFluidStack
```

## Implemented Interfaces
IFluidStack implementiert die folgenden Schnittstellen. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Methoden
### copy

Kopiert den Stapel. Benötigt werden nur bei veränderlichen Stacks.

 Gibt zurück: `Ein neuer Stapel mit den gleichen Informationen wie dieser`

Rückgabetyp: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.copy();
```

### mutierbar

Macht diesen Stapel veränderbar

 Gibt zurück: `Ein neuer Stapel ist veränderbar.`

Rückgabetyp: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.mutable();
```

### setAmount

Legt den Flüssigkeitswert in MilliBuckets (MB) fest

 Gibt zurück: `Ein neuer Stapel oder dieser Stapel je nachdem, ob dieser Stapel veränderbar ist`

Rückgabetyp: [crafttweaker.api.fluid.IFluidStack](/vanilla/api/fluid/IFluidStack)

```zenscript
myIFluidStack.setAmount(Betrag wie in);
myIFluidStack.setAmount(1000);
```

| Parameter | Type | Beschreibung                                |
| --------- | ---- | ------------------------------------------- |
| amount    | int  | Der Betrag, der diesen Stapel multipliziert |



## Properties

| Name          | Type                                                         | Has Getter | Has Setter |
| ------------- | ------------------------------------------------------------ | ---------- | ---------- |
| commandString | String                                                       | true       | false      |
| fluid         | [crafttweaker.api.fluid.MCFluid](/vanilla/api/fluid/MCFluid) | true       | false      |

## Operatoren
### MUL

Legt den Flüssigkeitswert in MilliBuckets (MB) fest

 Gibt zurück: `Ein neuer Stapel oder dieser Stapel je nachdem, ob dieser Stapel veränderbar ist`

```zenscript
myIFluidStack * Betrag als Int
myIFluidStack * 1000
```

| Parameter | Type | Beschreibung                                |
| --------- | ---- | ------------------------------------------- |
| amount    | int  | Der Betrag, der diesen Stapel multipliziert |

