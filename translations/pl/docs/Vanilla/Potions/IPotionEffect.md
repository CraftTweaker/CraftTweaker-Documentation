# Efekt iMikstury

IPotionEffect jest [IMiksturą](/Vanilla/Potions/IPotion/) , która ma również czas trwania i parametr wzmacniacza.  
Możesz je uzyskać z obiektu [IMikstura](/Vanilla/Potions/IPotion/).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.potions.IPotionEffect;`

## ZenGetter

| ZenGetter                             | Typ                                             |
| ------------------------------------- | ----------------------------------------------- |
| czas trwania                          | odcień                                          |
| mikstura                              | [Mikstura](/Vanilla/Potions/IPotion/)           |
| Pokazuje Cząsteczki                   | bool                                            |
| wzmacniacz                            | odcień                                          |
| Przedmioty kuratywne                  | Lista<[IItemStack](/Vanilla/Items/IItemStack/)> |
| effectName                            | ciąg znaków                                     |
| isAmbient                             | bool                                            |
| isPotionDurationMax (także ZenSetter) | bool                                            |

## Metody ZenMethods

### Jest przedmiotem kuratywnym

Używa [IItemStack](/Vanilla/Items/IItemStack/).  
Zwraca bool

```zenscript
isCurativeItem(IItemStack item);
```

### Wykonaj wpływ na jednostkę

Używa [IEntity](/Vanilla/Entities/IEntity/) lub którejkolwiek z jego podklas (np. [IPlayer](/Vanilla/Players/IPlayer/)).  
Zwraca unieważnienie (nie ma znaczenia).

```zenscript
Efekt (jednostka dominująca),
```