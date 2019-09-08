# Mineral Mix

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an Array). 
So better be safe than sorry and add the import `import mods.immersiveengineering.MineralMix;`.

## Fail Chance
You can get and set the failchance for the Mineralmix using the failChance [ZenSetter/Getter] on the object.

## Get Mineral

|Required  |Type                 |Data Type  |
|----------|---------------------|-----------|
|Required  |Name                 |string     |

```zenscript
//Example:
Excavator.getMineral(String Name);

var Iron = Excavator.getMineral("Iron_Ore");
```



## Add Ore

|Required  |Type                 |Data Type  |
|----------|---------------------|-----------|
|Required  |Ore                  |string     |
|Required  |Chance               |string     |

```zenscript
mineralMixObject.addOre("oreIron", 0.5);
```
You will need to use the oredict names.

## Remove Ore

|Required  |Type                 |Data Type  |
|----------|---------------------|-----------|
|Required  |Ore                  |string     |

```zenscript
mineralMixObject.removeOre("oreIron");
```

##Fail Chance Getter/Setter

### Example
```zenscript
//Getter
mineralMixObject.failchance;

//Setter
mineralMixObject.failchance = 0.5;
```



## Full Example
```zenscript
//Example:
import mods.immersiveengineering.Excavator;
import mods.immersiveengineering.MineralMix;

//Get The Mineral Mix
mods.immersiveengineering.Excavator.addMineral("Iron_Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);

var Iron = Excavator.getMineral("Iron_Ore");

Iron.addOre("oreIron", 0.5);

//Print Initial Fail Chance
print(Iron.failChance);

//Set The Fail Chance to 25%
Iron.failChance = 0.25;

//Print Out The Fail Chance
print(Iron.failChance);

//Set The Fail Chance to 50%
Iron.failChance = 0.5;

//Print Final Fail Chance
print(Iron.failChance);
```
