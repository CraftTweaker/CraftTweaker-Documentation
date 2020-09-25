# IPlayer

Interfejs IPlayera pozwala na oglądanie pewnych informacji o konkretnym odtwarzaczu i interakcję z danym odtwarzaczem. Najczęściej używane w obsłudze zdarzeń i funkcjach przepisów.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.player.IPlayer;`

## Rozszerzenie IEntityLivingBase i IUser

IPlayer rozszerza [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/). Oznacza to, że wszystkie funkcje dostępne dla [IEntityLivingBase](/Vanilla/Entities/IEntityLivingBase/) Obiekty są również dostępne dla obiektów IPlay.  
IPlayer rozszerza również [IUser](/Vanilla/Players/IUser/). Oznacza to, że wszystkie funkcje dostępne dla [IUser](/Vanilla/Players/IUser/) Obiekty są również dostępne dla obiektów IPlayer.

## Zengetters

Zengetters służy do pobierania informacji. Zwykle przypisany do zmiennej lub użyty w metodzie/funkcji.

| Zengetter         | Co to robi                                                                                            | Typ zwrotu                                 | Użycie                |
| ----------------- | ----------------------------------------------------------------------------------------------------- | ------------------------------------------ | --------------------- |
| uuuid             | zwraca UUID gracza                                                                                    | ciąg znaków                                | `ID gracza`           |
| Nazwa             | zwraca nazwę gracza                                                                                   | ciąg znaków                                | `Nazwa gracza`        |
| dane              | zwraca dane gracza                                                                                    | [IData](/Vanilla/Data/IData/)              | `Dane gracza`         |
| xp                | zwraca poziom doświadczenia gracza. Może być również użyty do ustawiania poziomu doświadczenia gracza | odcień                                     | `gracz.xp`            |
| rozmiar hotbara   | zwraca rozmiar paska dostępu gracza                                                                   | odcień                                     | `Rozmiar hotbaru`     |
| Rozmiar ekwipunku | zwraca rozmiar ekwipunku gracza                                                                       | odcień                                     | `Rozmiar ekwipunku`   |
| currentItem       | zwraca przedmiot, który gracz aktualnie trzyma                                                        | [IItemStack](/Vanilla/Items/IItemStack/)   | `Aktualny element`    |
| kreatywny         | zwraca jeśli gracz jest obecnie w trybie kreatywnym (jakby gra gamemode 1)                            | bool                                       | `Gracz.kreatywny`     |
| przygoda          | zwraca, jeśli gracz jest obecnie w trybie przygodowym (vel gamemode 2)                                | bool                                       | `Przygoda`            |
| x                 | zwraca aktualną pozycję X gracza w świecie                                                            | podwójne                                   | `gracz.x`             |
| y                 | zwraca aktualną pozycję y gracza na świecie                                                           | podwójne                                   | `gracz.y`             |
| z                 | zwraca aktualną pozycję z gracza w świecie                                                            | podwójne                                   | `gracz.z`             |
| pozycja           | zwraca aktualną pozycję gracza. Może być również użyty do ustawiania pozycji gracza                   | [Pozycja3f](/Vanilla/Utils/Position3f/)    | `Pozycja gracza`      |
| foodStats         | zwraca statystyki żywieniowe graczy.                                                                  | [IFoodStats](/Vanilla/Players/IFoodStats/) | `Statystyki jedzenia` |

## Metody ZenMethods

ZenMethods mają robić rzeczy z innymi rzeczami, w tym przypadku z graczem.

| Metoda ZenMethod         | Typ(y) parametru                         | Co to robi                                                      | Przykład                                                 |
| ------------------------ | ---------------------------------------- | --------------------------------------------------------------- | -------------------------------------------------------- |
| removeXP(XPtoRemove)     | odcień                                   | Usuwa dany poziom doświadczenia z gracza.                       | `usuń XP(1)`                                             |
| aktualizacja(IData)      | [IData](/Vanilla/Data/IData/)            | Aktualizuje dane gracza do podanego IData.                      |                                                          |
| SendChat(wiadomość)      | ciąg znaków lub IchatMessage             | Wysyła graczowi wiadomość czatu.                                | `player.sendChat ("Witaj mojemu staremu przyjacielowi")` |
| getHotbarStack(index)    | odcień                                   | Zwraca przedmiot w danym indeksie w pasku dostępu gracza.       | `gracz.getHotbarStack(3)`                                |
| getInventoryStack(index) | odcień                                   | Zwraca przedmiot w danym indeksie w ekwipunku gracza.           | `gracz.getInventoryStack(3)`                             |
| prezent(przedmiot)       | [IItemStack](/Vanilla/Items/IItemStack/) | Daj graczowi dostarczony przedmiot. Przedmiot jest IItemStack.  | `gracz.give(<minecraft:gold_ingot>)`               |
| teleportacja (pozycja)   | [Pozycja3f](/Vanilla/Utils/Position3f/)  | Teleportuje gracza do podanej pozycji w tym samym wymiarze      | `gracz.teleport(pozycja)`                                |
| wykonaj polecenie (raw)  | ciąg znaków                              | Wykonuje polecenie jako gracz                                   | `player.executeCommand("kill")`                          |
| dropItem(dropAll)        | bool                                     | Upuszcza bieżący przedmiot (lub cały stos), który gracz trzyma. | `Element gracza (false)`                                 |
| dropItem(itemToDrop)     | [IItemStack](/Vanilla/Items/IItemStack/) | Upuszcza podany przedmiot w pozycji gracza.                     | `player.dropItem(<minecraft:dirt>)`                |