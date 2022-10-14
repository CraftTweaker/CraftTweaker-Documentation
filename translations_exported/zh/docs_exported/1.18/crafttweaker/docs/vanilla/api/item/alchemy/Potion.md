# Potion

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.alchemy.Potion;
```


## 使用方式

:::group{name=getEffects}

Return Type: stdlib.List&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt;

```zenscript
// Potion.getEffects() as stdlib.List<MobEffectInstance>

myPotion.getEffects();
```

:::

:::group{name=getName}

Return Type: string

```zenscript
Potion.getName(prefix as string) as string
```

| 参数     | 类型     |
| ------ | ------ |
| prefix | string |


:::

:::group{name=hasInstantEffects}

Return Type: boolean

```zenscript
// Potion.hasInstantEffects() as boolean

myPotion.hasInstantEffects();
```

:::


## 参数

| 名称                   | 类型                                                                                               | 可获得  | 可设置   |
| -------------------- | ------------------------------------------------------------------------------------------------ | ---- | ----- |
| commandString #命令字符串 | string                                                                                           | true | false |
| effects              | stdlib.List&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt; | true | false |
| hasInstantEffects    | 布尔值                                                                                              | true | false |

