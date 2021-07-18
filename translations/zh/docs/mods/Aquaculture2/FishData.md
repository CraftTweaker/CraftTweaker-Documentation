::requiredMod[Aquaculture 2]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/aquaculture}

# Fish Data

Requires Aquaculture 2 version 2.1.14 or newer.

Fish Data is what handles the amount of fish fillet's you get, when filleting a fish. Additional, it handles the min and max weight of fish. (If the config option is enabled)

## 所属包名
`mods.aquaculture.FishData`

## Adding Fish Data

```zenscript
// mods.aquaculture.FishData.add(fishStack, minWeight, maxWeight, filletAmount);

mods.aquaculture.FishData.add(<item:aquuaculture:atlantic_cod>, 10.0, 211.0, 6);
```

- `fishStack` [MCItemDefinition](/vanilla/api/item/MCItemDefinition)
- `minWeight` Double number (Only used if weight config is enabled)
- `maxWeight` Double number (Only used if weight config is enabled)
- `filletAmount` Integer number (Used when weight config is disabled)


## Removing Fish Data

```zenscript
// mods.aquaculture.FishData.remove(fishStack);

mods.aquaculture.FishData.add(<item:aquuaculture:atlantic_cod>);
```

- `fishStack` [MCItemDefinition](/vanilla/api/item/MCItemDefinition)

