# IEntityAttribute

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.entity.Attribute;`

## ZenGetters

| ZenGetter     | GetterMethod      | Return Type      |
| ------------- | ----------------- | ---------------- |
| name          | getName()         | 文字列              |
| defaultValue  | getDefaultValue() | double           |
| ウォッチする必要があります | getShouldWatch()  | boolean型         |
| 親             | getParent()       | IEntityAttribute |

## その他のZenMethods

- double clampValue(double Value) → 何らかの操作...