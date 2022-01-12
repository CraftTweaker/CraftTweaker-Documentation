# LightPredicateBuilder

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.predicate.builder.LightPredicateBuilder;
```


## 使用方式

:::group{name=build}

Return Type: [LightPredicate](/vanilla/api/predicate/LightPredicate)

```zenscript
// LightPredicateBuilder.build() as LightPredicate

myLightPredicateBuilder.build();
```

:::

:::group{name=composite}

Return Type: [LightPredicateBuilder](/vanilla/api/predicate/builder/LightPredicateBuilder)

```zenscript
LightPredicateBuilder.composite(composite as IntMinMaxBoundsPredicate) as LightPredicateBuilder
```

| 参数        | 类型                                                                          | 描述                      |
| --------- | --------------------------------------------------------------------------- | ----------------------- |
| composite | [IntMinMaxBoundsPredicate](/vanilla/api/predicate/IntMinMaxBoundsPredicate) | No Description Provided |


:::


