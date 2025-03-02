# ItemPredicate

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.ItemPredicate;
```


## Static Methods

:::group{name=any}

Return Type: [ItemPredicate](/vanilla/api/predicate/ItemPredicate)

```zenscript
// ItemPredicate.any() as ItemPredicate

ItemPredicate.any();
```

:::

:::group{name=create}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
// ItemPredicate.create() as ItemPredicateBuilder

ItemPredicate.create();
```

:::

:::group{name=create}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicate.create(items as IItemStack[]) as ItemPredicateBuilder
```

| Parameter |                     Type                     |
|-----------|----------------------------------------------|
| items     | [IItemStack](/vanilla/api/item/IItemStack)[] |


:::

:::group{name=create}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicate.create(items as ItemDefinition[]) as ItemPredicateBuilder
```

| Parameter |                         Type                         |
|-----------|------------------------------------------------------|
| items     | [ItemDefinition](/vanilla/api/item/ItemDefinition)[] |


:::

:::group{name=create}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicate.create(tag as KnownTag<ItemDefinition>) as ItemPredicateBuilder
```

| Parameter |                                                 Type                                                 |
|-----------|------------------------------------------------------------------------------------------------------|
| tag       | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt; |


:::

## Methods

:::group{name=matches}

Return Type: boolean

```zenscript
ItemPredicate.matches(stack as IItemStack) as boolean
```

| Parameter |                    Type                    |
|-----------|--------------------------------------------|
| stack     | [IItemStack](/vanilla/api/item/IItemStack) |


:::


