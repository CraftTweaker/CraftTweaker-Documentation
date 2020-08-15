# IEntityAttributeInstance

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.entity.AttributeInstance;`

## ZenGetters

| ZenGetter      | GetterMethod        | Tipo Di Reso                                                       |
| -------------- | ------------------- | ------------------------------------------------------------------ |
| attributo      | getAttribute()      | [IEntityAttribute](/Vanilla/Entities/Attributes/IEntityAttribute/) |
| baseValue      | getBaseValue()      | doppia                                                             |
| modificatori   | getModifiers()      | `Elenco<IEntityAttrubuteModifier>`                           |
| attributeValue | getAttributeValue() | doppia                                                             |

## ZenSetters

| ZenSetter | SetterMethod        | Tipo Parametro |
| --------- | ------------------- | -------------- |
| baseValue | setBaseValue(value) | doppia         |

## Metodi Modificatori

- `List<IEntityAttrubuteModifier>` getModifiersByOperation(int operation)
- boolean hasModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier)
- [IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) getModifier(String uuid);
- void applicyModifier([modificatore IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/));
- void removeModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- void removeModifier(String uuid);
- void removeAllModifiers();