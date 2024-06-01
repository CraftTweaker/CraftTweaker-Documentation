# LodestoneTracker

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.LodestoneTracker;
```


## Extending Record

LodestoneTracker extends Record. That means all methods available in Record are also available in LodestoneTracker

## Static Methods

:::group{name=of}

Return Type: [LodestoneTracker](/vanilla/api/item/component/LodestoneTracker)

```zenscript
LodestoneTracker.of(target as GlobalPos?, tracked as boolean) as LodestoneTracker
```

| Parameter |                   Type                    |
|-----------|-------------------------------------------|
| target    | [GlobalPos](/vanilla/api/util/GlobalPos)? |
| tracked   | boolean                                   |


:::

## Methods

:::group{name=tick}

Return Type: [LodestoneTracker](/vanilla/api/item/component/LodestoneTracker)

```zenscript
LodestoneTracker.tick(level as ServerLevel) as LodestoneTracker
```

| Parameter |                     Type                      |
|-----------|-----------------------------------------------|
| level     | [ServerLevel](/vanilla/api/world/ServerLevel) |


:::


## Properties

|  Name   |    Type     | Has Getter | Has Setter |
|---------|-------------|------------|------------|
| target  | **invalid** | true       | false      |
| tracked | boolean     | true       | false      |

