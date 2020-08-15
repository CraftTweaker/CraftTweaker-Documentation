# IItemUpdate

IItemUpdateFunction może być dodany do elementu [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) , aby umożliwić wykonywanie kodu za każdym razem, gdy aktualizacja elementu.

## Importowanie pakietu

Jeśli kiedykolwiek masz wrażenie, że musisz zaimportować klasę tej funkcji, przejdziesz:

```zenscript
import mods.contenttweaker.IItemUpdate;
```

## Składnia

Mamy funkcję unieważnioną, która przyjmuje następujące parametry (w kolejności)

- [IMutableItemStack](/Mods/ContentTweaker/Vanilla/Types/Item/IMutableItemStack/) reprezentujący sam stos przedmiotów.
- [Obiekt IWorld](/Mods/ContentTweaker/Vanilla/Types/World/IWorld/) reprezentujący świat, w którym ma miejsce działanie.
- [Obiekt IEntity](/Vanilla/Entities/IEntity/) w dół tak dalece, jak to możliwe, dzięki czemu możesz instanceOf do [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/).
- Inhalator reprezentujący miejsce, w którym znajduje się obecnie przedmiot
- Wartość logiczna wskazująca, czy dany element jest obecnie wybrany.

```zenscript
item.onItemUpdate = function(itemStack, world owner, slot, isSelected) {
    //CODE GOES HERE!!
    zwrot;
}
```