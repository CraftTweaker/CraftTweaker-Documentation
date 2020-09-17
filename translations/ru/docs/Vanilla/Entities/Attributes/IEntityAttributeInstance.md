# IEntityAttributeInstance

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`import crafttweaker.entity.AttributeInstance;`

## ZenGetters

| Геттеры           | Метод-геттер        | Возвращаемый тип                                                   |
| ----------------- | ------------------- | ------------------------------------------------------------------ |
| атрибут           | getAttribute()      | [IEntityAttribute](/Vanilla/Entities/Attributes/IEntityAttribute/) |
| базовое значение  | getBaseValue()      | double                                                             |
| модификаторы      | getModifiers()      | `Список<IEntityAttrubuteModifier>`                           |
| значение атрибута | getAttributeValue() | double                                                             |

## ZenSetters

| ZenSetter        | Метод-сеттер           | Тип параметра |
| ---------------- | ---------------------- | ------------- |
| базовое значение | setBaseValue(значение) | double        |

## Методы модификатора

- `Список<IEntityAttrubuteModifier>` getModifiersByOperation(int операция)
- boolean hasModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier)
- [IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) getModifier(String uuid);
- void applyModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) модификатор);
- void removeModifier([IEntityAttributeModifier](/Vanilla/Entities/Attributes/IEntityAttributeModifier/) modifier);
- void removeModifier(tring uuid);
- void removeAllModifiers();