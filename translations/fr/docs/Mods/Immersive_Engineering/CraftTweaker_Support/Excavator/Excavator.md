# Excavator

## Calling The Package

You can call the Excavator package using `mods.immersiveengineering.Excavator`.

## Add Mineral

| Required  | Type de texte       | Type de données      |
| --------- | ------------------- | -------------------- |
| Required  | Nom                 | chaîne de caractères |
| Required  | Mineral Weight      | Indice               |
| Required  | Fail Chance         | double               |
| Required  | Ores                | string[]             |
| Required  | Chances             | double[]             |
| Optionnel | Dimension Whitelist | int []               |
| Optionnel | Blacklist           | boolean              |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] ores, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1], true);
```

## Remove Mineral

| Required | Type de texte | Type de données |
| -------- | ------------- | --------------- |
| Required | Nom           | String          |

### Exemple

```zenscript
//Example:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("Iron Ore");
```