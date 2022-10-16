# LootContextParam

A loot context param is provided to a [LootContext](/vanilla/api/loot/LootContext) allowing it to supply information to functions.

 See [LootContextParams](/vanilla/api/loot/param/LootContextParams) for a list of built-in params.

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.loot.param.LootContextParam;
```


## 使用方式

:::group{name=getName}

Gets the name of this parameter.

Returns: The name of this parameter  
Return Type: [ResourceLocation](/vanilla/api/resource/ResourceLocation)

```zenscript
// LootContextParam.getName() as ResourceLocation

LootContextParams.thisEntity().getName();
```

:::


## 参数

| 名称       | 类型                                             | 可获得  | 可设置   | 描述                               |
| -------- | ---------------------------------------------- | ---- | ----- | -------------------------------- |
| name（名称） | [资源位置](/vanilla/api/resource/ResourceLocation) | true | false | Gets the name of this parameter. |

