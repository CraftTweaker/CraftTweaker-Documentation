# LevelHeightAccessor

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmcrtplus.world.level.LevelHeightAccessor;
```


## Methods

:::group{name=getHeight}

Return Type: int

```zenscript
// LevelHeightAccessor.getHeight() as int

myLevelHeightAccessor.getHeight();
```

:::

:::group{name=getMaxBuildHeight}

Return Type: int

```zenscript
// LevelHeightAccessor.getMaxBuildHeight() as int

myLevelHeightAccessor.getMaxBuildHeight();
```

:::

:::group{name=getMaxSection}

Return Type: int

```zenscript
// LevelHeightAccessor.getMaxSection() as int

myLevelHeightAccessor.getMaxSection();
```

:::

:::group{name=getMinBuildHeight}

Return Type: int

```zenscript
// LevelHeightAccessor.getMinBuildHeight() as int

myLevelHeightAccessor.getMinBuildHeight();
```

:::

:::group{name=getSectionIndex}

Return Type: int

```zenscript
LevelHeightAccessor.getSectionIndex(index as int) as int
```

| Parameter | Type |
|-----------|------|
| index     | int  |


:::

:::group{name=getSectionIndexFromSectionY}

Return Type: int

```zenscript
LevelHeightAccessor.getSectionIndexFromSectionY(index as int) as int
```

| Parameter | Type |
|-----------|------|
| index     | int  |


:::

:::group{name=getSectionYFromSectionIndex}

Return Type: int

```zenscript
LevelHeightAccessor.getSectionYFromSectionIndex(index as int) as int
```

| Parameter | Type |
|-----------|------|
| index     | int  |


:::

:::group{name=getSectionsCount}

Return Type: int

```zenscript
// LevelHeightAccessor.getSectionsCount() as int

myLevelHeightAccessor.getSectionsCount();
```

:::


## Properties

|      Name      | Type | Has Getter | Has Setter |
|----------------|------|------------|------------|
| height         | int  | true       | false      |
| maxBuildHeight | int  | true       | false      |
| maxSextion     | int  | true       | false      |
| minBuildHeight | int  | true       | false      |
| sectionCount   | int  | true       | false      |

