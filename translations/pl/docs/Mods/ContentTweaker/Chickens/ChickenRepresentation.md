# Reprezentacja kurczaka

Przedstawicielstwo Kurczaka jest szablonem tego, co będzie robił Twój kurczak.  
Domyślnie będzie istniało tylko jajko, które podałeś jako parametr początkowy.  
Możesz zmienić to zachowanie, aby umożliwić lepsze kurczaki, zmieniając dane właściwości.

## Importowanie klasy

Chcesz zaimportować klasę? Tutaj idziesz:

```zenscript
importuj mods.contenttweaker.Chicken;
```

## Rejestracja kurczaka

Po ustawieniu swojego przedstawicielstwa kurczaka jako tego co chcesz, najważniejszą częścią jest zarejestrowanie jej.  
Zachowaj ostrożność, ponieważ wszelkie zmiany dokonane w tym szablonie po rejestracji będą nadal skuteczne, więc powinieneś utworzyć nowe Przedstawicielstwo Kurczaków dla każdego kurczaka, który chcesz mieć.

## Właściwości ZenWłaściwości

Możesz zmienić lub pobrać bieżącą wartość właściwości przez obiekt `. nazwa = nowa wartość` lub metody `object.setName(newValue);`

Przykład:

```zenscript
chickenRep.layItem = <minecraft:iron_ingot>;
print(chickenRep.layItem.displayName);
chickenRep.setLayItem(<minecraft:gold_ingot>);
print(chickenRep.getLayItem().displayName);
```

| Nazwa                   | typ                                                                                                |
| ----------------------- | -------------------------------------------------------------------------------------------------- |
| Nazwa                   | ciąg znaków                                                                                        |
| layItem                 | [IItemStack](/Vanilla/Items/IItemStack/)                                                           |
| dropItem                | [IItemStack](/Vanilla/Items/IItemStack/)                                                           |
| Kolor tła               | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                                         |
| foregroundColor         | [CTColor](/Mods/ContentTweaker/Vanilla/Types/Color/Color/)                                         |
| Lokalizacja teksturycji | [Lokalizacja CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| spawnType               | ciąg znaków                                                                                        |
| współczynnik warstwy    | zmiennoprzecinkowe                                                                                 |
| rodzic                  | [Lokalizacja CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |
| parentTwo               | [Lokalizacja CTResourceLocation](/Mods/ContentTweaker/Vanilla/Types/Resources/CTResourceLocation/) |