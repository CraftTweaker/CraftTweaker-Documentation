# MCPotion

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.potion.MCPotion
```

## Implemented Interfaces
MCPotion implements the following interfaces. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Методы
### getNamePrefixed

Returns String

```zenscript
myMCPotion.getNamePrefixed(name as String);
```

| Параметр | Тип    | Описание             |
| -------- | ------ | -------------------- |
| name     | String | Описание отсутствует |



## Свойства

| Название         | Тип                                                                                                 | Имеет Getter | Имеет Setter |
| ---------------- | --------------------------------------------------------------------------------------------------- | ------------ | ------------ |
| commandString    | String                                                                                              | true         | false        |
| effects          | List<[crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance)> | true         | false        |
| hasInstantEffect | boolean                                                                                             | true         | false        |

