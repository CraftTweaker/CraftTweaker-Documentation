# IEntityCreature

Stworzenie.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.entity.IEntityCreature;`

## Rozszerzenie [IEntityLiving](/Vanilla/Entities/IEntityLiving/)

IEntityCreature rozszerza [IEntityLiving](/Vanilla/Entities/IEntityLiving/). Oznacza to, że wszystkie funkcje dostępne dla obiektów [IEntityLiving](/Vanilla/Entities/IEntityLiving/) są również dostępne dla IEntityCreature.

## Metody

### ZenGetters/Setters

| ZenGetter               | Typ                                    |
| ----------------------- | -------------------------------------- |
| ścieżka skrótu          | bool                                   |
| Odległość isWithinHomey | bool                                   |
| Pozycja domowa          | [IBlockPos](/Vanilla/World/IBlockPos/) |
| maximumHomeDistance     | zmiennoprzecinkowe                     |
| hasHome                 | bool                                   |

### Metody ZenMethods

#### zagraj żywy dźwięk

Metoda niczego nie oczekuje.  
Nic nie zwraca.

```zenscript
entCreObj.playLivingSound();
```

#### Ustaw lub odłącz stronę główną

Pierwsza metoda oczekuje obiektu [IBlockPos](/Vanilla/World/IBlockPos/) i int.  
Druga metoda nic nie oczekuje.  
Obie metody nic nie zwracają.

```zenscript
entAnObj.setHomePositionAndDistance(IBlockPos pos, int distance);
entAnObj.detachHome();
```

#### Sprawdź, czy pozycja znajduje się w odległości do domu

Metoda oczekuje obiektu [IBlockPos](/Vanilla/World/IBlockPos/) .  
Zwraca bool.

```zenscript
entAnObj.isPositionWithinHomeDistance
```