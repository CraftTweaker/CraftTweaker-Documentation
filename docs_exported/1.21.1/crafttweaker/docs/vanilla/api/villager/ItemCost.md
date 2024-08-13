# ItemCost

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.villager.ItemCost;
```


## Extending Record

ItemCost extends Record. That means all methods available in Record are also available in ItemCost

## Static Methods

:::group{name=of}

Return Type: [ItemCost](/vanilla/api/villager/ItemCost)

```zenscript
ItemCost.of(stack as IItemStack) as ItemCost
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=of}

Return Type: [ItemCost](/vanilla/api/villager/ItemCost)

```zenscript
ItemCost.of(stack as IItemStack, predicate as DataComponentPredicate) as ItemCost
```

| Parameter |                                  Type                                   |
|-----------|-------------------------------------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack)                              |
| predicate | [DataComponentPredicate](/vanilla/api/predicate/DataComponentPredicate) |


:::

## Methods

:::group{name=components}

Return Type: [DataComponentPredicate](/vanilla/api/predicate/DataComponentPredicate)

```zenscript
// ItemCost.components() as DataComponentPredicate

myItemCost.components();
```

:::

:::group{name=test}

Return Type: boolean

```zenscript
ItemCost.test(stack as IItemStack) as boolean
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::

:::group{name=withComponents}

Return Type: [ItemCost](/vanilla/api/villager/ItemCost)

```zenscript
ItemCost.withComponents(operator as UnaryOperator<DataComponentPredicateBuilder>) as ItemCost
```

| Parameter |                                                        Type                                                        |
|-----------|--------------------------------------------------------------------------------------------------------------------|
| operator  | UnaryOperator&lt;[DataComponentPredicateBuilder](/vanilla/api/predicate/builder/DataComponentPredicateBuilder)&gt; |


:::


## Properties

|   Name    |                        Type                        | Has Getter | Has Setter |
|-----------|----------------------------------------------------|------------|------------|
| count     | int                                                | true       | false      |
| item      | [ItemDefinition](/vanilla/api/item/ItemDefinition) | true       | false      |
| itemStack | [IItemStack](/vanilla/api/item/IItemStack)         | true       | false      |

