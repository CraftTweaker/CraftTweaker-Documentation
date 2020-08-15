# IEntityMod

A Mod.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.entity.IEntityMob;`

## Rozszerzanie [IEntityCreature](/Vanilla/Entities/IEntityCreature/)

IEntityMob extends [IEntityCreature](/Vanilla/Entities/IEntityCreature/). Oznacza to, że wszystkie funkcje dostępne dla obiektów [IEntityCreature](/Vanilla/Entities/IEntityCreature/) są również dostępne dla obiektów IEntityMob.

## Metody

### Metody ZenMethods

#### Sprawdź, czy mob uniemożliwia uśpienie gracza

Metoda wymaga obiektu [IPlayer](/Vanilla/Players/IPlayer/) .  
Zwraca bool.

```zenscript
entMobObj.isPreventingPlayerRest(IPlayer gracz);
```