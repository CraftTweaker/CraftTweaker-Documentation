# IEnergyStorage

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.capability.IEnergyStorage;
```


## Methods

:::group{name=canExtract}

Checks if energy can be extracted from this storage.

Returns: true if the storage can be extracted from, false otherwise.  
Return Type: boolean

```zenscript
// IEnergyStorage.canExtract() as boolean

myIEnergyStorage.canExtract();
```

:::

:::group{name=canReceive}

Checks if this storage can receive energy.

Returns: true if this storage can receive energy, false otherwise.  
Return Type: boolean

```zenscript
// IEnergyStorage.canReceive() as boolean

myIEnergyStorage.canReceive();
```

:::

:::group{name=extractEnergy}

Extracts energy from the storage.

Returns: the amount of energy that was extracted.  
Return Type: int

```zenscript
// IEnergyStorage.extractEnergy(maxExtract as int, simulate as boolean) as int

myIEnergyStorage.extractEnergy(400, false);
```

| Parameter  |  Type   |                    Description                     |
|------------|---------|----------------------------------------------------|
| maxExtract | int     | The max amount of energy to be extracted.          |
| simulate   | boolean | If the energy should actually be extracted or not. |


:::

:::group{name=getEnergyStored}

Gets the amount of energy stored.

Returns: The amount of energy stored.  
Return Type: int

```zenscript
// IEnergyStorage.getEnergyStored() as int

myIEnergyStorage.getEnergyStored();
```

:::

:::group{name=getMaxEnergyStored}

Gets the max energy that can be stored.

Returns: The max energy that can be stored.  
Return Type: int

```zenscript
// IEnergyStorage.getMaxEnergyStored() as int

myIEnergyStorage.getMaxEnergyStored();
```

:::

:::group{name=receiveEnergy}

Adds energy to the storage.

Returns: the amount of energy that was accepted.  
Return Type: int

```zenscript
// IEnergyStorage.receiveEnergy(maxReceive as int, simulate as boolean) as int

myIEnergyStorage.receiveEnergy(300, false);
```

| Parameter  |  Type   |                    Description                    |
|------------|---------|---------------------------------------------------|
| maxReceive | int     | The max amount of energy to be inserted.          |
| simulate   | boolean | If the energy should actually be inserted or not. |


:::


## Properties

|      Name       |  Type   | Has Getter | Has Setter |                     Description                      |
|-----------------|---------|------------|------------|------------------------------------------------------|
| canExtract      | boolean | true       | false      | Checks if energy can be extracted from this storage. |
| canReceive      | boolean | true       | false      | Checks if this storage can receive energy.           |
| energyStored    | int     | true       | false      | Gets the amount of energy stored.                    |
| maxEnergyStored | int     | true       | false      | Gets the max energy that can be stored.              |

