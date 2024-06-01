# GlobalPos

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.util.GlobalPos;
```


## Extending Record

GlobalPos extends Record. That means all methods available in Record are also available in GlobalPos

## Static Methods

:::group{name=of}

Return Type: [GlobalPos](/vanilla/api/util/GlobalPos)

```zenscript
GlobalPos.of($$0 as ResourceKey<Level>, $$1 as BlockPos) as GlobalPos
```

| Parameter |                                           Type                                            |
|-----------|-------------------------------------------------------------------------------------------|
| $$0       | [ResourceKey](/vanilla/api/resource/ResourceKey)&lt;[Level](/vanilla/api/world/Level)&gt; |
| $$1       | [BlockPos](/vanilla/api/util/math/BlockPos)                                               |


:::

## Properties

|   Name    |                                           Type                                            | Has Getter | Has Setter |
|-----------|-------------------------------------------------------------------------------------------|------------|------------|
| dimension | [ResourceKey](/vanilla/api/resource/ResourceKey)&lt;[Level](/vanilla/api/world/Level)&gt; | true       | false      |
| pos       | [BlockPos](/vanilla/api/util/math/BlockPos)                                               | true       | false      |

