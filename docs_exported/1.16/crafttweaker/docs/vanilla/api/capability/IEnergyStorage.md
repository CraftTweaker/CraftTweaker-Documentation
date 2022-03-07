# IEnergyStorage

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.IEnergyStorage;
```


## Methods

:::group{name=canExtract}

Return Type: boolean

```zenscript
// IEnergyStorage.canExtract() as boolean

myIEnergyStorage.canExtract();
```

:::

:::group{name=canReceive}

Return Type: boolean

```zenscript
// IEnergyStorage.canReceive() as boolean

myIEnergyStorage.canReceive();
```

:::

:::group{name=extractEnergy}

Return Type: int

```zenscript
IEnergyStorage.extractEnergy(maxExtract as int, simulate as boolean) as int
```

| Parameter | Type | Description |
|-----------|------|-------------|
| maxExtract | int | No Description Provided |
| simulate | boolean | No Description Provided |


:::

:::group{name=getEnergyStored}

Return Type: int

```zenscript
// IEnergyStorage.getEnergyStored() as int

myIEnergyStorage.getEnergyStored();
```

:::

:::group{name=getMaxEnergyStored}

Return Type: int

```zenscript
// IEnergyStorage.getMaxEnergyStored() as int

myIEnergyStorage.getMaxEnergyStored();
```

:::

:::group{name=receiveEnergy}

Return Type: int

```zenscript
IEnergyStorage.receiveEnergy(maxReceive as int, simulate as boolean) as int
```

| Parameter | Type | Description |
|-----------|------|-------------|
| maxReceive | int | No Description Provided |
| simulate | boolean | No Description Provided |


:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| canExtract | boolean | true | false | No Description Provided |
| canReceive | boolean | true | false | No Description Provided |
| energyStored | int | true | false | No Description Provided |
| maxEnergyStored | int | true | false | No Description Provided |

