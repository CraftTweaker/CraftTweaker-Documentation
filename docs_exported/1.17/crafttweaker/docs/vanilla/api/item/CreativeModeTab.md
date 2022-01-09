# CreativeModeTab

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.CreativeModeTab;
```


## Methods

:::group{name=canScroll}

Return Type: boolean

```zenscript
// CreativeModeTab.canScroll() as boolean

myCreativeModeTab.canScroll();
```

:::

:::group{name=fillItemList}

Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/item/IItemStack)&gt;

```zenscript
// CreativeModeTab.fillItemList() as stdlib.List<IItemStack>

myCreativeModeTab.fillItemList();
```

:::

:::group{name=getBackgroundSuffix}

Return Type: string

```zenscript
// CreativeModeTab.getBackgroundSuffix() as string

myCreativeModeTab.getBackgroundSuffix();
```

:::

:::group{name=getColumn}

Return Type: int

```zenscript
// CreativeModeTab.getColumn() as int

myCreativeModeTab.getColumn();
```

:::

:::group{name=getDisplayName}

Return Type: [Component](/vanilla/api/text/Component)

```zenscript
// CreativeModeTab.getDisplayName() as Component

myCreativeModeTab.getDisplayName();
```

:::

:::group{name=getEnchantmentCategories}

Return Type: [EnchantmentCategory](/vanilla/api/item/enchantment/EnchantmentCategory)[]

```zenscript
// CreativeModeTab.getEnchantmentCategories() as EnchantmentCategory[]

myCreativeModeTab.getEnchantmentCategories();
```

:::

:::group{name=getIconItem}

Return Type: [IItemStack](/vanilla/api/item/IItemStack)

```zenscript
// CreativeModeTab.getIconItem() as IItemStack

myCreativeModeTab.getIconItem();
```

:::

:::group{name=getId}

Return Type: int

```zenscript
// CreativeModeTab.getId() as int

myCreativeModeTab.getId();
```

:::

:::group{name=getRecipeFolderName}

Return Type: string

```zenscript
// CreativeModeTab.getRecipeFolderName() as string

myCreativeModeTab.getRecipeFolderName();
```

:::

:::group{name=hasEnchantmentCategory}

Return Type: boolean

```zenscript
CreativeModeTab.hasEnchantmentCategory(category as EnchantmentCategory) as boolean
```

| Parameter | Type | Description |
|-----------|------|-------------|
| category | [EnchantmentCategory](/vanilla/api/item/enchantment/EnchantmentCategory) | No Description Provided |


:::

:::group{name=hideScroll}

Return Type: [CreativeModeTab](/vanilla/api/item/CreativeModeTab)

```zenscript
// CreativeModeTab.hideScroll() as CreativeModeTab

myCreativeModeTab.hideScroll();
```

:::

:::group{name=hideTitle}

Return Type: [CreativeModeTab](/vanilla/api/item/CreativeModeTab)

```zenscript
// CreativeModeTab.hideTitle() as CreativeModeTab

myCreativeModeTab.hideTitle();
```

:::

:::group{name=isAlignedRight}

Return Type: boolean

```zenscript
// CreativeModeTab.isAlignedRight() as boolean

myCreativeModeTab.isAlignedRight();
```

:::

:::group{name=isTopRow}

Return Type: boolean

```zenscript
// CreativeModeTab.isTopRow() as boolean

myCreativeModeTab.isTopRow();
```

:::

:::group{name=setBackgroundSuffix}

Return Type: [CreativeModeTab](/vanilla/api/item/CreativeModeTab)

```zenscript
CreativeModeTab.setBackgroundSuffix(prefix as string) as CreativeModeTab
```

| Parameter | Type | Description |
|-----------|------|-------------|
| prefix | string | No Description Provided |


:::

:::group{name=setEnchantmentCategories}

Return Type: [CreativeModeTab](/vanilla/api/item/CreativeModeTab)

```zenscript
CreativeModeTab.setEnchantmentCategories(categories as EnchantmentCategory[]) as CreativeModeTab
```

| Parameter | Type | Description |
|-----------|------|-------------|
| categories | [EnchantmentCategory](/vanilla/api/item/enchantment/EnchantmentCategory)[] | No Description Provided |


:::

:::group{name=setRecipeFolderName}

Return Type: [CreativeModeTab](/vanilla/api/item/CreativeModeTab)

```zenscript
CreativeModeTab.setRecipeFolderName(recipeFolderName as string) as CreativeModeTab
```

| Parameter | Type | Description |
|-----------|------|-------------|
| recipeFolderName | string | No Description Provided |


:::

:::group{name=showTitle}

Return Type: boolean

```zenscript
// CreativeModeTab.showTitle() as boolean

myCreativeModeTab.showTitle();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| backgroundSuffic | string | true | false | No Description Provided |
| canScroll | boolean | true | false | No Description Provided |
| column | int | true | false | No Description Provided |
| commandString | string | true | false | No Description Provided |
| displayName | [Component](/vanilla/api/text/Component) | true | false | No Description Provided |
| enchantmentCategories | [EnchantmentCategory](/vanilla/api/item/enchantment/EnchantmentCategory)[] | true | false | No Description Provided |
| iconItem | [IItemStack](/vanilla/api/item/IItemStack) | true | false | No Description Provided |
| id | int | true | false | No Description Provided |
| isAlignedRight | boolean | true | false | No Description Provided |
| isTopRow | boolean | true | false | No Description Provided |
| recipeFolderName | string | true | false | No Description Provided |
| showTitle | boolean | true | false | No Description Provided |

