# IEntityAttributeInstance


## 导入相关包
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.AttributeInstance;`

## ZenGetters

| ZenGetter      | GetterMethod        | 返回值类型                                                              |
| -------------- | ------------------- | ------------------------------------------------------------------ |
| attribute      | getAttribute()      | [IEntityAttribute](/Vanilla/Entities/Attributes/IEntityAttribute/) |
| baseValue      | getBaseValue()      | 双精度                                                                |
| modifiers      | getModifiers()      | `List<IEntityAttrubuteModifier>`                             |
| attributeValue | getAttributeValue() | 双精度                                                                |


## ZenSetters

| ZenSetter | SetterMethod        | 参数类型 |
| --------- | ------------------- | ---- |
| baseValue | setBaseValue(value) | 双精度  |


## Modifier Methods

- `List<IEntityAttrubuteModifier>` getModifiersByOperation(int operation)
- boolean hasModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier)
- [IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) getModifier(String uuid);
- void applyModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- void removeModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- void removeModifier(String uuid);
- void removeAllModifiers();
