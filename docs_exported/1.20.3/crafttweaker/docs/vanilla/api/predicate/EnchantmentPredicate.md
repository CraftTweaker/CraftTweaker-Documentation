# EnchantmentPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.EnchantmentPredicate;
```


## Extending Record

EnchantmentPredicate extends Record. That means all methods available in Record are also available in EnchantmentPredicate

## Static Methods

:::group{name=create}

Return Type: [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)

```zenscript
EnchantmentPredicate.create(enchantment as Enchantment) as EnchantmentPredicate
```

|  Parameter  |                           Type                           |
|-------------|----------------------------------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment) |


:::

:::group{name=create}

Return Type: [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)

```zenscript
EnchantmentPredicate.create(level as IntMinMaxBoundsPredicate) as EnchantmentPredicate
```

| Parameter |                                    Type                                     |
|-----------|-----------------------------------------------------------------------------|
| level     | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

:::group{name=create}

Return Type: [EnchantmentPredicate](/vanilla/api/predicate/EnchantmentPredicate)

```zenscript
EnchantmentPredicate.create(enchantment as Enchantment, level as IntMinMaxBoundsPredicate) as EnchantmentPredicate
```

|  Parameter  |                                    Type                                     |
|-------------|-----------------------------------------------------------------------------|
| enchantment | [Enchantment](/vanilla/api/item/enchantment/Enchantment)                    |
| level       | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) |


:::

