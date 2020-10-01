# IEntityAttributeModifier

## Importing the package
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.AttributeModifier;`


## ZenGetters

| ZenGetter | GetterMethod   | Return Type |
|-----------|----------------|-------------|
| uuid      | getUUID()      | string      |
| name      | getName()      | string      |
| operation | getOperation() | int         |
| amount    | getAmount()    | double      |
| saved     | isSaved()      | boolean     |

## ZenSetters

| SetterName                  | SetterMethod            | Parameter Type  |
|-----------------------------|-------------------------|-----------------|
| saved                       | setSaved(boolean)       | boolean         |

## More ZenMethods

- IEntityAttributeModifier createModifier(String name, double amount, int operation, @Optional String uuid);
