# ImageInfo

The class of the icon. It can be either an icon of an object or a picture.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmbestiary.bestiary.api.content.info.ImageInfo;
```


## Implemented Interfaces
ImageInfo implements the following interfaces. That means all methods defined in these interfaces are also available in ImageInfo

- [ISimpleInfoContent](/mods/sdmbestiary/bestiary/api/content/ISimpleInfoContent)&lt;[ImageInfo](/mods/sdmbestiary/bestiary/api/content/info/ImageInfo)&gt;

## Constructors


```zenscript
new ImageInfo(consumer as Consumer<ImageInfo>) as ImageInfo
```
| Parameter |                                        Type                                        |
|-----------|------------------------------------------------------------------------------------|
| consumer  | Consumer&lt;[ImageInfo](/mods/sdmbestiary/bestiary/api/content/info/ImageInfo)&gt; |



```zenscript
new ImageInfo(icon as Icon, weight as int, height as int) as ImageInfo
```
| Parameter |                  Type                   |
|-----------|-----------------------------------------|
| icon      | [Icon](/mods/sdmbestiary/bestiary/Icon) |
| weight    | int                                     |
| height    | int                                     |



```zenscript
new ImageInfo(icon as Icon, weight as int, height as int, consumer as Consumer<ImageInfo>) as ImageInfo
```
| Parameter |                                        Type                                        |
|-----------|------------------------------------------------------------------------------------|
| icon      | [Icon](/mods/sdmbestiary/bestiary/Icon)                                            |
| weight    | int                                                                                |
| height    | int                                                                                |
| consumer  | Consumer&lt;[ImageInfo](/mods/sdmbestiary/bestiary/api/content/info/ImageInfo)&gt; |



## Methods

:::group{name=setParent}

```zenscript
ImageInfo.setParent(content as InfoContent)
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| content   | [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent) |


:::


## Properties

|       Name       |                  Type                   | Has Getter | Has Setter |                                           Description                                           |
|------------------|-----------------------------------------|------------|------------|-------------------------------------------------------------------------------------------------|
| h                | int                                     | true       | true       | Height                                                                                          |
| height           | int                                     | true       | true       |                                                                                                 |
| icon             | [Icon](/mods/sdmbestiary/bestiary/Icon) | true       | true       |                                                                                                 |
| isDrawBackGround | boolean                                 | true       | true       | Responsible for displaying the boundaries of the field. It is necessary for convenient editing. |
| w                | int                                     | true       | true       | Weight                                                                                          |
| weight           | int                                     | true       | true       |                                                                                                 |
| x                | int                                     | true       | true       |                                                                                                 |
| y                | int                                     | true       | true       |                                                                                                 |

