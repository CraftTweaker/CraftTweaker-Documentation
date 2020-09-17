# IItemUpdate

Функция обновления IItemUpdateFunction может быть добавлена к элементу [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) , чтобы позволить выполнять код при обновлении элемента.

## Импорт пакета

Если вы чувствуете необходимость импорта класса этой функции, вам следует:

```zenscript
import mods.contenttweaker.IItemUpdate;
```

## Синтаксис

У нас недействительная функция, которая принимает следующие параметры (в порядке)

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) , представляющий сам стек предметов.
- [IWorld объект](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) , представляющий мир, в котором происходит действие.
- Объект [IEntity](/Vanilla/Entities/IEntity/) падает, насколько это возможно, так что вы можете установить экземпляр до [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/).
- Подсказка, представляющая ячейку в данный момент
- Логическое сообщение о том, выбран ли элемент или нет.

```zenscript
item.onItemUpdate = function(itemStack, world, owner, slot, isSelected) {
    //CODE GOES HERE!!
    вернуться;
}
```