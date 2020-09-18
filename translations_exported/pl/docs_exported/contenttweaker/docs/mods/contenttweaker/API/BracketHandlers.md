# Obsługa nawiasów

Zalecam bezpośrednie stosowanie metod statycznych w tej grupie, ponieważ w każdym momencie mogą one zostać połączone w protokół BEP CrT. Jeśli potrzebujesz dynamicznego dostępu do metod Parsera wyrażeń nawiasów, możesz użyć
 ```zencode
 var myName = "misc";
 <itemgroup:${myName}>
 ```

Ta klasa została dodana przez moda z mod-id `contenttweaker`. Więc musisz zainstalować tę modyfikację, jeśli chcesz używać tej funkcji.

## Importowanie klasy
Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (np. rzucanie tablicy), tak aby były bezpieczne niż przepraszamy i dodaj import.
```zenscript
mods.contenttweaker.BracketHandlers
```

## Metody
### getItemGroup

Pobiera grupę przedmiotów. Wyrzuci błąd, jeśli grupa nie może zostać znaleziona

 Zwroty: `Znaleziona grupa MCItemGroup`

Typ zwrotu: [mods.contenttweaker.item.MCItemGroup](/mods/contenttweaker/API/item/MCItemGroup)

```zenscript
<itemgroup:misc>

mods.contenttweaker.BracketHandlers.getItemGroup(tokeny jako String);
mods.contenttweaker.BracketHandlers.getItemGroup("misc");
```

| Parametr | Typ         | Opis                                     |
| -------- | ----------- | ---------------------------------------- |
| tokeny   | Ciąg znaków | Co tworzysz DataCompound w wywołaniu BEP |


### Typ getToolType

Pobiera [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType). Stworzy nowy, jeśli podany nie istnieje.

 Zwraca: `Zwroty: [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType) jeśli znalezione, lub nowy typ MCToolType`

Typ zwracania: [mods.contenttweaker.item.MCToolType](/mods/contenttweaker/API/item/MCToolType)

```zenscript
<tooltype:shovel>

mods.contenttweaker.BracketHandlers.getToolType(tokeny jako String);
mods.contenttweaker.BracketHandlers.getToolType("shovel");
```

| Parametr | Typ         | Opis                                           |
| -------- | ----------- | ---------------------------------------------- |
| tokeny   | Ciąg znaków | Co chcesz utworzyć DataCompound w rozmowie BEP |



