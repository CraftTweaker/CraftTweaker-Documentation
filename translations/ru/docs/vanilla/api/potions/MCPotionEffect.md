# MCPotionEffect

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.potion.MCPotionEffect
```

## Реализованные интерфейсы
MCPotionEffect implements the following interfaces. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Методы
### isReady

Возвращает boolean

```zenscript
myMCPotionEffect.isReady(duration as int, amplifier as int);
```

| Параметр     | Тип | Описание             |
| ------------ | --- | -------------------- |
| длительность | int | Описание отсутствует |
| усилитель    | int | Описание отсутствует |


### newInstance

Returns [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)

```zenscript
myMCPotionEffect.newInstance(duration as int, amplifier as int);
```

| Параметр     | Тип | Описание             | IsOptional | Значение по умолчанию |
| ------------ | --- | -------------------- | ---------- | --------------------- |
| длительность | int | Описание отсутствует | false      | null                  |
| усилитель    | int | Описание отсутствует | true       | 0                     |



## Свойства

| Название             | Тип                                                                     | Имеет Getter | Имеет Setter |
| -------------------- | ----------------------------------------------------------------------- | ------------ | ------------ |
| командная строка     | String                                                                  | true         | false        |
| целительные элементы | List<[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)> | true         | false        |
| displayName          | String                                                                  | true         | false        |
| Бенефициар           | boolean                                                                 | true         | false        |
| Мгновенный           | boolean                                                                 | true         | false        |
| ликвидационный цвет  | int                                                                     | true         | false        |
| имя                  | String                                                                  | true         | false        |

