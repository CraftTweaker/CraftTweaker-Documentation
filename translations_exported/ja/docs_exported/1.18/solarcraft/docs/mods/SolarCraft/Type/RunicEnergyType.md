# RunicEnergyType

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.solarforge.RunicEnergyType;
```


## Enum Constants

RunicEnergyType is an enum. It has 9 enum constants. They are accessible using the code below.

```zenscript
<constant:solarforge:energytype:zeta>
<constant:solarforge:energytype:ardo>
<constant:solarforge:energytype:urba>
<constant:solarforge:energytype:kelda>
<constant:solarforge:energytype:fira>
<constant:solarforge:energytype:tera>
<constant:solarforge:energytype:giro>
<constant:solarforge:energytype:ultima>
```
## Methods

:::group{name=getCommandString}



Returns: A Usable RunicEnergyType to use in [RunicEnergyCost](/mods/SolarCraft/Type/RunicEnergyCost) to set up a requirement.  
Return Type: string

```zenscript
// RunicEnergyType.getCommandString() as string

myRunicEnergyType.getCommandString();
```

:::


## Properties

| 名称            | Type   | Has Getter | Has Setter | Description |
| ------------- | ------ | ---------- | ---------- | ----------- |
| commandString | string | true       | false      |             |

