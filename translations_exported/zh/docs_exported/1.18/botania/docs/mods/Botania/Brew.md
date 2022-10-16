# Brew

## 导入类

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import mods.botania.Brew;
```


## 使用方式

:::group{name=canInfuseBloodPendant}

Checks whether this brew can be infused with a Blood Pendant.

Returns: True if it can be infused, false otherwise.  
Return Type: boolean

```zenscript
// Brew.canInfuseBloodPendant() as boolean

myBrew.canInfuseBloodPendant();
```

:::

:::group{name=canInfuseIncense}

Checks whether this brew can be infused with incense.

Returns: True if it can be infused, false otherwise.  
Return Type: boolean

```zenscript
// Brew.canInfuseIncense() as boolean

myBrew.canInfuseIncense();
```

:::

:::group{name=getColor}

Gets the color of the brew for the ItemStack passed in.

Returns: The color of the brew for the given stack.  
Return Type: int

```zenscript
// Brew.getColor(stack as ItemStack) as int

myBrew.getColor(<item:minecraft:dirt>);
```

| 参数 | 类型                                  | 描述                             |
| -- | ----------------------------------- | ------------------------------ |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) | The stack to get the color of. |


:::

:::group{name=getCommandString}

Gets the command string of this brew.

Returns: The command string of this brew.  
Return Type: string

```zenscript
// Brew.getCommandString() as string

myBrew.getCommandString();
```

:::

:::group{name=getManaCost}

Gets the mana cost of the brew.

Returns: The mana cost of the brew.  
Return Type: int

```zenscript
// Brew.getManaCost() as int

myBrew.getManaCost();
```

:::

:::group{name=getManaCost}

Gets the mana cost of the brew for the ItemStack passed in.

Returns: The mana cost of the brew.  
Return Type: int

```zenscript
// Brew.getManaCost(stack as ItemStack) as int

myBrew.getManaCost(<item:minecraft:dirt>);
```

| 参数 | 类型                                  | 描述                                 |
| -- | ----------------------------------- | ---------------------------------- |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) | The stack to get the mana cost of. |


:::

:::group{name=getPotionEffects}

Gets the [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)s that this brew applies when consumed.

Returns: The [MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)s that this brew applies when consumed.  
Return Type: stdlib.List&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt;

```zenscript
// Brew.getPotionEffects(stack as ItemStack) as stdlib.List<MobEffectInstance>

myBrew.getPotionEffects(<item:minecraft:dirt>);
```

| 参数 | 类型                                  | 描述                                     |
| -- | ----------------------------------- | -------------------------------------- |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) | An ItemStack to provide extra context. |


:::

:::group{name=getTranslationKey}

Gets the translation key of the brew.

Returns: The translation key of the brew.  
Return Type: string

```zenscript
// Brew.getTranslationKey() as string

myBrew.getTranslationKey();
```

:::

:::group{name=getTranslationKey}

Gets the translation key of the brew with extra context provided by the stack.

Returns: The translation key of the brew.  
Return Type: string

```zenscript
// Brew.getTranslationKey(stack as ItemStack) as string

myBrew.getTranslationKey(<item:minecraft:dirt>);
```

| 参数 | 类型                                  | 描述                                       |
| -- | ----------------------------------- | ---------------------------------------- |
| 堆叠 | [物品应用](/vanilla/api/item/ItemStack) | The stack to provide extra context with. |


:::


## 参数

| 名称                    | 类型     | 可获得  | 可设置   | 描述                                                            |
| --------------------- | ------ | ---- | ----- | ------------------------------------------------------------- |
| canInfuseBloodPendant | 布尔值    | true | false | Checks whether this brew can be infused with a Blood Pendant. |
| canInfuseIncense      | 布尔值    | true | false | Checks whether this brew can be infused with incense.         |
| manaCost              | int    | true | false | Gets the mana cost of the brew.                               |
| translationKey        | string | true | false | Gets the translation key of the brew.                         |

