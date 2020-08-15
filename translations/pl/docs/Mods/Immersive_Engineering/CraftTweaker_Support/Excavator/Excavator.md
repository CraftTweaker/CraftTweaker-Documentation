# Kawator

## Wezwanie do pakietu

Możesz wywołać pakiet Excavator używając `mods.immersiveengineering.Excavator`.

## Dodaj Minerał

| Wymagane    | Typ                     | Typ danych    |
| ----------- | ----------------------- | ------------- |
| Wymagane    | Nazwisko                | ciąg znaków   |
| Wymagane    | Masa minerałów          | odcień        |
| Wymagane    | Szansa na niepowodzenie | podwójne      |
| Wymagane    | Ores                    | ciąg znaków[] |
| Wymagane    | Szanse                  | podwójne[]    |
| Opcjonalnie | Biała lista wymiarów    | int []        |
| Opcjonalnie | Czarna lista            | boolean       |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.Excavator.addMineral(String name, int mineralWeight, double failChance, String[] rures, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("żelazo Ore", 50, 0. 05, ["oreŻelaza", "oreDiamond"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addcaveral"Iron Rure", 50, 0.005, ["oreŻelaza", "oreDiamond"], [0.005, 0. 1], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral ("żelazo Rure", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1], true);
```

## Usuń Minerał

| Wymagane | Typ      | Typ danych  |
| -------- | -------- | ----------- |
| Wymagane | Nazwisko | Ciąg znaków |

### Przykład

```zenscript
//Example:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("żelazne Ore");
```