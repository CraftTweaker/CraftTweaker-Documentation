# IBlockDropHandler

Функция IBlockDropHandler используется для расширенной обработки блоков с [Блоками](/Mods/ContentTweaker/Vanilla/Creatable_Content/Block/) , созданной с [Заводским Заводом](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/).

## Импорт класса

Вы хотите импортировать класс? Вот:

```zenscript
import mods.contenttweaker.DropHandler;
```

## Структура функции

Функция является недействительной функцией, которая принимает следующие параметры:

- [ICTItemList](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/) выпадает.
- [IBlockAccess](/Vanilla/World/IBlockAccess/) мир -> мир, в котором мы находимся, возможно, [IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/), вы можете захотеть установить и спасти
- [IBlockPos](/Vanilla/World/IBlockPos/) позиция -> позиция блока
- [состояние ICTBlockState](/Mods/ContentTweaker/Vanilla/Types/Block/ICTBlockState/) -> blockstate блока
- int fortune -> уровень счастья используемого инструмента

Поскольку этот метод не возвращает ничего, все капли нужно добавить в список `сбросов` с использованием экспонированных методов.  
О них [читайте здесь](/Mods/ContentTweaker/Vanilla/Types/Drops/ICTItemList/).

## Пример

```zenscript
block.setDropHandler(function(drops, world, position, state, fortune) {

    drops.add(<item:minecraft:bedrock>);
    drops.add(<item:minecraft:carrot> % 50);

    return;
});
```