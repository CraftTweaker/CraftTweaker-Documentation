# ItemEnchantmentsMutable

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.component.ItemEnchantmentsMutable;
```


## Methods

:::group{name=getLevel}

Return Type: int

```zenscript
ItemEnchantmentsMutable.getLevel(enchantment as Enchantment) as int
```

|  Parameter  |                           Type                           |
|-------------|----------------------------------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) |


:::

:::group{name=of}

Return Type: [ItemEnchantmentsMutable](/vanilla/api/item/component/ItemEnchantmentsMutable)

```zenscript
ItemEnchantmentsMutable.of(enchantments as ItemEnchantments) as ItemEnchantmentsMutable
```

|  Parameter   |                               Type                               | Optional |
|--------------|------------------------------------------------------------------|----------|
| enchantments | [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments) | true     |


:::

:::group{name=removeIf}

```zenscript
ItemEnchantmentsMutable.removeIf(predicate as Predicate<Enchantment>)
```

| Parameter |                                   Type                                    |
|-----------|---------------------------------------------------------------------------|
| predicate | Predicate&lt;[Enchantment](/vanilla/api/item/enchantment/Enchantment)&gt; |


:::

:::group{name=setEnchantment}

```zenscript
ItemEnchantmentsMutable.setEnchantment(enchantment as Enchantment, level as int)
```

|  Parameter  |                           Type                           |
|-------------|----------------------------------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) |
| level       | int                                                      |


:::

:::group{name=toImmutable}

Return Type: [ItemEnchantments](/vanilla/api/item/component/ItemEnchantments)

```zenscript
// ItemEnchantmentsMutable.toImmutable() as ItemEnchantments

myItemEnchantmentsMutable.toImmutable();
```

:::

:::group{name=upgrade}

```zenscript
ItemEnchantmentsMutable.upgrade(enchantment as Enchantment, level as int)
```

|  Parameter  |                           Type                           |
|-------------|----------------------------------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) |
| level       | int                                                      |


:::


## Properties

|  Name  |                                Type                                 | Has Getter | Has Setter |
|--------|---------------------------------------------------------------------|------------|------------|
| keySet | Set&lt;[Enchantment](/vanilla/api/item/enchantment/Enchantment)&gt; | true       | false      |

