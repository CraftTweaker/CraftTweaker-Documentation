# Excavateur

## Appeler le paquet

Vous pouvez appeler le paquet Excavator en utilisant `mods.immersiveengineering.Excavator`.

## Ajouter un Minéral

| Requis    | Type de texte                | Type de données      |
| --------- | ---------------------------- | -------------------- |
| Requis    | Nom                          | chaîne de caractères |
| Requis    | Poids minéral                | Indice               |
| Requis    | Chance d'échec               | double               |
| Requis    | Ores                         | chaîne[]             |
| Requis    | Chances                      | double[]             |
| Optionnel | Liste blanche des dimensions | int []               |
| Optionnel | Liste noire                  | boolean              |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] minerais, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0. 05, ["oreIron", "oreDiamond"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0. 1], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Minerai de Fer, 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1], true);
```

## Enlever le minerai

| Requis | Type de texte | Type de données      |
| ------ | ------------- | -------------------- |
| Requis | Nom           | Chaîne de caractères |

### Exemple

```zenscript
//Exemple:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("Iron Ore");
```