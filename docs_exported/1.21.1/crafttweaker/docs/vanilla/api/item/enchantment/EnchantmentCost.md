# EnchantmentCost

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.enchantment.EnchantmentCost;
```


## Extending Record

EnchantmentCost extends Record. That means all methods available in Record are also available in EnchantmentCost

## Methods

:::group{name=calculate}

Return Type: int

```zenscript
EnchantmentCost.calculate(level as int) as int
```

| Parameter | Type |
|-----------|------|
| level     | int  |


:::


## Properties

|        Name        | Type | Has Getter | Has Setter |
|--------------------|------|------------|------------|
| base               | int  | true       | false      |
| perLevelAboveFirst | int  | true       | false      |

