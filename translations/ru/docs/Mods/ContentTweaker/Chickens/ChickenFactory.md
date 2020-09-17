# ChickenFactory

Куриная фабрика позволяет создать [Курин](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) в игре.  
Заметьте, что этот модуль является дополнением к [моду цыплят по setycz](https://minecraft.curseforge.com/projects/chickens), так что этот модуль доступен только в том случае, если этот мод загружен.

## Импорт пакета

```zenscript
import mods.contenttweaker.ChickenFactory;
```

## Создание цыплят

Прежде всего, вам нужно будет создать [представление курицы](/Mods/ContentTweaker/Chickens/ChickenRepresentation/).  
Это по сути пустой шаблон того, что будет Вашей курицей.  
Этот метод возвращает объект [Представление Курицы](/Mods/ContentTweaker/Chickens/ChickenRepresentation/) , взяв следующие параметры:

- Строковое название: название сущности курицы, используемое для моделей и реестра сущностей.
- [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/) цвет: Цвет, курица будет иметься.
- [IItemStack](/Vanilla/Items/IItemStack/) layedItem: предмет для курицы будет лежать позже.

```zenscript
ChickenFactory.createChicken(String название, CTColor цвет, IItemStack);
```

## Пример скрипта

```zenscript
#loader contenttweaker
#modloaded chickens

import mods.contenttweaker.ChickenFactory;
import mods.contenttweaker.Color;


val chickenRepresentation = ChickenFactory.createChicken("bedrocked_chicken", Color.fromInt(0xffffff), <item:minecraft:bedrock>);

chickenRepresentation.setForegroundColor(Color.fromInt(0xabcdef));

chickenRepresentation.register();
```