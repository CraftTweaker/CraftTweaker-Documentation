# MCPotion

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.potion.MCPotion;
```


## 方法

### getNamePrefixed

Return Type: string

```zenscript
MCPotion.getNamePrefixed(name as string) as string
```
| 参数   | 类型     | 描述                      |
| ---- | ------ | ----------------------- |
| name | string | No Description Provided |


## 参数

| 名称               | 类型                                                                                                   | 可获得  | 可设置   |
| ---------------- | ---------------------------------------------------------------------------------------------------- | ---- | ----- |
| commandString    | string                                                                                               | true | false |
| effects          | stdlib.List&lt;[MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)&gt; | true | false |
| hasInstantEffect | boolean                                                                                              | true | false |

