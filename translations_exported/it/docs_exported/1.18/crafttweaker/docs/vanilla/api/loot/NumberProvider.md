# NumberProvider

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.NumberProvider;
```


## Static Methods

:::group{name=between}

Return Type: [NumberProvider](/vanilla/api/loot/NumberProvider)

```zenscript
NumberProvider.between(min as float, max as float) as NumberProvider
```

| Parametro | Tipo  |
| --------- | ----- |
| min       | float |
| max       | float |


:::

:::group{name=binomial}

Return Type: [NumberProvider](/vanilla/api/loot/NumberProvider)

```zenscript
NumberProvider.binomial(n as int, p as int) as NumberProvider
```

| Parametro | Tipo |
| --------- | ---- |
| n         | int  |
| p         | int  |


:::

:::group{name=exactly}

Return Type: [NumberProvider](/vanilla/api/loot/NumberProvider)

```zenscript
NumberProvider.exactly(value as float) as NumberProvider
```

| Parametro | Tipo  |
| --------- | ----- |
| valore    | float |


:::

:::group{name=scoreboard}

Return Type: [NumberProvider](/vanilla/api/loot/NumberProvider)

```zenscript
NumberProvider.scoreboard(target as EntityTarget, score as string, scale as float) as NumberProvider
```

| Parametro | Tipo                                           | Optional | Default Value |
| --------- | ---------------------------------------------- | -------- | ------------- |
| target    | [EntityTarget](/vanilla/api/loot/EntityTarget) | no       |               |
| score     | string                                         | no       |               |
| scale     | float                                          | sì       | 1.0           |


:::

