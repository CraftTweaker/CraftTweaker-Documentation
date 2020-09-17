# Zaklęcie

IEnchantment zasadniczo jest [IEnchantmentDefinition](/Vanilla/Enchantments/IEnchantmentDefinition/) i poziomem zaklęcia.

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.enchantments.IZaklęcie;`

## ZenGetters/ZenSetters

| ZenGetter          | ZenSetter          | Typ                                                                    |
| ------------------ | ------------------ | ---------------------------------------------------------------------- |
| definicja          |                    | [IEnchantmentDefinicja](/Vanilla/Enchantments/IEnchantmentDefinition/) |
| poziom             |                    | odcień                                                                 |
| nazwa wyświetlacza | nazwa wyświetlacza | ciąg znaków                                                            |

## Metody ZenMethods

### Pobierz zaklęcie jako NBT

Możesz zebrać znacznik NBT zaklęcia.  
Możesz rzucić go jako [IData](/Vanilla/Data/IData/) lub użyć metody:

```zenscript
ench.makeTag();
zakoduj się jako crafttweaker.data.IData,
```