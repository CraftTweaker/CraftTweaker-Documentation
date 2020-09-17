# IEntityAnimal

Zwierzę.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.entity.IEntityAnimal;`

## Rozszerzenie [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/)

IEntityAnimal extends [IEntityAgeable](/Vanilla/Entities/IEntityAgeable/). Oznacza to, że wszystkie funkcje dostępne dla [IEntities](/Vanilla/Entities/IEntityAgeable/) są również dostępne dla IEntityAnimal.

## Metody

### ZenGetters/Setters

| ZenGetter | Typ                                                   |
| --------- | ----------------------------------------------------- |
| kochana   | [IPlayer](/Vanilla/Players/IPlayer/) (może być null!) |
| isInLove  | bool                                                  |

### Metody ZenMethods

#### sprawdź, czy przedmiot może być użyty do hodowli zwierzęcia

Metoda oczekuje [IItemStack](/Vanilla/Items/IItemStack/).  
Zwraca bool.

```zenscript
entAnObj.isBreedingItem(IItemStack itemStack);
```

#### Ustaw lub zresetuj w miłości

Pierwsza metoda spodziewa się opcjonalnego obiektu [IPlayer](/Vanilla/Players/IPlayer/) , drugiego nic.  
Nic nie zwraca.

```zenscript
entAnObj.setInLove(@Optional IPlayer player);
entAnObj.resetInLove();
```

#### Sprawdź, czy inne zwierzę może współgrać z tą.

Metoda oczekuje obiektu IEntityAnimal .  
Zwraca bool.

```zenscript
entAnObj.canMateWith(IEntityAnimal other);
```