# Mods

Зацепка информации обо всех зарегистрированных модах. Можно получить доступ с помощью `загруженных модов` глобального ключевого слова

Этот класс был добавлен модом с mod-id `crafttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
crafttweaker.api.mods.Mods
```

## Methods
### getMod

Получает определенный мод

 Возвращается: `специфический MCModInfo`

Возврат типа: [crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)

```zenscript
loadedMods.getMod(modid as String);
loadedMods.getMod("minecraft");
```

| Параметр | Тип    | Description          |
| -------- | ------ | -------------------- |
| modid    | String | Описание отсутствует |


### isModLoaded

Проверяет, запущен ли мод

 Возвращается: `истина, если мод загружен`

Return type: boolean

```zenscript
loadedMods.isModaded(modid as String);
loadedMods.isModLoaded("minecraft");
```

| Параметр | Тип    | Description      |
| -------- | ------ | ---------------- |
| modid    | String | мод для проверки |



## Свойства

| Название | Тип                                                                                  | Имеет Getter | Имеет Setter |
| -------- | ------------------------------------------------------------------------------------ | ------------ | ------------ |
| моды     | Список&lt;[crafttweaker.api.mods.ModInfo](/vanilla/api/mods/ModInfo)&gt; | true         | false        |
| size     | int                                                                                  | true         | false        |

