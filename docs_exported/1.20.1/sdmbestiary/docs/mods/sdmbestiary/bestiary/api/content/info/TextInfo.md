# TextInfo

A text class. It can be multi-line.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmbestiary.bestiary.api.content.info.TextInfo;
```


## Implemented Interfaces
TextInfo implements the following interfaces. That means all methods defined in these interfaces are also available in TextInfo

- [ISimpleInfoContent](/mods/sdmbestiary/bestiary/api/content/ISimpleInfoContent)&lt;[TextInfo](/mods/sdmbestiary/bestiary/api/content/info/TextInfo)&gt;

## Constructors


```zenscript
new TextInfo() as TextInfo
new TextInfo();
```

```zenscript
new TextInfo(consumer as Consumer<TextInfo>) as TextInfo
```
| Parameter |                                       Type                                       |
|-----------|----------------------------------------------------------------------------------|
| consumer  | Consumer&lt;[TextInfo](/mods/sdmbestiary/bestiary/api/content/info/TextInfo)&gt; |



```zenscript
new TextInfo(componentBooleanMa as stdlib.List<Component>, consumer as Consumer<TextInfo>) as TextInfo
```
|     Parameter      |                                       Type                                       |
|--------------------|----------------------------------------------------------------------------------|
| componentBooleanMa | stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt;                      |
| consumer           | Consumer&lt;[TextInfo](/mods/sdmbestiary/bestiary/api/content/info/TextInfo)&gt; |



## Methods

:::group{name=addLine}

Return Type: [TextInfo](/mods/sdmbestiary/bestiary/api/content/info/TextInfo)

```zenscript
TextInfo.addLine(string as Component) as TextInfo
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| string    | [Component](/vanilla/api/text/Component) |


:::

:::group{name=getEndY}

Return Type: int

```zenscript
// TextInfo.getEndY() as int

myTextInfo.getEndY();
```

:::

:::group{name=setSpace}

Return Type: [TextInfo](/mods/sdmbestiary/bestiary/api/content/info/TextInfo)

```zenscript
TextInfo.setSpace(space as int) as TextInfo
```

| Parameter | Type |
|-----------|------|
| space     | int  |


:::


## Properties

|        Name         |                               Type                                | Has Getter | Has Setter |                                           Description                                           |
|---------------------|-------------------------------------------------------------------|------------|------------|-------------------------------------------------------------------------------------------------|
| componentBooleanMap | stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt;       | true       | true       |                                                                                                 |
| h                   | int                                                               | true       | true       | Height                                                                                          |
| isDrawBackGround    | boolean                                                           | true       | true       | Responsible for displaying the boundaries of the field. It is necessary for convenient editing. |
| parent              | [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent) | true       | true       |                                                                                                 |
| space               | int                                                               | true       | true       |                                                                                                 |
| w                   | int                                                               | true       | true       | Weight                                                                                          |
| x                   | int                                                               | true       | true       |                                                                                                 |
| y                   | int                                                               | true       | true       |                                                                                                 |

