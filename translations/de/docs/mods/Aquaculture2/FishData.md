::requiredMod[Aquaculture 2]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/aquaculture}

# Fischdaten

Benötigt Aquaculture 2 Version 2.1.14 oder neuer.

Fischdaten händeln die Menge an Fischfillets, die man bekommt beim Fisch filletieren. Zusätzlich behandelt er das Mindest- und Maximalgewicht des Fisches. (Wenn die Konfigurationsoption aktiviert ist)

## Package
`mods.aquaculture.FishData`

## Füge Fischdaten hinzu

```zenscript
// mods.aquaculture.FishData.add(fishStack, minWeight, maxWeight, filletAmount);

mods.aquaculture.FishData.add(<item:aquuaculture:atlantic_cod>, 10.0, 211.0, 6);
```

- `fishStack` [MCItemDefinition](/vanilla/api/item/MCItemDefinition)
- `minWeight` Double Nummer (nur verwendet, wenn die Gewichtskonfiguration aktiviert ist)
- `maxWeight` Double Nummer (nur verwendet, wenn die Gewichtskonfiguration aktiviert ist)
- `filletAmount` Integer Nummer (nur verwendet, wenn die Gewichtskonfiguration aktiviert ist)


## Entferne Fischdaten

```zenscript
// mods.aquaculture.FishData.remove(fishStack);

mods.aquaculture.FishData.remove(<item:aquuaculture:atlantic_cod>);
```

- `fishStack` [MCItemDefinition](/vanilla/api/item/MCItemDefinition)

