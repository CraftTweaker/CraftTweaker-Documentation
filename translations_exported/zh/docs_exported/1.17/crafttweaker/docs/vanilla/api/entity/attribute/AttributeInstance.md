# AttributeInstance

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.attribute.AttributeInstance;
```


## 使用方式

:::group{name=addPermanentModifier}

Return Type: void

```zenscript
AttributeInstance.addPermanentModifier(modifier as AttributeModifier) as void
```

| 参数       | 类型                                                                   | 描述                      |
| -------- | -------------------------------------------------------------------- | ----------------------- |
| modifier | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) | No Description Provided |


:::

:::group{name=addTransientModifier}

Return Type: void

```zenscript
AttributeInstance.addTransientModifier(modifier as AttributeModifier) as void
```

| 参数       | 类型                                                                   | 描述                      |
| -------- | -------------------------------------------------------------------- | ----------------------- |
| modifier | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) | No Description Provided |


:::

:::group{name=getModifier}

Return Type: [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)

```zenscript
AttributeInstance.getModifier(uuid as string) as AttributeModifier
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| uuid | string | No Description Provided |


:::

:::group{name=hasModifier}

Return Type: boolean

```zenscript
AttributeInstance.hasModifier(modifier as AttributeModifier) as boolean
```

| 参数       | 类型                                                                   | 描述                      |
| -------- | -------------------------------------------------------------------- | ----------------------- |
| modifier | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) | No Description Provided |


:::

:::group{name=removeModifier}

Return Type: void

```zenscript
AttributeInstance.removeModifier(modifier as AttributeModifier) as void
```

| 参数       | 类型                                                                   | 描述                      |
| -------- | -------------------------------------------------------------------- | ----------------------- |
| modifier | [AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier) | No Description Provided |


:::

:::group{name=removeModifier}

Return Type: void

```zenscript
AttributeInstance.removeModifier(uuid as string) as void
```

| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| uuid | string | No Description Provided |


:::


## 参数

| 名称        | 类型                                                                                                  | 可获得  | 可设置   | 描述                      |
| --------- | --------------------------------------------------------------------------------------------------- | ---- | ----- | ----------------------- |
| baseValue | double                                                                                              | true | true  | No Description Provided |
| modifiers | stdlib.List&lt;[AttributeModifier](/vanilla/api/entity/attribute/AttributeModifier)&gt; | true | false | No Description Provided |
| value     | double                                                                                              | true | false | No Description Provided |

