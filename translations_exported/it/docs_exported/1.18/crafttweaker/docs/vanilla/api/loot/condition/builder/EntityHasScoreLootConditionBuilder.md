# EntityHasScoreLootConditionBuilder

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.builder.EntityHasScoreLootConditionBuilder;
```


## Interfacce Implementate
EntityHasScoreLootConditionBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in EntityHasScoreLootConditionBuilder

- [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

## Caster

| Tipo Risultato                                             | Implicito |
| ---------------------------------------------------------- | --------- |
| [LootCondition](/vanilla/api/loot/condition/LootCondition) | sì        |

## Metodi

:::group{name=withScore}

Return Type: [EntityHasScoreLootConditionBuilder](/vanilla/api/loot/condition/builder/EntityHasScoreLootConditionBuilder)

```zenscript
EntityHasScoreLootConditionBuilder.withScore(name as string, range as IntRange) as EntityHasScoreLootConditionBuilder
```

| Parametro | Tipo                                   | Descrizione             |
| --------- | -------------------------------------- | ----------------------- |
| nome      | string                                 | No Description Provided |
| range     | [IntRange](/vanilla/api/loot/IntRange) | No Description Provided |


:::


