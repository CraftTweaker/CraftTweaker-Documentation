::requiredMod[Aquaculture 2]{builtIn=true modLink=https://www.curseforge.com/minecraft/mc-mods/aquaculture}

# Fish Data

Fish Data is what handles the amount of fish fillet's you get, when filleting a fish. Additional, it handles the min and max weight of fish. (If the config option is enabled)

## Package
`mods.aquaculture.FishData`

## Adding Fish Data

```zenscript
// mods.aquaculture.FishData.add(fish as Item, min as double, max as double, filletAmount as int);

mods.aquaculture.FishData.add(<item:aquuaculture:atlantic_cod>, 10.0, 211.0, 6);
```

- `fishStack` [MCItemDefinition](/vanilla/api/item/MCItemDefinition)
- `minWeight` Double number (Only used if weight config is enabled)
- `maxWeight` Double number (Only used if weight config is enabled)
- `filletAmount` Integer number (Used when weight config is disabled)


## Removing Fish Data

```zenscript
// mods.aquaculture.FishData.remove(fishStack as Item);

mods.aquaculture.FishData.remove(<item:aquuaculture:atlantic_cod>);
```

- `fishStack` [MCItemDefinition](/vanilla/api/item/MCItemDefinition)

