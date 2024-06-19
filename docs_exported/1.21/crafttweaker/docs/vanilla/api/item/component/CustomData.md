# CustomData

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.CustomData;
```


## Static Methods

:::group{name=of}

Return Type: [CustomData](/vanilla/api/item/component/CustomData)

```zenscript
CustomData.of(tag as MapData) as CustomData
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| tag       | [MapData](/vanilla/api/data/MapData) |


:::

## Methods

:::group{name=contains}

Return Type: boolean

```zenscript
CustomData.contains(key as string) as boolean
```

| Parameter |  Type  |
|-----------|--------|
| key       | string |


:::

:::group{name=matchedBy}

Return Type: boolean

```zenscript
CustomData.matchedBy(tag as MapData) as boolean
```

| Parameter |                 Type                 |
|-----------|--------------------------------------|
| tag       | [MapData](/vanilla/api/data/MapData) |


:::

:::group{name=update}

Return Type: [CustomData](/vanilla/api/item/component/CustomData)

```zenscript
CustomData.update(updater as Consumer<MapData>) as CustomData
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| updater   | Consumer&lt;[MapData](/vanilla/api/data/MapData)&gt; |


:::


## Properties

|  Name   |    Type     | Has Getter | Has Setter |
|---------|-------------|------------|------------|
| copyTag | **invalid** | true       | false      |
| isEmpty | boolean     | true       | false      |
| size    | int         | true       | false      |

