# LootConditionBuilder

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.builder.LootConditionBuilder;
```


## Caster

| Result Type                                                | Implicito |
| ---------------------------------------------------------- | --------- |
| [LootCondition](/vanilla/api/loot/condition/LootCondition) | sì        |

## Metodi

:::group{name=build}

Return Type: [LootCondition](/vanilla/api/loot/condition/LootCondition)

```zenscript
// LootConditionBuilder.build() as LootCondition

myLootConditionBuilder.build();
```

:::

:::group{name=invert}

Return Type: [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

```zenscript
// LootConditionBuilder.invert() as LootConditionBuilder

myLootConditionBuilder.invert();
```

:::

:::group{name=or}

Return Type: [AlternativeLootConditionBuilder](/vanilla/api/loot/condition/builder/AlternativeLootConditionBuilder)

```zenscript
LootConditionBuilder.or(other as LootConditionBuilder) as AlternativeLootConditionBuilder
```

| Parametro | Tipo                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| other     | [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder) |


:::


