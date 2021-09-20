# Excavator

## Hinzufügen des Packages

You can call the Excavator package using `mods.immersiveengineering.Excavator`.

## Add Mineral

| Benötigt | 类型                  | Datentyp |
| -------- | ------------------- | -------- |
| Benötigt | 名称                  | string   |
| Benötigt | Mineral Weight      | int      |
| Benötigt | Fail Chance         | double   |
| Benötigt | Ores                | string[] |
| Benötigt | Chances             | double[] |
| 可选       | Dimension Whitelist | int []   |
| 可选       | Blacklist           | boolean  |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] ores, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1], true);
```

## Remove Mineral

| Required | 类型 | Datentyp |
| -------- | -- | -------- |
| Required | 名称 | String   |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("Iron Ore");
```