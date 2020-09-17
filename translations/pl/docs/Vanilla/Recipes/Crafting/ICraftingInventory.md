# Ekwipunek ICrafting

ICraftingInventory zawiera wszystkie informacje dotyczące inwentarza, w którym odbywa się proces rzemieślniczy.

## Importowanie klasy

Może być wymagane [zaimportowanie](/AdvancedFunctions/Import/) klasy, aby uniknąć błędów.  
`zaimportuje crafttweaker.recipes.ICraftingInventory`

## ZenGetters

| ZenGetter           | Typ zwrotu                                   | Opis                                          |
| ------------------- | -------------------------------------------- | --------------------------------------------- |
| `gracz`             | [IPlayer](/Vanilla/Players/IPlayer/)         | gracz posiadający ten ekwipunek               |
| `rozmiar`           | odcień                                       | wielkość ekwipunku                            |
| `width`             | odcień                                       | szerokość ekwipunku                           |
| `wysokość`          | odcień                                       | wysokość ekwipunku                            |
| `liczba stosów`     | odcień                                       | liczba stosów, które są faktycznie wypełnione |
| `elementy`          | [IItemStack[][]](/Vanilla/Items/IItemStack/) | Przedmioty obecne w stole rzemieślniczym      |
| `tablica elementów` | [IItemStack[]](/Vanilla/Items/IItemStack/)   | Przedmioty obecne w stole rzemieślniczym      |

## Metody ZenMethods

Dostępne są następujące metody:

`inventory.getStack(index)` zwraca [IItemStack](/Vanilla/Items/IItemStack/) w danym indeksie lub null jeśli nie ma żadnego produktu. Indeks jest int.  
`inventory.setStack(indeks elementu)` ustawia Stack w danym indeksie na dostarczony przedmiot. Indeks jest int, przedmiot jest IItemStack. Użyj null jeśli chcesz wyczyścić stos w tym indeksie.

Górny lewy stos to pozycja (0, 0), wiersze i kolumny są intami.  
`ekwipunku. etStack(wiersz, kolumna)` zwraca [IItemStack](/Vanilla/Items/IItemStack/) w podanej pozycji lub null jeśli nie ma aktualnej pozycji.  
`inventory.setStack(wiersz, kolumna, element)` ustawia stosy w danej pozycji na dostarczony przedmiot. Przedmiot jest IItemStack. Użyj pustego, jeśli chcesz wyczyścić stos w tej pozycji.