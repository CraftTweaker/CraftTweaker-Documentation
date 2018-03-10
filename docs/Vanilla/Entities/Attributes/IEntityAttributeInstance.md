# 实体属性实例

## 导入相关包
为了避免发生一些不期而遇的问题（比如声明[数组](/AdvancedFunctions/Arrays_and_Loops)），最为安全、也是最为推荐的方式就是导入相关的包。
`import crafttweaker.entity.AttributeInstance;`

## ZenGetters

| ZenGetter      | GetterMethod        | 返回类型                              |
|----------------|---------------------|--------------------------------------|
| attribute      | getAttribute()      | [实体属性](IEntityAttribute) |
| baseValue      | getBaseValue()      | 双精度型                              |
| modifiers      | getModifiers()      | `List<IEntityAttrubuteModifier>`     |
| attributeValue | getAttributeValue() | 双精度型                              |


## ZenSetters

| ZenSetter | SetterMethod        | 传入类型        |
|-----------|---------------------|----------------|
| baseValue | setBaseValue(value) | 双精度型        |


## Modifier Methods

- `List<IEntityAttrubuteModifier>` getModifiersByOperation(int operation)
- boolean hasModifier([IEntityAttributeModifier](IEntityAttributeModifier) modifier)
- [IEntityAttributeModifier](IEntityAttributeModifier) getModifier(String uuid);
- void applyModifier([IEntityAttributeModifier](IEntityAttributeModifier) modifier);
- void removeModifier([IEntityAttributeModifier](IEntityAttributeModifier) modifier);
- void removeModifier(String uuid);
- void removeAllModifiers();
