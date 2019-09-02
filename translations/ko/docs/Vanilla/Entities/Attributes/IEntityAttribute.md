# IEntityAttribute

## 패키지 임포트하기

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.Attribute;`

## ZenGetters

| ZenGetter    | GetterMethod      | 반환 타입            |
| ------------ | ----------------- | ---------------- |
| name         | getName()         | string           |
| defaultValue | getDefaultValue() | double           |
| shouldWatch  | getShouldWatch()  | boolean          |
| parent       | getParent()       | IEntityAttribute |

## More ZenMethods

- double clampValue(double Value) → Does something...