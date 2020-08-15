# IEntityDrop

IEntityDrop odnosi się do kropli z [encji](/Vanilla/Entities/IEntityDefinition/).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.entity.IEntityDrop;`

## ZenGetters

Możesz pobrać te informacje z nich.

| ZenGetter   | Co to robi                                         | Typ zwrotu                               | Użycie              |
| ----------- | -------------------------------------------------- | ---------------------------------------- | ------------------- |
| szansa      | Zwraca szansę na kroplę.                           | zmiennoprzecinkowe                       | `Szansa na drop`    |
| maks.       | Zwraca maksymalną ilość drogi.                     | odcień                                   | `kropka maks.`      |
| min.        | Zwraca minimalną ilość zrzutu.                     | odcień                                   | `drop.min`          |
| tylko gracz | Zwraca czy upuszczenie jest tylko graczem.         | boolean                                  | `tylko upuść/gracz` |
| range       | Zwraca minimalny zakres maksymalnej ilości zrzutu. | Liczba całkowita                         | `zakres kropli`     |
| stos        | Zwraca upuszczony przedmiot.                       | [IItemStack](/Vanilla/Items/IItemStack/) | `stos drop.stack`   |