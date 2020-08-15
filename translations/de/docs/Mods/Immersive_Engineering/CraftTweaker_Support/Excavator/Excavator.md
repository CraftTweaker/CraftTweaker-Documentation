# Ausgrabungsbauer

## Hinzufügen des Packages

Sie können das Excavator-Paket mit `mods.immersiveengineering.Excavator` aufrufen.

## Mineral hinzufügen

| Benötigt | Type                  | Datentyp  |
| -------- | --------------------- | --------- |
| Benötigt | Name                  | string    |
| Benötigt | Mineralgewicht        | int       |
| Benötigt | Fehlerchance          | double    |
| Benötigt | Ores                  | string[]  |
| Benötigt | Chancen               | doppelt[] |
| Optional | Dimensionen-Whitelist | int []    |
| Optional | Blacklist             | boolean   |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] Erze, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0. 05, ["oreIron", "oreDiamond", [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0. 1], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1], true);
```

## Mineral entfernen

| Benötigt | Type | Datentyp |
| -------- | ---- | -------- |
| Benötigt | Name | String   |

### Beispiel

```zenscript
//Beispiel:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("Iron Ore");
```