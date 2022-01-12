# ItemPredicate

## Importare la Classe

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

| Parametro | Tipo                                         | Descrizione             |
| --------- | -------------------------------------------- | ----------------------- |
| items     | [IItemStack](/vanilla/api/item/IItemStack)[] | No Description Provided |


:::

:::group{name=create}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicate.create(items as ItemDefinition[]) as ItemPredicateBuilder
```

| Parametro | Tipo                                                 | Descrizione             |
| --------- | ---------------------------------------------------- | ----------------------- |
| items     | [ItemDefinition](/vanilla/api/item/ItemDefinition)[] | No Description Provided |


:::

:::group{name=create}

Return Type: [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder)

```zenscript
ItemPredicate.create(tag as MCTag<ItemDefinition>) as ItemPredicateBuilder
```

| Parametro | Tipo                                                                                                  | Descrizione             |
| --------- | ----------------------------------------------------------------------------------------------------- | ----------------------- |
| tag       | [MCTag](/vanilla/api/tag/MCTag)&lt;[ItemDefinition](/vanilla/api/item/ItemDefinition)&gt; | No Description Provided |


:::

