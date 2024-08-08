# ButtonItemInfo

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmbestiary.bestiary.api.content.info.ButtonItemInfo;
```


## Implemented Interfaces
ButtonItemInfo implements the following interfaces. That means all methods defined in these interfaces are also available in ButtonItemInfo

- [ISimpleInfoContent](/mods/sdmbestiary/bestiary/api/content/ISimpleInfoContent)&lt;[ButtonItemInfo](/mods/sdmbestiary/bestiary/api/content/info/buttons/ButtonItemInfo)&gt;

## Constructors


```zenscript
new ButtonItemInfo(consumer as Consumer<ButtonItemInfo>) as ButtonItemInfo
```
| Parameter |                                                 Type                                                 |
|-----------|------------------------------------------------------------------------------------------------------|
| consumer  | Consumer&lt;[ButtonItemInfo](/mods/sdmbestiary/bestiary/api/content/info/buttons/ButtonItemInfo)&gt; |



## Methods

:::group{name=setParent}

```zenscript
ButtonItemInfo.setParent(content as InfoContent)
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| content   | [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent) |


:::

:::group{name=setURL}



Return Type: [ButtonItemInfo](/mods/sdmbestiary/bestiary/api/content/info/buttons/ButtonItemInfo)

```zenscript
ButtonItemInfo.setURL(url as string) as ButtonItemInfo
```

| Parameter |  Type  |              Description               |
|-----------|--------|----------------------------------------|
| url       | string | - A link to a tab or page on the site. |


:::


## Properties

|     Name      |                            Type                             | Has Getter | Has Setter |                      Description                      |
|---------------|-------------------------------------------------------------|------------|------------|-------------------------------------------------------|
| clickURL      | string                                                      | true       | true       | A link to a tab by their ID or page link on the site. |
| componentText | stdlib.List&lt;[Component](/vanilla/api/text/Component)&gt; | true       | true       |                                                       |
| h             | int                                                         | true       | true       | Height                                                |
| item          | [IItemStack](/vanilla/api/item/IItemStack)                  | true       | true       |                                                       |
| w             | int                                                         | true       | true       | Weight                                                |
| x             | int                                                         | true       | true       |                                                       |
| y             | int                                                         | true       | true       |                                                       |

