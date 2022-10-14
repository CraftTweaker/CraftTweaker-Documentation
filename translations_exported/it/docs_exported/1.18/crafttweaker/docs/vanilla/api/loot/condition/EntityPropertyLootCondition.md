# EntityPropertyLootCondition

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.EntityPropertyLootCondition;
```


## Interfacce Implementate
EntityPropertyLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in EntityPropertyLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
EntityPropertyLootCondition.create(target as EntityTarget) as LootConditionBuilder
```

| Parametro | Tipo                                           |
| --------- | ---------------------------------------------- |
| target    | [EntityTarget](/vanilla/api/loot/EntityTarget) |


:::

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
EntityPropertyLootCondition.create(target as EntityTarget, predicate as EntityPredicateBuilder) as LootConditionBuilder
```

| Parametro | Tipo                                                                            |
| --------- | ------------------------------------------------------------------------------- |
| target    | [EntityTarget](/vanilla/api/loot/EntityTarget)                                  |
| predicate | [EntityPredicateBuilder](/vanilla/api/predicate/builder/EntityPredicateBuilder) |


:::

