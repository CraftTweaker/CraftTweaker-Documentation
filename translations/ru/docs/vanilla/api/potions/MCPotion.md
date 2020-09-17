# MCЗелье

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.potion.MCPotion
```

## Реализованные интерфейсы
MCPotion реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Методы
### getNamePrefixed

Возвращает строку

```zenscript
myMCPotion.getNamePrefixed(name as String);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| имя      | String | Описание отсутствует |



## Свойства

| Название         | Тип                                                                                                    | Имеет Getter | Имеет Setter |
| ---------------- | ------------------------------------------------------------------------------------------------------ | ------------ | ------------ |
| командная строка | String                                                                                                 | true         | false        |
| эффекты          | Список <[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)> | true         | false        |
| hasInstantEffect | boolean                                                                                                | true         | false        |

