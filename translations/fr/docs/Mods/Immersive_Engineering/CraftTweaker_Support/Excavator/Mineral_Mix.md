# Mineral Mix

## Importation du paquet

It might be required for you to import the package if you encounter any issues (like casting an Array). So better be safe than sorry and add the import `import mods.immersiveengineering.MineralMix;`.

## Fail Chance

You can get and set the failchance for the Mineralmix using the failChance [ZenSetter/Getter] on the object.

## Get Mineral

| Required | Type de texte | Type de données      |
| -------- | ------------- | -------------------- |
| Required | Nom           | chaîne de caractères |

```zenscript
//Example:
Excavator.getMineral(String Name);

var Iron = Excavator.getMineral("Iron_Ore");
```

## Add Ore

| Required | Type de texte | Type de données      |
| -------- | ------------- | -------------------- |
| Required | Minerai       | chaîne de caractères |
| Required | Chance        | chaîne de caractères |

```zenscript
mineralMixObject.addOre("oreIron", 0.5);
```

You will need to use the oredict names.

## Remove Ore

| Required | Type de texte | Type de données      |
| -------- | ------------- | -------------------- |
| Required | Minerai       | chaîne de caractères |

```zenscript
mineralMixObject.removeOre("oreIron");
```

## Fail Chance Getter/Setter

### Exemple

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