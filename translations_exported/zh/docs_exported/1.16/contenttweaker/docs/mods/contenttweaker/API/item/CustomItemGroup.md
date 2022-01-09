# Expansion for ItemGroup

This expansion was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## Static Methods

:::group{name=create}

Creates a new custom item group. Throws an exception when trying creating two item groups with the same name.

Returns: the new item group  
Return Type: [ItemGroup](/vanilla/api/item/ItemGroup)

```zenscript
// ItemGroup.create(name as string, iconSupplier as IIconSupplier) as ItemGroup

ItemGroup.create("contenttweaker", () => <item:minecraft:dragon_egg>);
```

| 参数           | 类型                                                                | 描述                                             |
| ------------ | ----------------------------------------------------------------- | ---------------------------------------------- |
| name（名称）     | string                                                            | the name of the item group                     |
| iconSupplier | [IIconSupplier](/mods/contenttweaker/API/functions/IIconSupplier) | the function to get the icon of the item group |


:::

