# Escavatore

## Chiamare Il Pacchetto

Puoi chiamare il pacchetto Excavator usando `mods.immersiveengineering.Excavator`.

## Aggiungi Minerale

| Richiesto   | Tipo                 | Tipo Di Dati |
| ----------- | -------------------- | ------------ |
| Richiesto   | Nome                 | stringa      |
| Richiesto   | Peso Minerale        | int          |
| Richiesto   | Probabilità Fallita  | doppia       |
| Richiesto   | Ores                 | stringa[]    |
| Richiesto   | Probabilità          | doppio[]     |
| Facoltativo | Dimensione Whitelist | int []       |
| Facoltativo | Blacklist            | boolean      |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.Excavator.addMineral(Nome string, int mineralWeight, double failChance, String[] ores, double[] chances, @Optional int[] dimensionWhitelist, @Optional boolean blacklist);

mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0. 05, ["oreIron", "oreDiamond"], [0.005, 0.01]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0. 1], [1, 0, -1]);
mods.immersiveengineering.Excavator.addMineral("Iron Ore", 50, 0.005, ["oreIron", "oreDiamond"], [0.005, 0.01], [1, 0, -1], true);
```

## Rimuovi Minerale

| Richiesto | Tipo | Tipo Di Dati |
| --------- | ---- | ------------ |
| Richiesto | Nome | Stringa      |

### Esempio

```zenscript
//Esempio:
mods.immersiveengineering.Excavator.removeMineral(String name);

mods.immersiveengineering.Excavator.removeMineral("Iron Ore");
```