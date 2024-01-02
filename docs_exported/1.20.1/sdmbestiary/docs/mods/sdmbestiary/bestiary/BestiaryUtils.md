# BestiaryUtils

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmbestiary.bestiary.BestiaryUtils;
```


## Static Methods

:::group{name=createGroup}

Registers the tab element.

```zenscript
BestiaryUtils.createGroup(tab as IInfoTabContent)
```

| Parameter |                                   Type                                    |
|-----------|---------------------------------------------------------------------------|
| tab       | [IInfoTabContent](/mods/sdmbestiary/bestiary/api/content/IInfoTabContent) |


:::

:::group{name=createGroup}

Registers the tab element.

```zenscript
BestiaryUtils.createGroup(tab as IInfoTabContent, content as InfoContent)
```

| Parameter |                                   Type                                    |
|-----------|---------------------------------------------------------------------------|
| tab       | [IInfoTabContent](/mods/sdmbestiary/bestiary/api/content/IInfoTabContent) |
| content   | [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent)         |


:::

:::group{name=createIcon}

Return Type: [Icon](/mods/sdmbestiary/bestiary/Icon)

```zenscript
BestiaryUtils.createIcon(id as IItemStack) as Icon
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| id        | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=createIcon}

Return Type: [Icon](/mods/sdmbestiary/bestiary/Icon)

```zenscript
BestiaryUtils.createIcon(id as ResourceLocation) as Icon
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=createIcon}

Return Type: [Icon](/mods/sdmbestiary/bestiary/Icon)

```zenscript
BestiaryUtils.createIcon(id as string) as Icon
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


:::

:::group{name=createImageIcon}

Return Type: [Icon](/mods/sdmbestiary/bestiary/Icon)

```zenscript
BestiaryUtils.createImageIcon(id as ResourceLocation) as Icon
```

| Parameter |                            Type                            |
|-----------|------------------------------------------------------------|
| id        | [ResourceLocation](/vanilla/api/resource/ResourceLocation) |


:::

:::group{name=createImageIcon}

Return Type: [Icon](/mods/sdmbestiary/bestiary/Icon)

```zenscript
BestiaryUtils.createImageIcon(id as string) as Icon
```

| Parameter |  Type  |
|-----------|--------|
| id        | string |


:::

:::group{name=isHideTittle}

```zenscript
BestiaryUtils.isHideTittle(value as boolean)
```

| Parameter |  Type   |
|-----------|---------|
| value     | boolean |


:::

:::group{name=setTittle}

```zenscript
BestiaryUtils.setTittle(value as Component)
```

| Parameter |                   Type                   |
|-----------|------------------------------------------|
| value     | [Component](/vanilla/api/text/Component) |


:::

