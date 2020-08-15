# IEntityAttribute

## Importation du paquet

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.Attribute;`

## ZenGetters

| ZenGetter    | GetterMethod      | Type de retour       |
| ------------ | ----------------- | -------------------- |
| Nom          | getName()         | chaîne de caractères |
| defaultValue | getDefaultValue() | double               |
| shouldWatch  | getShouldWatch()  | boolean              |
| parent       | getParent()       | IEntityAttribute     |

## More ZenMethods

- double clampValue(double Value) → Does something...