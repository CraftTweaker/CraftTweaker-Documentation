# IEntityAttributeInstance

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importieren Sie crafttweaker.entity.AttributeInstanz;`

## ZenGetter

| ZenGetter    | GetterMethode       | Rückgabetyp                                                        |
| ------------ | ------------------- | ------------------------------------------------------------------ |
| attribut     | getAttribute()      | [IEntityAttribute](/Vanilla/Entities/Attributes/IEntityAttribute/) |
| baseWert     | getBaseValue()      | double                                                             |
| modifizierer | getModifiers()      | `Liste<IEntityAttrubuteModifier>`                            |
| Attributwert | getAttributeValue() | double                                                             |

## ZenSetter

| ZenSetter | Settermethode      | Parametertyp |
| --------- | ------------------ | ------------ |
| baseWert  | setBaseValue(Wert) | double       |

## Bearbeiter Methoden

- `Liste<IEntityAttrubuteModifier>` getModifiersByOperation(int Operation)
- boolean hasModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier)
- [IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) getModifier(String uuid);
- Anwendung Modifizierer stornieren ([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) Modifikator);
- void removeModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- void removeModifier(String uuid);
- Entfernen()AllModifiers();