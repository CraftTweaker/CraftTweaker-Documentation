# CraftTweakerSavedData

Data that is saved and loaded with the world when it is saved and loaded from disk.

 Saved Data is only on the server side, so you can only get it from a [ServerLevel](/vanilla/api/world/ServerLevel).

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.CraftTweakerSavedData;
```


## Extending SavedData

CraftTweakerSavedData extends [SavedData](/vanilla/api/world/SavedData). That means all methods available in [SavedData](/vanilla/api/world/SavedData) are also available in CraftTweakerSavedData

## Methods

:::group{name=getData}

Return Type: [IData](/vanilla/api/data/IData)

```zenscript
// CraftTweakerSavedData.getData() as IData

level.customData.getData();
```

:::

:::group{name=setData}

```zenscript
CraftTweakerSavedData.setData(data as MapData)
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| data      | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=updateData}

```zenscript
CraftTweakerSavedData.updateData(data as IData)
```

| Parameter |               Type               |
|-----------|----------------------------------|
| data      | [IData](/vanilla/api/data/IData) |


:::


## Properties

| Name |               Type               | Has Getter | Has Setter |
|------|----------------------------------|------------|------------|
| data | [IData](/vanilla/api/data/IData) | true       | true       |

