# CraftTweakerSavedData

Data that is saved and loaded with the world when it is saved and loaded from disk.

 Saved Data is only on the server side, so you can only get it from a **invalid**.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.world.CraftTweakerSavedData;
```


## Extending SavedData

CraftTweakerSavedData extends [SavedData](/vanilla/api/world/SavedData). That means all methods available in [SavedData](/vanilla/api/world/SavedData) are also available in CraftTweakerSavedData

## Methods

:::group{name=getData}

Return Type: [MapData](/vanilla/api/data/MapData)

```zenscript
// CraftTweakerSavedData.getData() as MapData

level.customData.getData();
```

:::

:::group{name=setData}

Return Type: void

```zenscript
CraftTweakerSavedData.setData(data as MapData) as void
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| data      | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::

:::group{name=updateData}

Return Type: void

```zenscript
CraftTweakerSavedData.updateData(data as MapData) as void
```

| Parameter | Type                                 | Description             |
| --------- | ------------------------------------ | ----------------------- |
| data      | [MapData](/vanilla/api/data/MapData) | No Description Provided |


:::


## Properties

| Nombre | Type                                 | Has Getter | Has Setter | Description             |
| ------ | ------------------------------------ | ---------- | ---------- | ----------------------- |
| data   | [MapData](/vanilla/api/data/MapData) | true       | true       | No Description Provided |

