# MCItemGroup

Группа предметов (a.k.a. Creative Tab) - это группировка элементов по категориям.

Этот класс был добавлен модом с мод-id `contenttweaker`. Так что если вы хотите использовать эту функцию, вам нужно установить этот мод.

## Импорт класса
Вам может потребоваться импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, с заливкой массива), так что лучше быть в безопасности, чем извиняться и добавлять импорт.
```zenscript
mods.contenttweaker.item.MCItemGroup
```

## Реализованные интерфейсы
MCItemGroup реализует следующие интерфейсы. Следовательно, методы из них доступны в этом классе.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Методы
### getPath

Получает путь к группе элементов. Путь — это то, что вы используете в выражении кронштейна после `<itemgroup:` part.

Тип возврата: строка

```zenscript
<itemgroup:misc>.getPath();
```

### setBackgroundImageName

Устанавливает имя изображения фона, используемого для этой вкладки в меню креативного меню Возвращает: `Этот объект для цепочки`

Тип возврата: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setBackgroundImageName(текстура как строка);
```

| Параметр | Тип    | Описание                   |
| -------- | ------ | -------------------------- |
| текстура | String | Текстура для использования |


### setNoScrollbar

Удаляет полосу прокрутки группы предметов в креативном инвентаре

 Возвращается: `Этот объект для цепочки`

Тип возврата: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoScrollbar();
```

### setNoTitle

Убирает название группы предметов в творческом инвентаре

 Возвращается: `Этот объект для цепочки`

Тип возврата: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>.setNoTitle();
```


## Свойства

| Название         | Тип    | Имеет Getter | Имеет Setter |
| ---------------- | ------ | ------------ | ------------ |
| командная строка | String | true         | false        |
| путь             | String | true         | false        |

