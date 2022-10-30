# Expansion for ItemGroup

This expansion was added by a mod with mod-id `contenttweaker`. So you need to have this mod installed if you want to use this feature.

## Static Methods

:::group{name=create}

Creates a new custom item group. Throws an exception when trying creating two item groups with the same name.

Returns: the new item group  
Return Type: [ItemGroup](/vanilla/api/item/ItemGroup)

```zenscript
// ItemGroup.create(name as string, iconSupplier as IIconSupplier) as ItemGroup

ItemGroup.create("contenttweaker", () => <item:minecraft:dragon_egg>);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| name | string | the name of the item group |
| iconSupplier | [IIconSupplier](/mods/contenttweaker/API/functions/IIconSupplier) | the function to get the icon of the item group |


:::

