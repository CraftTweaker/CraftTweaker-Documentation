# Tier

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.type.tiered.Tier;
```


## 使用方式

:::group{name=getAttackDamageBonus}

Return Type: float

```zenscript
// Tier.getAttackDamageBonus() as float

myTier.getAttackDamageBonus();
```

:::

:::group{name=getEnchantmentValue}

Return Type: int

```zenscript
// Tier.getEnchantmentValue() as int

myTier.getEnchantmentValue();
```

:::

:::group{name=getLevel}

Return Type: int

```zenscript
// Tier.getLevel() as int

myTier.getLevel();
```

:::

:::group{name=getRepairIngredient}

Return Type: [IIngredient](/vanilla/api/ingredient/IIngredient)

```zenscript
// Tier.getRepairIngredient() as IIngredient

myTier.getRepairIngredient();
```

:::

:::group{name=getSpeed}

Return Type: float

```zenscript
// Tier.getSpeed() as float

myTier.getSpeed();
```

:::

:::group{name=getUses}

Return Type: int

```zenscript
// Tier.getUses() as int

myTier.getUses();
```

:::


## 参数

| 名称                | 类型                                                     | 可获得  | 可设置   | 描述                      |
| ----------------- | ------------------------------------------------------ | ---- | ----- | ----------------------- |
| attackDamageBonus | 浮点数                                                    | true | false | No Description Provided |
| enchantmentValue  | int                                                    | true | false | No Description Provided |
| level             | int                                                    | true | false | No Description Provided |
| repairIngredient  | [材料（IIngredient）](/vanilla/api/ingredient/IIngredient) | true | false | No Description Provided |
| speec             | 浮点数                                                    | true | false | No Description Provided |
| uses              | int                                                    | true | false | No Description Provided |

