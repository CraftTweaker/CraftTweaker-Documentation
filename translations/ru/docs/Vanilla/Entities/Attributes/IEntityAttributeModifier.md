# IEntityAttributeModifier

## Импорт пакета

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.AttributeModifier;`

## ZenGetters

| ZenGetter | GetterMethod   | Возвращаемый тип |
| --------- | -------------- | ---------------- |
| uuid      | getUUID()      | string           |
| name      | getName()      | string           |
| operation | getOperation() | int              |
| amount    | getAmount()    | double           |
| saved     | isSaved()      | boolean          |

## ZenSetters

| Сеттер | SetterMethod      | Parameter Type |
| ------ | ----------------- | -------------- |
| saved  | setSaved(boolean) | boolean        |

### Create Modifier

    for operation:
    0 = add: Increment X by Amount
    1 = multiply_base: Increment Y by X * Amount
    2 = multiply: Y = Y * (1 + Amount) (equivalent to Increment Y by Y * Amount).
    

```zenscript
AttributeModifier.createModifier(String name, double amount, int operation, @Optional String uuid);
```