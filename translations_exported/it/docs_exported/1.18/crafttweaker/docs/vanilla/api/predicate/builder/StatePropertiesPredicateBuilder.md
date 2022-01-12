# StatePropertiesPredicateBuilder

## Importare la Classe

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.StatePropertiesPredicateBuilder;
```


## Metodi

:::group{name=build}

Return Type: [StatePropertiesPredicate](/vanilla/api/predicate/StatePropertiesPredicate)

```zenscript
// StatePropertiesPredicateBuilder.build() as StatePropertiesPredicate

myStatePropertiesPredicateBuilder.build();
```

:::

:::group{name=property}

Return Type: [StatePropertiesPredicateBuilder](/vanilla/api/predicate/builder/StatePropertiesPredicateBuilder)

```zenscript
StatePropertiesPredicateBuilder.property(name as string, value as boolean) as StatePropertiesPredicateBuilder
```

| Parametro | Tipo    | Descrizione             |
| --------- | ------- | ----------------------- |
| nome      | string  | No Description Provided |
| valore    | boolean | No Description Provided |


:::

:::group{name=property}

Return Type: [StatePropertiesPredicateBuilder](/vanilla/api/predicate/builder/StatePropertiesPredicateBuilder)

```zenscript
StatePropertiesPredicateBuilder.property(name as string, value as int) as StatePropertiesPredicateBuilder
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |
| valore    | int    | No Description Provided |


:::

:::group{name=property}

Return Type: [StatePropertiesPredicateBuilder](/vanilla/api/predicate/builder/StatePropertiesPredicateBuilder)

```zenscript
StatePropertiesPredicateBuilder.property(name as string, value as IntMinMaxBoundsPredicate) as StatePropertiesPredicateBuilder
```

| Parametro | Tipo                                                                        | Descrizione             |
| --------- | --------------------------------------------------------------------------- | ----------------------- |
| nome      | string                                                                      | No Description Provided |
| valore    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=property}

Return Type: [StatePropertiesPredicateBuilder](/vanilla/api/predicate/builder/StatePropertiesPredicateBuilder)

```zenscript
StatePropertiesPredicateBuilder.property(name as string, value as string) as StatePropertiesPredicateBuilder
```

| Parametro | Tipo   | Descrizione             |
| --------- | ------ | ----------------------- |
| nome      | string | No Description Provided |
| valore    | string | No Description Provided |


:::


