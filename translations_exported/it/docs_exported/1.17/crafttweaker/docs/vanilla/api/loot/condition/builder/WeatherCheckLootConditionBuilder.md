# WeatherCheckLootConditionBuilder

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.condition.builder.WeatherCheckLootConditionBuilder;
```


## Interfacce Implementate
WeatherCheckLootConditionBuilder implements the following interfaces. That means all methods defined in these interfaces are also available in WeatherCheckLootConditionBuilder

- [LootConditionBuilder](/vanilla/api/loot/condition/builder/LootConditionBuilder)

## Caster

| Tipo Risultato                                             | Implicito |
| ---------------------------------------------------------- | --------- |
| [LootCondition](/vanilla/api/loot/condition/LootCondition) | sì        |

## Metodi

:::group{name=raining}

Return Type: [WeatherCheckLootConditionBuilder](/vanilla/api/loot/condition/builder/WeatherCheckLootConditionBuilder)

```zenscript
WeatherCheckLootConditionBuilder.raining(raining as bool?) as WeatherCheckLootConditionBuilder
```

| Parametro | Tipo  | Descrizione             | Optional | DefaultValue |
| --------- | ----- | ----------------------- | -------- | ------------ |
| raining   | bool? | No Description Provided | sì       | sì           |


:::

:::group{name=thundering}

Return Type: [WeatherCheckLootConditionBuilder](/vanilla/api/loot/condition/builder/WeatherCheckLootConditionBuilder)

```zenscript
WeatherCheckLootConditionBuilder.thundering(thundering as bool?) as WeatherCheckLootConditionBuilder
```

| Parametro  | Tipo  | Descrizione             | Optional | DefaultValue |
| ---------- | ----- | ----------------------- | -------- | ------------ |
| thundering | bool? | No Description Provided | sì       | sì           |


:::


