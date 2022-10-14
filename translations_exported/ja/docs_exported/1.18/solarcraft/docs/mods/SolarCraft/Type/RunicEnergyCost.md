# RunicEnergyCost

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.solarforge.RunicEnergyCost;
```


## Static Methods

:::group{name=EMPTY}



Returns: An empty RunicEnergyCost with no requirements.  
Return Type: [RunicEnergyCost](/mods/SolarCraft/Type/RunicEnergyCost)

```zenscript
// RunicEnergyCost.EMPTY() as RunicEnergyCost

RunicEnergyCost.EMPTY();
```

:::

## Methods

:::group{name=getType}



Returns: A copy of the internal RunicEnergyTypes and the necessary amount needed for each one.  
Return Type: float?[[RunicEnergyType](/mods/SolarCraft/Type/RunicEnergyType)]

```zenscript
// RunicEnergyCost.getType() as float?[RunicEnergyType]

myRunicEnergyCost.getType();
```

:::

:::group{name=setTypeOfMap}

Sets a certain RunicEnergyType to the passed in amount.

 Ideally, it should be used in chain, just like a builder, to manage the final object you want.

 ```zenscript
 import mods.solarforge.RunicEnergyCost;


 var customEnergyCost = RunicEnergyCost.EMPTY()
 .setTypeOfMap(<constant:solarforge:energytype:ultima>, 20)
 .setTypeOfMap(<constant:solarforge:energytype:urba>, 5)
 .setTypeOfMap(<constant:solarforge:energytype:zeta>, 30);

 ```

 `customEnergyCost` is now usable as a variable in an [InfuserManager](/mods/SolarCraft/InfuserManager)

Returns: The modified RunicEnergyCost.  
Return Type: [RunicEnergyCost](/mods/SolarCraft/Type/RunicEnergyCost)

```zenscript
// RunicEnergyCost.setTypeOfMap(type as RunicEnergyType, amount as int) as RunicEnergyCost

myRunicEnergyCost.setTypeOfMap(<constant:solarforge:energytype:ultima>, 10);
```

| Parameter | Type                                                     | Description                   |
| --------- | -------------------------------------------------------- | ----------------------------- |
| type      | [RunicEnergyType](/mods/SolarCraft/Type/RunicEnergyType) | The type to set               |
| amount    | int                                                      | The amount to set the type to |


:::


## Properties

| 名称    | Type                                                             | Has Getter | Has Setter | Description |
| ----- | ---------------------------------------------------------------- | ---------- | ---------- | ----------- |
| types | float?[[RunicEnergyType](/mods/SolarCraft/Type/RunicEnergyType)] | true       | false      |             |

