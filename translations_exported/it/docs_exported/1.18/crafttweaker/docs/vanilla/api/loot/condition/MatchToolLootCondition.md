# MatchToolLootCondition

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.MatchToolLootCondition;
```


## Interfacce Implementate
MatchToolLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in MatchToolLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
MatchToolLootCondition.create(predicate as ItemPredicateBuilder) as LootConditionBuilder
```

| Parametro | Tipo                                                                        |
| --------- | --------------------------------------------------------------------------- |
| predicate | [ItemPredicateBuilder](/vanilla/api/predicate/builder/ItemPredicateBuilder) |


:::

