# IEntityAttribute

## 导入相关包
It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.Attribute;`

## ZenGetters

| ZenGetter    | GetterMethod      | 返回值类型            |
| ------------ | ----------------- | ---------------- |
| name（名称）     | getName()         | string           |
| defaultValue | getDefaultValue() | 双精度              |
| shouldWatch  | getShouldWatch()  | 布尔值              |
| parent       | getParent()       | IEntityAttribute |

## More ZenMethods

- double clampValue(double Value) → Does something...