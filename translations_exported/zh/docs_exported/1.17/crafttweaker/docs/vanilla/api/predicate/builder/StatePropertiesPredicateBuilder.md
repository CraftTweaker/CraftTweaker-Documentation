# StatePropertiesPredicateBuilder

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.StatePropertiesPredicateBuilder;
```


## 使用方式

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

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |
| value    | 布尔值    | No Description Provided |


:::

:::group{name=property}

Return Type: [StatePropertiesPredicateBuilder](/vanilla/api/predicate/builder/StatePropertiesPredicateBuilder)

```zenscript
StatePropertiesPredicateBuilder.property(name as string, value as int) as StatePropertiesPredicateBuilder
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |
| value    | int    | No Description Provided |


:::

:::group{name=property}

Return Type: [StatePropertiesPredicateBuilder](/vanilla/api/predicate/builder/StatePropertiesPredicateBuilder)

```zenscript
StatePropertiesPredicateBuilder.property(name as string, value as IntMinMaxBoundsPredicate) as StatePropertiesPredicateBuilder
```

| 参数       | 类型                                                                          | 描述                      |
| -------- | --------------------------------------------------------------------------- | ----------------------- |
| name（名称） | string                                                                      | No Description Provided |
| value    | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::

:::group{name=property}

Return Type: [StatePropertiesPredicateBuilder](/vanilla/api/predicate/builder/StatePropertiesPredicateBuilder)

```zenscript
StatePropertiesPredicateBuilder.property(name as string, value as string) as StatePropertiesPredicateBuilder
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |
| value    | string | No Description Provided |


:::


