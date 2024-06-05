# ItemEnchantments

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.ItemEnchantments;
```


## Static Methods

:::group{name=empty}

Return Type: [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments)

```zenscript
// ItemEnchantments.empty() as ItemEnchantments

ItemEnchantments.empty();
```

:::

## Methods

:::group{name=getLevel}

Return Type: int

```zenscript
ItemEnchantments.getLevel(enchantment as Enchantment) as int
```

|  Parameter  |                           Type                           |
|-------------|----------------------------------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) |


:::

:::group{name=withTooltip}

Return Type: [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments)

```zenscript
ItemEnchantments.withTooltip(withTooltip as boolean) as ItemEnchantments
```

|  Parameter  |  Type   |
|-------------|---------|
| withTooltip | boolean |


:::


## Properties

|  Name   |                                Type                                 | Has Getter | Has Setter |
|---------|---------------------------------------------------------------------|------------|------------|
| entries | int?[[Enchantment](/vanilla/api/item/enchantment/Enchantment)]      | true       | false      |
| isEmpty | boolean                                                             | true       | false      |
| keySet  | Set&lt;[Enchantment](/vanilla/api/item/enchantment/Enchantment)&gt; | true       | false      |
| size    | int                                                                 | true       | false      |

