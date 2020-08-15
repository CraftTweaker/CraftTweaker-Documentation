# MutableItemStack

Mutowalna Stos Przedmiotów jest specjalnym obiektem [IItemStack](/Vanilla/Items/IItemStack/) , który można pobrać tylko od [ICTPlayers](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/).  
Oznacza to wszystkie metody [IItemStack](/Vanilla/Items/IItemStack/)oraz metody [Składników](/Vanilla/Variable_Types/IIngredient/)!

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakieś problemy, więc lepiej być bezpiecznym niż przepraszamy i dodać import.  
`zaimportuj mods.contenttweaker.MutableItemStack;`

## Metody ZenMethods

### Ilość

Liczba stosów to liczba przedmiotów w tym stosie!

| Metoda ZenMethod | Typ parametru | Opis                                      |
| ---------------- | ------------- | ----------------------------------------- |
| setCount(count)  | odcień        | Ustawia liczbę stosów na podaną liczbę `` |
| wzrost (licznik) | odcień        | Zwiększa liczbę stosów o `count`          |
| malej(ilość)     | odcień        | Zmniejsza liczbę stosów o `count`         |

### Obrażenia

`obrażenia (ilość intów, odtwarzacze ICTPlayera)`

Parametry:

- int ilość → Ilość punktów obrażeń dla przedmiotu
- [ICTPlayer](/Mods/ContentTweaker/Vanilla/Types/Player/ICTPlayer/) gracz → gracz/Entity uszkodzający przedmiot