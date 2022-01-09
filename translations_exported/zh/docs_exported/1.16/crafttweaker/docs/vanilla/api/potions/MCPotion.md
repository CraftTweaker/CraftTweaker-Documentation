# MCPotion

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.potion.MCPotion;
```


## 使用方式

:::group{name=getNamePrefixed}

Return Type: string

```zenscript
MCPotion.getNamePrefixed(name as string) as string
```

| 参数       | 类型     | 描述                      |
| -------- | ------ | ----------------------- |
| name（名称） | string | No Description Provided |


:::


## 参数

| 名称                   | 类型                                                                                                   | 可获得  | 可设置   | 描述                      |
| -------------------- | ---------------------------------------------------------------------------------------------------- | ---- | ----- | ----------------------- |
| commandString #命令字符串 | string                                                                                               | true | false | No Description Provided |
| effects              | stdlib.List&lt;[MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)&gt; | true | false | No Description Provided |
| hasInstantEffect     | 布尔值                                                                                                  | true | false | No Description Provided |

