# IEntityAttributeInstance

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.AttributeInstance;`

## ZenGetters

| ZenGetter      | GetterMethod        | 戻り値                                                                |
| -------------- | ------------------- | ------------------------------------------------------------------ |
| 属性             | getAttribute()      | [IEntityAttribute](/Vanilla/Entities/Attributes/IEntityAttribute/) |
| baseValue      | getBaseValue()      | double                                                             |
| 修飾子            | getModifiers()      | `リスト<IEntityAttrubuteModifier>`                              |
| attributeValue | getAttributeValue() | double                                                             |

## ZenSetters

| ZenSetter | SetterMethod         | パラメータタイプ |
| --------- | -------------------- | -------- |
| baseValue | setBaseValue (value) | double   |

## Modifierメソッド

- `リスト<IEntityAttrubuteModifier>` getModifiersByOperation(int operation)
- boolean hasModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier)
- [IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) getModifier(String uuid);
- void applyModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- void removeModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- void removeModifier(String uuid);
- void removeAllModifiers();