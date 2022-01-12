# Fluid

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.fluid.Fluid;
```


## 使用方式

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

| 参数      | 类型                                                                                   | 描述                      |
| ------- | ------------------------------------------------------------------------------------ | ----------------------- |
| tag #标签 | [MCTag](/vanilla/api/tag/MCTag)&lt;[Fluid](/vanilla/api/fluid/Fluid)&gt; | No Description Provided |


:::

:::group{name=isSame}

Return Type: boolean

```zenscript
Fluid.isSame(other as Fluid) as boolean
```

| 参数    | 类型                                | 描述                      |
| ----- | --------------------------------- | ----------------------- |
| other | [Fluid](/vanilla/api/fluid/Fluid) | No Description Provided |


:::


## 参数

| 名称                   | 类型                                                 | 可获得  | 可设置   | 描述                      |
| -------------------- | -------------------------------------------------- | ---- | ----- | ----------------------- |
| bucket               | [ItemDefinition](/vanilla/api/item/ItemDefinition) | true | false | No Description Provided |
| commandString #命令字符串 | string                                             | true | false | No Description Provided |

