# HeaderInfo

The class of the header. Adds a single-line field.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmbestiary.bestiary.api.content.info.HeaderInfo;
```


## Implemented Interfaces
HeaderInfo implements the following interfaces. That means all methods defined in these interfaces are also available in HeaderInfo

- [ISimpleInfoContent](/mods/sdmbestiary/bestiary/api/content/ISimpleInfoContent)&lt;[HeaderInfo](/mods/sdmbestiary/bestiary/api/content/info/HeaderInfo)&gt;

## Constructors


```zenscript
new HeaderInfo(consumer as Consumer<HeaderInfo>) as HeaderInfo
```
| Parameter |                                         Type                                         |
|-----------|--------------------------------------------------------------------------------------|
| consumer  | Consumer&lt;[HeaderInfo](/mods/sdmbestiary/bestiary/api/content/info/HeaderInfo)&gt; |



```zenscript
new HeaderInfo(text as Component, size as int) as HeaderInfo
```
| Parameter |                   Type                   |
|-----------|------------------------------------------|
| text      | [Component](/vanilla/api/text/Component) |
| size      | int                                      |



```zenscript
new HeaderInfo(text as Component, size as int, consumer as Consumer<HeaderInfo>) as HeaderInfo
```
| Parameter |                                         Type                                         |
|-----------|--------------------------------------------------------------------------------------|
| text      | [Component](/vanilla/api/text/Component)                                             |
| size      | int                                                                                  |
| consumer  | Consumer&lt;[HeaderInfo](/mods/sdmbestiary/bestiary/api/content/info/HeaderInfo)&gt; |



```zenscript
new HeaderInfo(text as Component, size as int, isCenter as boolean, consumer as Consumer<HeaderInfo>) as HeaderInfo
```
| Parameter |                                         Type                                         |
|-----------|--------------------------------------------------------------------------------------|
| text      | [Component](/vanilla/api/text/Component)                                             |
| size      | int                                                                                  |
| isCenter  | boolean                                                                              |
| consumer  | Consumer&lt;[HeaderInfo](/mods/sdmbestiary/bestiary/api/content/info/HeaderInfo)&gt; |



```zenscript
new HeaderInfo(text as Component, size as int, isCenter as boolean, x as int, y as int) as HeaderInfo
```
| Parameter |                   Type                   |
|-----------|------------------------------------------|
| text      | [Component](/vanilla/api/text/Component) |
| size      | int                                      |
| isCenter  | boolean                                  |
| x         | int                                      |
| y         | int                                      |



```zenscript
new HeaderInfo(text as Component, size as int, isCenter as boolean, x as int, y as int, consumer as Consumer<HeaderInfo>) as HeaderInfo
```
| Parameter |                                         Type                                         |
|-----------|--------------------------------------------------------------------------------------|
| text      | [Component](/vanilla/api/text/Component)                                             |
| size      | int                                                                                  |
| isCenter  | boolean                                                                              |
| x         | int                                                                                  |
| y         | int                                                                                  |
| consumer  | Consumer&lt;[HeaderInfo](/mods/sdmbestiary/bestiary/api/content/info/HeaderInfo)&gt; |



## Methods

:::group{name=addPos}

Return Type: [HeaderInfo](/mods/sdmbestiary/bestiary/api/content/info/HeaderInfo)

```zenscript
HeaderInfo.addPos(x as int, y as int) as HeaderInfo
```

| Parameter | Type |
|-----------|------|
| x         | int  |
| y         | int  |


:::

:::group{name=setParent}

```zenscript
HeaderInfo.setParent(content as InfoContent)
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| content   | [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent) |


:::


## Properties

|       Name       |                   Type                   | Has Getter | Has Setter |                                           Description                                           |
|------------------|------------------------------------------|------------|------------|-------------------------------------------------------------------------------------------------|
| h                | int                                      | true       | true       | Height                                                                                          |
| isCenter         | boolean                                  | true       | true       |                                                                                                 |
| isDrawBackGround | boolean                                  | true       | true       | Responsible for displaying the boundaries of the field. It is necessary for convenient editing. |
| size             | int                                      | true       | true       |                                                                                                 |
| text             | [Component](/vanilla/api/text/Component) | true       | true       |                                                                                                 |
| w                | int                                      | true       | true       | Weight                                                                                          |
| x                | int                                      | true       | true       |                                                                                                 |
| y                | int                                      | true       | true       |                                                                                                 |

