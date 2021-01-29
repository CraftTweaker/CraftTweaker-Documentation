# MCPotionEffect

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.potion.MCPotionEffect;
```


## 方法

### isReady

Return Type: boolean

```zenscript
MCPotionEffect.isReady(duration as int, amplifier as int) as boolean
```
| 参数        | 类型  | 描述                      |
| --------- | --- | ----------------------- |
| duration  | int | No Description Provided |
| amplifier | int | No Description Provided |

### newInstance

Return Type: [MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
MCPotionEffect.newInstance(duration as int, amplifier as int) as MCPotionEffectInstance
```
| 参数        | 类型  | 描述                      | 可选    | DefaultValue |
| --------- | --- | ----------------------- | ----- | ------------ |
| duration  | int | No Description Provided | false |              |
| amplifier | int | No Description Provided | true  | 0            |

## 参数

| 名称            | 类型                                                                         | 可获得  | 可设置   |
| ------------- | -------------------------------------------------------------------------- | ---- | ----- |
| commandString | string                                                                     | true | false |
| curativeItems | stdlib.List&lt;[IItemStack](/vanilla/api/items/IItemStack)&gt; | true | false |
| displayName   | string                                                                     | true | false |
| isBeneficial  | boolean                                                                    | true | false |
| isInstant     | boolean                                                                    | true | false |
| liquidColor   | int                                                                        | true | false |
| name          | string                                                                     | true | false |

