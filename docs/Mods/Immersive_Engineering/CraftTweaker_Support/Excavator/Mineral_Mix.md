# Mineral Mix

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an Array). 
So better be safe than sorry and add the import `import mods.immersiveengineering.MineralMix;`.

## Fail Chance
You can get and set the failchance for the Mineralmix using the failChance [ZenSetter/Getter] on the object.

## Get Mineral

|Required  |Type                 |Data Type  |
|----------|---------------------|-----------|
|Required  |Name                 |String     |

```
//Example:
Excavator.getMineral(String Name);

var Iron = Excavator.getMineral("Iron_Ore");
```



## Add Ore

|Required  |Type                 |Data Type  |
|----------|---------------------|-----------|
|Required  |Ore                  |String     |
|Required  |Chance               |Double     |

### Example:
```
//Example:
mods.immersiveengineering.Excavator.addOre(String ore, Double chance);

mods.immersiveengineering.Excavator.addOre("minecraft:iron_ore", 0.5);
```



## Remove Ore

|Required  |Type                 |Data Type  |
|----------|---------------------|-----------|
|Required  |Ore                  |String     |

### Example:
```
//Example:
mods.immersiveengineering.Excavator.removeOre(String ore);

mods.immersiveengineering.Excavator.removeOre("minecraft:iron_ore");
```



##Fail Chance Getter/Setter

### Example:
```
//Getter
MineralMixObject.failchance;

//Setter
MineralMixObject.failchance = 0.5;
```



## Full Example:
```
//Example:
import mods.immersiveengineering.Excavator;
import mods.immersiveengineering.MineralMix;

//Get The Mineral Mix
mods.immersiveengineering.Excavator.addMineral("Iron_Ore", 50, 0.005, ["minecraft:iron_ore", "minecraft:diamond_ore"], [0.005, 0.01], [1, 0, -1]);

var Iron = Excavator.getMineral("Iron_Ore");

Iron.addOre("minecraft:iron_ore", 0.5);

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