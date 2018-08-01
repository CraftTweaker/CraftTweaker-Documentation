# ZenAnnotation

A ZenAnnotation can be given to a Class or its Methods to expose it to ZenScript

## Class annotations

These annotations can be given to ZenClasses

| Annotation                                     | Value                                                                                            | Target | Information                                                       |
|------------------------------------------------|--------------------------------------------------------------------------------------------------|--------|-------------------------------------------------------------------|
| [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/)             | ZenClass Name (e.g. `crafttweaker.item.IItemStack`), can differ from method formal name          | Class  | Name has to be unique                                             |
| [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/)     | Expanded ZenType name (e.g. `crafttweaker.item.IItemStack`)                                      | Class  | Name has to exist already (you cant extend something nonexistant) |
| [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/)       |                                                                                                  | Class  | Used to Automatically register the class or expansion             |
| [`@IterableList`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)         | ZenClass name of the Iterable Type (e.g. `crafttweaker.mods.IMod`)                               | Class  | Class needs to be assignable to `Iterable<Type>`                  |
| [`@IterableMap`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)          | ZenClass name of the Iterable key and value Type (e.g. `string`, `crafttweaker.item.IItemStack`) | Class  | Class needs to be assignable to `List<Type>`                      |
| [`@IterableSimple`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)       | ZenClass name of the Iterable Type (e.g. `crafttweaker.mods.IMod`)                               | Class  | Class needs to be assignable to `Map<KeyType, ValueType>`         |
| [`@BracketHandler`](/Dev_Area/ZenAnnotations/Annotation_BracketHandler/) | Bracket Handler Priority (e.g. `priority = 19`)                                                  | Class  | Class needs to be assignable to `IBracketHandler`                 |
| [`@ModOnly`](/Dev_Area/ZenAnnotations/Annotation_ModOnly/)               | Required mod's name (`isModLoaded(annotation.getValue())` needs to eval to true)                 | Class  | Used in combination with [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) |


## Parameter annotations

These annotations can be given to Method Parameters

| Annotation                         | Target    | Information                                                                                   |
|------------------------------------|-----------|-----------------------------------------------------------------------------------------------|
| `@NotNull`                         | Parameter | Does nothing (NYI)                                                                            |
| [`@Optional`](/Dev_Area/ZenAnnotations/Annotation_Optional/) | Parameter | Denotes a Parameter as optional. Optional parameters can be omitted when calling the function |


## Method annotations

These annotations can be given to Methods (both static and nonstatic)

| Annotation                                                                | Value                                                                    | Target |
|---------------------------------------------------------------------------|--------------------------------------------------------------------------|--------|
| [`@ZenCaster`](/Dev_Area/ZenAnnotations/Annotation_ZenCaster/)             |                                                                          | Method |
| [`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/)         | [OperatorType](/Dev_Area/ZenOperators/)                                  | Method |
| [`@ZenGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | getter name (e.g. "name") if omited, method name without () will be used | Method |
| [`@ZenSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | setter name (e.g. "name") if omited, method name without () will be used | Method |
| [`@ZenMemberGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                                          | Method |
| [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                                          | Method |
| [`@ZenMethod`](/Dev_Area/ZenAnnotations/Annotation_ZenMethod/)             |                                                                          | Method |
| [`@ZenMethodStatic`](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/) |                                                                          | Method |
| [`@ZenDoc`](/Dev_Area/ZenAnnotations/Annotation_ZenDoc/)                   | The Additional Method info for `dumpZS`                                  | Method |


## Field annotations

These annotations can be given to public fields (both static and nonstatic)

| Annotation                                            | Target | Information                            |
|-------------------------------------------------------|--------|----------------------------------------|
| [`@ZenProperty`](/Dev_Area/ZenAnnotations/ZenMembers/) | Field  | Combines `@ZenSetter` and `@ZenGetter` |