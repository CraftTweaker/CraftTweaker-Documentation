# MobEffectCategory

## Importing the class

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.effect.MobEffectCategory;
```


## Enum Constants

MobEffectCategory is an enum. It has 3 enum constants. They are accessible using the code below.

```zenscript
MobEffectCategory.BENEFICIAL
MobEffectCategory.HARMFUL
MobEffectCategory.NEUTRAL
```
## Methods

:::group{name=getTooltipFormatting}

Return Type: [ChatFormatting](/vanilla/api/text/ChatFormatting)

```zenscript
// MobEffectCategory.getTooltipFormatting() as ChatFormatting

myMobEffectCategory.getTooltipFormatting();
```

:::


## Properties

| 이름                | Type                                               | Has Getter | Has Setter | Description             |
| ----------------- | -------------------------------------------------- | ---------- | ---------- | ----------------------- |
| tooltipFormatting | [ChatFormatting](/vanilla/api/text/ChatFormatting) | true       | false      | No Description Provided |

