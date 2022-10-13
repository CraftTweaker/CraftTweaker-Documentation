# MCPotionEffect

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.potion.MCPotionEffect;
```
## Obtention

You can get an Object of this type using the `<potion:` bracket expression parser. It is available through the dump commands.

## 使用方式

:::group{name=isReady}

Return Type: boolean

```zenscript
MCPotionEffect.isReady(duration as int, amplifier as int) as boolean
```

| 参数        | 类型  | 描述                      |
| --------- | --- | ----------------------- |
| duration  | int | No Description Provided |
| amplifier | int | No Description Provided |


:::

:::group{name=newInstance}

Return Type: [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
MCPotionEffect.newInstance(duration as int, amplifier as int) as MCPotionEffectInstance
```

| 参数        | 类型  | 描述                      | 可选    | DefaultValue |
| --------- | --- | ----------------------- | ----- | ------------ |
| duration  | int | No Description Provided | false |              |
| amplifier | int | No Description Provided | true  | 0            |


:::


## 参数

| 名称                   | 类型                                                                         | 可获得  | 可设置   | 描述                      |
| -------------------- | -------------------------------------------------------------------------- | ---- | ----- | ----------------------- |
| commandString #命令字符串 | string                                                                     | true | false | No Description Provided |
| curativeItems        | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | true | false | No Description Provided |
| displayName          | string                                                                     | true | false | No Description Provided |
| isBeneficial         | 布尔值                                                                        | true | false | No Description Provided |
| isInstant            | 布尔值                                                                        | true | false | No Description Provided |
| liquidColor          | int                                                                        | true | false | No Description Provided |
| name（名称）             | string                                                                     | true | false | No Description Provided |

