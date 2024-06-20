# ButtonInfo

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmbestiary.bestiary.api.content.info.ButtonInfo;
```


## Implemented Interfaces
ButtonInfo implements the following interfaces. That means all methods defined in these interfaces are also available in ButtonInfo

- [ISimpleInfoContent](/mods/sdmbestiary/bestiary/api/content/ISimpleInfoContent)&lt;[ButtonInfo](/mods/sdmbestiary/bestiary/api/content/info/buttons/ButtonInfo)&gt;

## Constructors


```zenscript
new ButtonInfo(consumer as Consumer<ButtonInfo>) as ButtonInfo
```
| Parameter |                                             Type                                             |
|-----------|----------------------------------------------------------------------------------------------|
| consumer  | Consumer&lt;[ButtonInfo](/mods/sdmbestiary/bestiary/api/content/info/buttons/ButtonInfo)&gt; |



## Methods

:::group{name=setParent}

```zenscript
ButtonInfo.setParent(content as InfoContent)
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| content   | [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent) |


:::

:::group{name=setURL}



Return Type: [ButtonInfo](/mods/sdmbestiary/bestiary/api/content/info/buttons/ButtonInfo)

```zenscript
ButtonInfo.setURL(url as string) as ButtonInfo
```

| Parameter |  Type  |              Description               |
|-----------|--------|----------------------------------------|
| url       | string | - A link to a tab or page on the site. |


:::


## Properties

|   Name   |                   Type                   | Has Getter | Has Setter |                      Description                      |
|----------|------------------------------------------|------------|------------|-------------------------------------------------------|
| clickURL | string                                   | true       | true       | A link to a tab by their ID or page link on the site. |
| h        | int                                      | true       | true       | Height                                                |
| icon     | [Icon](/mods/sdmbestiary/bestiary/Icon)  | true       | true       |                                                       |
| text     | [Component](/vanilla/api/text/Component) | true       | true       |                                                       |
| w        | int                                      | true       | true       | Width                                                 |
| x        | int                                      | true       | true       |                                                       |
| y        | int                                      | true       | true       |                                                       |

