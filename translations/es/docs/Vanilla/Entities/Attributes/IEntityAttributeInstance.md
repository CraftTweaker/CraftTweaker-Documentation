# IEntityAttributeInstance

## Importando el paquete

Podría ser necesario que importes el paquete si encuentras algún problema (como lanzar un [array](/AdvancedFunctions/Arrays_and_Loops/)), más vale estar seguro que lo siento y añadir la importación.  
`importar crafttweaker.entity.AttributeInstance;`

## ZenGetters

| ZenGetter          | Método              | Tipo de devolución                                                 |
| ------------------ | ------------------- | ------------------------------------------------------------------ |
| atributo           | getAttribute()      | [IEntityAttribute](/Vanilla/Entities/Attributes/IEntityAttribute/) |
| baseValue          | getBaseValue()      | doble                                                              |
| modificadores      | getModifiers()      | `Lista<IEntityAttrubuteModifier>`                            |
| valor del atributo | getAttributeValue() | doble                                                              |

## ZenSetters

| Ajuste    | Método de configuración | Tipo de parámetro |
| --------- | ----------------------- | ----------------- |
| baseValue | setBaseValue(valor)     | doble             |

## Métodos de modificador

- `Lista<IEntityAttrubuteModifier>` getModifiersByOperation(int operation)
- boolean hasModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier)
- [IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) getModifier(String uuid);
- void applyModifier([ItityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- void removeModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- void removeModifier(String uid);
- anular remover todos los modificador();