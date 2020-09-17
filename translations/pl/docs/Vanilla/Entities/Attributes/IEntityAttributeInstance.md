# IEntityAttributeInstance

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.entity.AttributeInstance;`

## ZenGetters

| ZenGetter      | Metoda GetterMethod | Typ zwrotu                                                         |
| -------------- | ------------------- | ------------------------------------------------------------------ |
| atrybut        | getAtrybuty()       | [IEntityAttribute](/Vanilla/Entities/Attributes/IEntityAttribute/) |
| Wartość bazowa | getBaseValue()      | podwójne                                                           |
| modyfikatory   | getModifiers()      | `Lista<IEntityAttrubuteModifier>`                            |
| atrybutValue   | getAttributeValue() | podwójne                                                           |

## ZenSettery

| ZenSetter      | Metoda ustawienia     | Typ parametru |
| -------------- | --------------------- | ------------- |
| Wartość bazowa | setBaseValue(wartość) | podwójne      |

## Metody modyfikacji

- `Lista<IEntityAttrubuteModifier>` getModifiersByOperation(int operation)
- boolean hasModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier)
- [IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) getModifier(String uuuid);
- void applyModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- void removeModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- Unieważnij removeModifier(String uuuid);
- Unikać removeAllModifiers();