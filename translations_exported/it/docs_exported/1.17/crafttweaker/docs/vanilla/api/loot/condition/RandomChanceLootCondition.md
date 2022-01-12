# RandomChanceLootCondition

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.RandomChanceLootCondition;
```


## Interfacce Implementate
RandomChanceLootCondition implements the following interfaces. That means all methods defined in these interfaces are also available in RandomChanceLootCondition

- [LootCondition](/vanilla/api/loot/condition/LootCondition)

## Static Methods

:::group{name=create}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
RandomChanceLootCondition.create(probability as float) as LootConditionBuilder
```

| Parametro   | Tipo  | Descrizione             |
| ----------- | ----- | ----------------------- |
| probability | float | No Description Provided |


:::

