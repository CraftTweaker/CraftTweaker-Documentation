# Excavator

## Hinzufügen des Packages

You can call the Excavator package using `mods.immersiveengineering.Excavator`.

## Add Mineral

| Benötigt | Type                | Datentyp |
| -------- | ------------------- | -------- |
| Benötigt | Name                | string   |
| Benötigt | Mineral Weight      | int      |
| Benötigt | Fail Chance         | double   |
| Benötigt | Ores                | string[] |
| Benötigt | Chances             | double[] |
| Optional | Dimension Whitelist | int []   |
| Optional | Blacklist           | boolean  |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] ores, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["minecraft:iron_ore", "minecraft:diamond_ore"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["minecraft:iron_ore", "minecraft:diamond_ore"], [0.005, 0.01], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["minecraft:iron_ore", "minecraft:diamond_ore"], [0.005, 0.01], [1, 0, -1], true);
```

## Remove Mineral

| Required | Type | Datentyp |
| -------- | ---- | -------- |
| Required | Name | String   |

### Beispiel

```zenscript
//Example:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("Iron Ore");
```