# ItemTab

The item button. It looks like an item in the inventory.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.sdmbestiary.bestiary.api.content.tab.ItemTab;
```


## Implemented Interfaces
ItemTab implements the following interfaces. That means all methods defined in these interfaces are also available in ItemTab

- [IInfoTabContent](/mods/sdmbestiary/bestiary/api/content/IInfoTabContent)

## Constructors


```zenscript
new ItemTab(consumer as Consumer<ItemTab>) as ItemTab
```
| Parameter |                                     Type                                      |
|-----------|-------------------------------------------------------------------------------|
| consumer  | Consumer&lt;[ItemTab](/mods/sdmbestiary/bestiary/api/content/tab/ItemTab)&gt; |



```zenscript
new ItemTab(component as Component, id as string) as ItemTab
```
| Parameter |                   Type                   |
|-----------|------------------------------------------|
| component | [Component](/vanilla/api/text/Component) |
| id        | string                                   |



```zenscript
new ItemTab(component as Component, stack as IItemStack, id as string) as ItemTab
```
| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| component | [Component](/vanilla/api/text/Component)   |
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |
| id        | string                                     |



## Methods

:::group{name=addContent}

Return Type: [ItemTab](/mods/sdmbestiary/bestiary/api/content/tab/ItemTab)

```zenscript
ItemTab.addContent(content as InfoContent) as ItemTab
```

| Parameter |                               Type                                |
|-----------|-------------------------------------------------------------------|
| content   | [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent) |


:::

:::group{name=setIcon}

Return Type: [ItemTab](/mods/sdmbestiary/bestiary/api/content/tab/ItemTab)

```zenscript
ItemTab.setIcon(icon as Icon) as ItemTab
```

| Parameter |                  Type                   |
|-----------|-----------------------------------------|
| icon      | [Icon](/mods/sdmbestiary/bestiary/Icon) |


:::


## Properties

|   Name    |                               Type                                | Has Getter | Has Setter |                             Description                             |
|-----------|-------------------------------------------------------------------|------------|------------|---------------------------------------------------------------------|
| component | [Component](/vanilla/api/text/Component)                          | true       | true       |                                                                     |
| content   | [InfoContent](/mods/sdmbestiary/bestiary/api/content/InfoContent) | true       | true       |                                                                     |
| group     | [Group](/mods/sdmbestiary/bestiary/api/content/tab/Group)         | true       | true       |                                                                     |
| icon      | [Icon](/mods/sdmbestiary/bestiary/Icon)                           | true       | true       |                                                                     |
| id        | string                                                            | true       | true       | The ID is needed to create links to tabs through different widgets. |
| stack     | [ItemStack](/vanilla/api/item/ItemStack)                          | true       | true       |                                                                     |

