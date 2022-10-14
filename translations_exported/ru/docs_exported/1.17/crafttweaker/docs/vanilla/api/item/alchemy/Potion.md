# Potion

## Импорт класса

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.item.alchemy.Potion;
```


## Методы

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

| Параметр | Тип    | Описание                |
| -------- | ------ | ----------------------- |
| prefix   | string | No Description Provided |


:::

:::group{name=hasInstantEffects}

Return Type: boolean

```zenscript
// Potion.hasInstantEffects() as boolean

myPotion.hasInstantEffects();
```

:::


## Свойства

| Название          | Тип                                                                                              | Имеет Getter | Имеет Setter | Описание                |
| ----------------- | ------------------------------------------------------------------------------------------------ | ------------ | ------------ | ----------------------- |
| commandString     | string                                                                                           | true         | false        | No Description Provided |
| effects           | stdlib.List&lt;[MobEffectInstance](/vanilla/api/entity/effect/MobEffectInstance)&gt; | true         | false        | No Description Provided |
| hasInstantEffects | boolean                                                                                          | true         | false        | No Description Provided |

