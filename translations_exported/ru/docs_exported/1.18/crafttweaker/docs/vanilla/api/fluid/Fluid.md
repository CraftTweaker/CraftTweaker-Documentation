# Fluid

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.Fluid;
```


## Методы

:::group{name=getBucket}

Return Type: [ItemDefinition](/vanilla/api/item/ItemDefinition)

```zenscript
// Fluid.getBucket() as ItemDefinition

myFluid.getBucket();
```

:::

:::group{name=isIn}

Return Type: boolean

```zenscript
Fluid.isIn(tag as KnownTag<Fluid>) as boolean
```

| Параметр | Тип                                                                                             |
| -------- | ----------------------------------------------------------------------------------------------- |
| tag      | [KnownTag](/vanilla/api/tag/type/KnownTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt; |


:::

:::group{name=isSame}

Return Type: boolean

```zenscript
Fluid.isSame(other as Fluid) as boolean
```

| Параметр | Тип                               |
| -------- | --------------------------------- |
| other    | [Fluid](/vanilla/api/fluid/Fluid) |


:::


## Свойства

| Название      | Тип                                                | Имеет Getter | Имеет Setter |
| ------------- | -------------------------------------------------- | ------------ | ------------ |
| bucket        | [ItemDefinition](/vanilla/api/item/ItemDefinition) | true         | false        |
| commandString | string                                             | true         | false        |

