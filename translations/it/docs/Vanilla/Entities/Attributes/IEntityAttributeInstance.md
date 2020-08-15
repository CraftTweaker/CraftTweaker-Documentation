# IEntityAttributeInstance

## Importazione del pacchetto

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.AttributeInstance;`

## ZenGetters

| ZenGetter      | GetterMethod        | Tipo Di Reso                                                       |
| -------------- | ------------------- | ------------------------------------------------------------------ |
| attribute      | getAttribute()      | [IEntityAttribute](/Vanilla/Entities/Attributes/IEntityAttribute/) |
| baseValue      | getBaseValue()      | doppia                                                             |
| modifiers      | getModifiers()      | `List<IEntityAttrubuteModifier>`                             |
| attributeValue | getAttributeValue() | doppia                                                             |

## ZenSetters

| ZenSetter | SetterMethod        | Tipo Parametro |
| --------- | ------------------- | -------------- |
| baseValue | setBaseValue(value) | doppia         |

## Modifier Methods

- `List<IEntityAttrubuteModifier>` getModifiersByOperation(int operation)
- boolean hasModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier)
- [IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) getModifier(String uuid);
- void applyModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- void removeModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- void removeModifier(String uuid);
- void removeAllModifiers();