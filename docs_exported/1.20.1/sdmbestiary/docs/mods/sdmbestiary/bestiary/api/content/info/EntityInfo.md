# EntityInfo

Allows you to add mobs to the panel

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmbestiary.bestiary.api.content.info.EntityInfo;
```


## Implemented Interfaces
EntityInfo implements the following interfaces. That means all methods defined in these interfaces are also available in EntityInfo

- [ISimpleInfoContent](/mods/sdmbestiary/bestiary/api/content/ISimpleInfoContent)&lt;[EntityInfo](/mods/sdmbestiary/bestiary/api/content/info/EntityInfo)&gt;

## Constructors


```zenscript
new EntityInfo(consumer as Consumer<EntityInfo>) as EntityInfo
```
| Parameter |                                         Type                                         |
|-----------|--------------------------------------------------------------------------------------|
| consumer  | Consumer&lt;[EntityInfo](/mods/sdmbestiary/bestiary/api/content/info/EntityInfo)&gt; |



## Methods

:::group{name=setParent}

```zenscript
EntityInfo.setParent(content as InfoContent)
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| content   | [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent) |


:::


## Properties

|    Name    |                     Type                     | Has Getter | Has Setter |
|------------|----------------------------------------------|------------|------------|
| entityType | [EntityType](/vanilla/api/entity/EntityType) | true       | true       |
| size       | int                                          | true       | true       |
| x          | int                                          | true       | true       |
| y          | int                                          | true       | true       |
| yaw        | int                                          | true       | true       |

