# Mikstura

Obiekt IMikstura odnosi miksturę w grze.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.potions.IPoation;`

## Otrzymywanie obiektu IMikstura

Możesz uzyskać taki obiekt za pomocą [Obsługi Mikstur](/Vanilla/Brackets/Bracket_Potion/)

```zenscript
<potion:minecraft:strength>;
```

## Zengetters

Obecnie wszystko, co możesz zrobić z miksturami to pobieranie pewnych informacji na ich temat.  
Przykład `<potion:minecraft:strength>.name`

| Zengetter            | Co to robi                                                   | Typ zwrotu                                      |
| -------------------- | ------------------------------------------------------------ | ----------------------------------------------- |
| Nazwa                | Zwraca wewnętrzną nazwę mikstur                              | ciąg znaków                                     |
| badEffect            | Zwraca, jeśli efekt mikstury jest zły                        | bool                                            |
| Kolor cieczy         | Zwraca kolor mikstury                                        | odcień                                          |
| Kolor cieczy         | Zwraca kolor mikstury                                        | odcień                                          |
| Przedmioty kuratywne | Zwraca listę wszystkich przedmiotów kuratywnych dla mikstury | Lista<[IItemStack](/Vanilla/Items/IItemStack/)> |
| Ikona Statusu        | Zwraca czy mikstura ma ikonę statusu                         | bool                                            |
| korzystny            | Zwraca, czy mikstura jest korzystna                          | bool                                            |
| Błyskawiczny         | Zwraca czy mikstura jest natychmiastowa                      | bool                                            |

## Metody ZenMethods

### Stwórz Efekt Mikstur

[Efekt IPotionEffect](/Vanilla/Potions/IPotionEffect/) to mikstura o czasie trwania i amplifikatorze. Możesz użyć tych dwóch metod, aby uzyskać jedną z IMikstur:  
Jako że można się zgadzać, obydwa zwracają obiekt [IPotionEffect](/Vanilla/Potions/IPotionEffect/).

```zenscript
pot.makePotionEffect(czas trwania int, amplifier);
pot.makePotionEffect(czas trwania int, amplifier, boolean ambientEffect, cząstkiboolean particlesShown);
```