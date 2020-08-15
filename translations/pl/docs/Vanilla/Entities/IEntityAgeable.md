# IEntityAgeable

Obiekt starszy się to podmiot, który z czasem rośnie, jak krowa.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.entity.IEntityAgeable;`

## Rozszerzanie [IEntityCreature](/Vanilla/Entities/IEntityCreature/)

IEntityAgeable extends [IEntityCreature](/Vanilla/Entities/IEntityCreature/). Oznacza to, że wszystkie funkcje dostępne dla [IEntities](/Vanilla/Entities/IEntityCreature/) są również dostępne dla IEntityAgeable.

## Metody

### ZenGetters/Setters

| ZenGetter    | ZenSetter    | Typ    |
| ------------ | ------------ | ------ |
| Wiek wzrostu | Wiek wzrostu | odcień |
|              | scaleForAge  | bool   |

### Metody ZenMethods

#### dodaj wiek

Metody oczekują int, a druga metoda opcjonalnego boolu.  
Obie metody nic nie zwracają.  
Zazwyczaj druga metoda robi to samo, co pierwsza z fałszywym argumentem, który może się różnić w przypadku implementacji modów.

```zenscript
entAgObj.ageUp(int sekund, @Opcjonalna wartość logiczna);
entAgObj.addGrowth(int sekund);
```