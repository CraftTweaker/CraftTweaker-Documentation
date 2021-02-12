# Fish Data

Requires Aquaculture 2 version 2.1.14 or newer.

Fish Data is what handles the amount of fish fillet's you get, when filleting a fish. Additional it handles the min and max weight of fish (If the config option is enabled)

## Package
`mods.aquuaculture.FishData;`

## Adding Fish Data

`mods.aquuaculture.FishData.add(fishStack, minWeight, maxWeight, filletAmount);`

- `fishStack` [IItemStack](/vanilla/api/items/IItemStack)
- `minWeight` Double number (Only used if weight config is enbaled)
- `maxWeight` Double number (Only used if weight config is enbaled)
- `filletAmount` Integer number (Used when weight config is disabled)

```zenscript
mods.aquuaculture.FishData.add(<item:aquuaculture:atlantic_cod>, 10.0, 211.0, 6);
```
