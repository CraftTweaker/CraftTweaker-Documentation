# IEntityAttribute

## Импорт пакета

Возможно, вам потребуется импортировать пакет, если вы столкнетесь с какими-либо проблемами (например, наложение [массива](/AdvancedFunctions/Arrays_and_Loops/)), так что лучше быть безопасным, чем извините и добавить импорт.  
`импорт crafttweaker.entity.Attribute;`

## ZenGetters

| Геттеры               | Метод-геттер      | Возвращаемый тип |
| --------------------- | ----------------- | ---------------- |
| имя                   | getName()         | string           |
| значение по умолчанию | getDefaultValue() | double           |
| shouldWatch           | getShouldWatch()  | boolean          |
| родитель              | getParent()       | IEntityAttribute |

## Больше ZenMethods

- двойной clampValue(двойная стоимость) → Делает что-нибудь...