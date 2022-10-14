# MobEffectCategory

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.effect.MobEffectCategory;
```


## Enum Constants

MobEffectCategory is an enum. It has 3 enum constants. They are accessible using the code below.

```zenscript
<constant:minecraft:mobeffect/category:beneficial>
<constant:minecraft:mobeffect/category:harmful>
<constant:minecraft:mobeffect/category:neutral>
```
## 使用方式

:::group{name=getTooltipFormatting}

Return Type: [ChatFormatting](/vanilla/api/text/ChatFormatting)

```zenscript
// MobEffectCategory.getTooltipFormatting() as ChatFormatting

myMobEffectCategory.getTooltipFormatting();
```

:::


## 参数

| 名称                | 类型                                                 | 可获得  | 可设置   |
| ----------------- | -------------------------------------------------- | ---- | ----- |
| tooltipFormatting | [ChatFormatting](/vanilla/api/text/ChatFormatting) | true | false |

