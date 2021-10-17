# AttributeInstance

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.AttributeInstance;
```


## Методы

:::group{name=applyNonPersistentModifier}

Return Type: void

```zenscript
AttributeInstance.applyNonPersistentModifier(modifier as AttributeModifier) as void
```

| Параметр | Тип                                                        | Описание                |
| -------- | ---------------------------------------------------------- | ----------------------- |
| modifier | [AttributeModifier](/vanilla/api/entity/AttributeModifier) | No Description Provided |


:::

:::group{name=applyPersistentModifier}

Return Type: void

```zenscript
AttributeInstance.applyPersistentModifier(modifier as AttributeModifier) as void
```

| Параметр | Тип                                                        | Описание                |
| -------- | ---------------------------------------------------------- | ----------------------- |
| modifier | [AttributeModifier](/vanilla/api/entity/AttributeModifier) | No Description Provided |


:::

:::group{name=getModifier}

Return Type: [AttributeModifier](/vanilla/api/entity/AttributeModifier)?

```zenscript
AttributeInstance.getModifier(uuid as string) as AttributeModifier?
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| uuid     | string | No Description Provided |


:::

:::group{name=hasModifier}

Return Type: boolean

```zenscript
AttributeInstance.hasModifier(modifier as AttributeModifier) as boolean
```

| Параметр | Тип                                                        | Описание                |
| -------- | ---------------------------------------------------------- | ----------------------- |
| modifier | [AttributeModifier](/vanilla/api/entity/AttributeModifier) | No Description Provided |


:::

:::group{name=removeModifier}

Return Type: void

```zenscript
AttributeInstance.removeModifier(modifier as AttributeModifier) as void
```

| Параметр | Тип                                                        | Описание                |
| -------- | ---------------------------------------------------------- | ----------------------- |
| modifier | [AttributeModifier](/vanilla/api/entity/AttributeModifier) | No Description Provided |


:::

:::group{name=removeModifier}

Return Type: void

```zenscript
AttributeInstance.removeModifier(uuid as string) as void
```

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| uuid     | string | No Description Provided |


:::


## Свойства

| Название  | Тип                                                                                       | Имеет Getter | Имеет Setter | Описание                |
| --------- | ----------------------------------------------------------------------------------------- | ------------ | ------------ | ----------------------- |
| baseValue | double                                                                                    | true         | true         | No Description Provided |
| modifiers | stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/AttributeModifier)&gt; | true         | false        | No Description Provided |
| value     | double                                                                                    | true         | false        | No Description Provided |

