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
Fluid.isIn(tag as MCTag<Fluid>) as boolean
```

| Параметр | Тип                                                                                  | Описание                |
| -------- | ------------------------------------------------------------------------------------ | ----------------------- |
| tag      | [MCTag](/vanilla/api/tag/MCTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt; | No Description Provided |


:::

:::group{name=isSame}

Return Type: boolean

```zenscript
Fluid.isSame(other as Fluid) as boolean
```

| Параметр | Тип                               | Описание                |
| -------- | --------------------------------- | ----------------------- |
| other    | [Fluid](/vanilla/api/fluid/Fluid) | No Description Provided |


:::


## Свойства

| Название      | Тип                                                | Имеет Getter | Имеет Setter | Описание                |
| ------------- | -------------------------------------------------- | ------------ | ------------ | ----------------------- |
| bucket        | [ItemDefinition](/vanilla/api/item/ItemDefinition) | true         | false        | No Description Provided |
| commandString | string                                             | true         | false        | No Description Provided |

