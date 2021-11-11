# ItemGroup

An ItemGroup is a group of Items that is shown in the Creative mode inventory.

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.ItemGroup;
```


## Methods

:::group{name=fill}

Fills the given List with this ItemGroup's Items.

Return Type: void

```zenscript
// ItemGroup.fill(items as stdlib.List<IItemStack>) as void

<itemgroup:misc>.fill(new List<IItemStack>(););
```

| Parameter | Type | Description |
|-----------|------|-------------|
| items | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | The list to fill. |


:::

:::group{name=getGroupName}

Gets the translated ItemGroup name.

Returns: The translated ItemGroup name.  
Return Type: [MCTextComponent](/vanilla/api/util/text/MCTextComponent)

```zenscript
// ItemGroup.getGroupName() as MCTextComponent

<itemgroup:misc>.getGroupName();
```

:::

:::group{name=getItems}

Gets the items in this ItemGroup.

Returns: A list containing all the items in this ItemGroup.  
Return Type: stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt;

```zenscript
// ItemGroup.getItems() as stdlib.List<IItemStack>

<itemgroup:misc>.getItems();
```

:::

:::group{name=getLabelColor}

Gets the color of the ItemGroup's name.

Returns: The color of the ItemGroup's name.  
Return Type: int

```zenscript
// ItemGroup.getLabelColor() as int

<itemgroup:misc>.getLabelColor();
```

:::

:::group{name=getPath}

Gets the path of this ItemGroup.
 The path is the name of the ItemGroup.

Returns: The path of this ItemGroup.  
Return Type: string

```zenscript
// ItemGroup.getPath() as string

<itemgroup:misc>.getPath();
```

:::

:::group{name=getRelevantEnchantmentTypes}

Gets the relevant EnchantmentTypes of this ItemGroup.
 The EnchantmentTypes are used to determine what enchanted books should be put in the tab.

Returns: This ItemGroup's enchantment types.  
Return Type: [EnchantmentType](/vanilla/api/enchantment/EnchantmentType)[]

```zenscript
// ItemGroup.getRelevantEnchantmentTypes() as EnchantmentType[]

<itemgroup:misc>.getRelevantEnchantmentTypes();
```

:::

:::group{name=getSearchbarWidth}

Gets the width of the searchbar.

Returns: The width of the searchbar.  
Return Type: int

```zenscript
// ItemGroup.getSearchbarWidth() as int

<itemgroup:misc>.getSearchbarWidth();
```

:::

:::group{name=getSlotColor}

Gets the slot color that this ItemGroup uses.

Returns: The slot color that this ItemGroup uses.  
Return Type: int

```zenscript
// ItemGroup.getSlotColor() as int

<itemgroup:misc>.getSlotColor();
```

:::

:::group{name=getTabPage}

Gets the page in the Creative Menu that this ItemGroup is on.

Returns: The page that this ItemGroup is on.  
Return Type: int

```zenscript
// ItemGroup.getTabPage() as int

<itemgroup:misc>.getTabPage();
```

:::

:::group{name=hasRelevantEnchantmentType}

Checks if this ItemGroup has the given EnchantmentType.

Returns: True if it contains the EnchantmentType. False otherwise.  
Return Type: boolean

```zenscript
// ItemGroup.hasRelevantEnchantmentType(enchantmentType as EnchantmentType?) as boolean

<itemgroup:misc>.hasRelevantEnchantmentType(EnchantmentType.ARMOR);
```

| Parameter | Type | Description |
|-----------|------|-------------|
| enchantmentType | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType)? | The EnchantmentType to check. |


:::

:::group{name=hasSearchBar}

Checks if this ItemGroup has a search bar.

Returns: True if this ItemGroup has a search bar. False otherwise.  
Return Type: boolean

```zenscript
// ItemGroup.hasSearchBar() as boolean

<itemgroup:misc>.hasSearchBar();
```

:::


## Properties

| Name | Type | Has Getter | Has Setter | Description |
|------|------|------------|------------|-------------|
| commandString | string | true | false | No Description Provided |
| groupName | [MCTextComponent](/vanilla/api/util/text/MCTextComponent) | true | false | Gets the translated ItemGroup name. |
| items | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | true | false | Gets the items in this ItemGroup. |
| labelColor | int | true | false | Gets the color of the ItemGroup's name. |
| page | int | true | false | Gets the page in the Creative Menu that this ItemGroup is on. |
| path | string | true | false | Gets the path of this ItemGroup. <br />  The path is the name of the ItemGroup. |
| relevantEnchantmentTypes | [EnchantmentType](/vanilla/api/enchantment/EnchantmentType)[] | true | false | Gets the relevant EnchantmentTypes of this ItemGroup. <br />  The EnchantmentTypes are used to determine what enchanted books should be put in the tab. |
| searchBar | boolean | true | false | Checks if this ItemGroup has a search bar. |
| searchBarWidth | int | true | false | Gets the width of the searchbar. |
| slotColor | int | true | false | Gets the slot color that this ItemGroup uses. |

