# AlternativeLootConditionBuilder

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.builder.AlternativeLootConditionBuilder;
```


## Interfacce Implementate
AlternativeLootConditionBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in AlternativeLootConditionBuilder

- [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

## Caster

| Tipo Risultato                                             | Implicito |
| ---------------------------------------------------------- | --------- |
| [LootCondition](/vanilla/api/loot/condition/LootCondition) | sì        |

## Metodi

:::group{name=or}

Return Type: [AlternativeLootConditionBuilder](/vanilla/api/loot/condition/builder/AlternativeLootConditionBuilder)

```zenscript
AlternativeLootConditionBuilder.or(condition as LootConditionBuilder) as AlternativeLootConditionBuilder
```

| Parametro | Tipo                                                                             | Descrizione             |
| --------- | -------------------------------------------------------------------------------- | ----------------------- |
| condition | [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder) | No Description Provided |


:::


