# Excavator

## Calling The Package

You can call the Excavator package using `mods.immersiveengineering.Excavator`.

## Add Mineral

| Requerido | Tipo                | Tipo de Datos |
| --------- | ------------------- | ------------- |
| Requerido | Nombre              | cadena        |
| Requerido | Mineral Weight      | int           |
| Requerido | Fail Chance         | doble         |
| Requerido | Ores                | string[]      |
| Requerido | Chances             | double[]      |
| Opcional  | Dimension Whitelist | int []        |
| Opcional  | Blacklist           | boolean       |

### Ejemplo

```zenscript
//Example:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] ores, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1], true);
```

## Remove Mineral

| Requerido | Tipo   | Tipo de Datos |
| --------- | ------ | ------------- |
| Requerido | Nombre | String        |

### Ejemplo

```zenscript
//Example:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("Iron Ore");
```