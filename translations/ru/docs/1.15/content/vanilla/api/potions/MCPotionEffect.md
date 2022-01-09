# MCPotionEffect

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## Implemented Interfaces
MCPotionEffect implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Методы
### isReady

Возвращает boolean

```zenscript
myMCPotionEffect.isReady(duration as int, amplifier as int);
```

| Параметр  | Тип | Описание             |
| --------- | --- | -------------------- |
| duration  | int | Описание отсутствует |
| amplifier | int | Описание отсутствует |


### newInstance

Returns [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(duration as int, amplifier as int);
```

| Параметр  | Тип | Описание             | IsOptional | Default Value |
| --------- | --- | -------------------- | ---------- | ------------- |
| duration  | int | Описание отсутствует | false      | null          |
| amplifier | int | Описание отсутствует | true       | 0             |



## Свойства

| Название      | Тип                                                                     | Имеет Getter | Имеет Setter |
| ------------- | ----------------------------------------------------------------------- | ------------ | ------------ |
| commandString | String                                                                  | true         | false        |
| curativeItems | List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)> | true         | false        |
| displayName   | String                                                                  | true         | false        |
| isBeneficial  | boolean                                                                 | true         | false        |
| isInstant     | boolean                                                                 | true         | false        |
| liquidColor   | int                                                                     | true         | false        |
| name          | String                                                                  | true         | false        |

