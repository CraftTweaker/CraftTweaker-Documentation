# EnchantmentPredicate

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.EnchantmentPredicate;
```


## Static Methods

:::group{name=any}

Return Type: [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)

```zenscript
// EnchantmentPredicate.any() as EnchantmentPredicate

EnchantmentPredicate.any();
```

:::

:::group{name=create}

Return Type: [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)

```zenscript
EnchantmentPredicate.create(enchantment as Enchantment) as EnchantmentPredicate
```

| Параметр    | Тип                                                      | Описание                |
| ----------- | -------------------------------------------------------- | ----------------------- |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) | No Description Provided |


:::

:::group{name=create}

Return Type: [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)

```zenscript
EnchantmentPredicate.create(level as IntMinMaxBoundsPredicate) as EnchantmentPredicate
```

| Параметр | Тип                                                                         | Описание                |
| -------- | --------------------------------------------------------------------------- | ----------------------- |
| level    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=create}

Return Type: [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)

```zenscript
EnchantmentPredicate.create(enchantment as Enchantment, level as IntMinMaxBoundsPredicate) as EnchantmentPredicate
```

| Параметр    | Тип                                                                         | Описание                |
| ----------- | --------------------------------------------------------------------------- | ----------------------- |
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment)                    | No Description Provided |
| level       | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

