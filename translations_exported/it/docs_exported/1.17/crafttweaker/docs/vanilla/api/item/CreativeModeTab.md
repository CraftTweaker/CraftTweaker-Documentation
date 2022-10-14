# CreativeModeTab

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.CreativeModeTab;
```


## Metodi

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

| Parametro | Tipo                                                                     | Descrizione             |
| --------- | ------------------------------------------------------------------------ | ----------------------- |
| category  | [EnchantmentCategory](/vanilla/api/item/enchantment/EnchantmentCategory) | No Description Provided |


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

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| prefix    | string | No Description Provided |


:::

:::group{name=setEnchantmentCategories}

Return Type: [CreativeModeTab](/vanilla/api/item/CreativeModeTab)

```zenscript
CreativeModeTab.setEnchantmentCategories(categories as EnchantmentCategory[]) as CreativeModeTab
```

| Parametro  | Tipo                                                                       | Descrizione             |
| ---------- | -------------------------------------------------------------------------- | ----------------------- |
| categories | [EnchantmentCategory](/vanilla/api/item/enchantment/EnchantmentCategory)[] | No Description Provided |


:::

:::group{name=setRecipeFolderName}

Return Type: [CreativeModeTab](/vanilla/api/item/CreativeModeTab)

```zenscript
CreativeModeTab.setRecipeFolderName(recipeFolderName as string) as CreativeModeTab
```

| Parametro        | Tipo   | Descrizione             |
| ---------------- | ------ | ----------------------- |
| recipeFolderName | string | No Description Provided |


:::

:::group{name=showTitle}

Return Type: boolean

```zenscript
// CreativeModeTab.showTitle() as boolean

myCreativeModeTab.showTitle();
```

:::


## Proprietà

| Nome                  | Tipo                                                                       | Ha Getter | Ha Setter | Descrizione             |
| --------------------- | -------------------------------------------------------------------------- | --------- | --------- | ----------------------- |
| backgroundSuffic      | string                                                                     | sì        | no        | No Description Provided |
| canScroll             | boolean                                                                    | sì        | no        | No Description Provided |
| column                | int                                                                        | sì        | no        | No Description Provided |
| commandString         | string                                                                     | sì        | no        | No Description Provided |
| displayName           | [Component](/vanilla/api/text/Component)                                   | sì        | no        | No Description Provided |
| enchantmentCategories | [EnchantmentCategory](/vanilla/api/item/enchantment/EnchantmentCategory)[] | sì        | no        | No Description Provided |
| iconItem              | [IItemStack](/vanilla/api/item/IItemStack)                                 | sì        | no        | No Description Provided |
| id                    | int                                                                        | sì        | no        | No Description Provided |
| isAlignedRight        | boolean                                                                    | sì        | no        | No Description Provided |
| isTopRow              | boolean                                                                    | sì        | no        | No Description Provided |
| recipeFolderName      | string                                                                     | sì        | no        | No Description Provided |
| showTitle             | boolean                                                                    | sì        | no        | No Description Provided |

