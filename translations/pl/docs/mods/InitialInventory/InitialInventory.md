# InitialInventory

## Opis

Ta modyfikacja dodaje wsparcie dla gracza, aby otrzymać przedmiot, gdy dołączą do świata, a następnie nigdy więc, podobna do tego, jak niektóre mody dają graczom książki, gdy po raz pierwszy dołączają do świata.

## Pakiet
`mods.initialinventory.InvHandler`

## Dodawanie elementów początkowych

Spowoduje to dodanie przedmiotu do ekwipunku graczy kiedy dołączą do świata.

Parametry są następujące:


Param: `key`

Typ: `String`

Opis:

Wykorzystywane do określenia, czy dany przedmiot powinien zostać podany. Kluczem może być dowolny ciąg. Punktem jest ustalenie, czy gracz otrzymał wcześniej zestaw przedmiotów.

Jest to przydatne dla paczek modów, które później dodają więcej elementów startowych, używając innego klucza, gracze, którzy już zaczęli grać w paczkę, mogą nadal otrzymywać te przedmioty. Przykładem byłoby:

Dodaj diament jako przedmiot startowy z kluczem "1", dołącz do świata, gracz otrzyma diament.

Dodaj jabłko jako przedmiot startowy z kluczem "2", dołącz do świata, gracz otrzyma jabłko, ale nie diament.

Stwórz nowy świat, gracz otrzyma zarówno jabłko, jak i diament.

param: `item`

Type `IItemStack`

Opis:

Przedmiot do oddania graczowi po dołączeniu.

Param: `indeks`

Typ: `int`

Opis:

Opcjonalna liczba całkowita, aby określić, gdzie przedmiot zostanie podany, może być użyta do umieszczenia przedmiotu w polu ekwipunku jak miejsce na zbroję.

Jeśli zostawione, domyślnie -1, co oznacza, że umieści go w pierwszym dostępnym slocie, lub połączyć go z innymi przedmiotami, które mogą już znajdować się w ekwipunku.


## Przykład

```zenscript
//mods.initialinventory.InvHandler.addStartingItem(String key, IItemStack itemem, Opcjonalny indeks int);
mods.initialinventory.InvHandler.addStartingItem("jabłka", <item:minecraft:apple>);
mods.initialinventory.InvHandler.addStartingItem("jabłka", <item:minecraft:golden_apple>, 5);
```


