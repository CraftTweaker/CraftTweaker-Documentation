# ZenAnnotation

A ZenAnnotation can be given to a Class or its Methods to expose it to ZenScript

## Class annotations

These annotations can be given to ZenClasses

| Annotation                                 | Value                                                                                            | Target | Information                                                       |
|--------------------------------------------|--------------------------------------------------------------------------------------------------|--------|-------------------------------------------------------------------|
| [`@ZenClass`](Annotation_ZenClass)         | ZenClass Name (e.g. `crafttweaker.item.IItemStack`), can differ from method formal name          | Class  | Name has to be unique                                             |
| [`@ZenExpansion`](Annotation_ZenExpansion) | Expanded ZenType name (e.g. `crafttweaker.item.IItemStack`)                                      | Class  | Name has to exist already (you cant extend something nonexistant) |
| [`@ZenRegister`](Annotation_ZenRegister)   |                                                                                                  | Class  | Used to Automatically register the class or expansion             |
| [`@IterableList`](Annotation_Iterable)     | ZenClass name of the Iterable Type (e.g. `crafttweaker.mods.IMod`)                               | Class  | Method needs to be assignable to Iterable<Type>                   |
| [`@IterableMap`](Annotation_Iterable)      | ZenClass name of the Iterable key and value Type (e.g. `string`, `crafttweaker.item.IItemStack`) | Class  | Method needs to be assignable to List<Type>                       |
| [`@IterableSimple`](Annotation_Iterable)   | ZenClass name of the Iterable Type (e.g. `crafttweaker.mods.IMod`)                               | Class  | Method needs to be assignable to Map<KeyType, ValueType>          |


## Parameter annotations

These annotations can be given to Method Parameters

| Annotation   | Target    | Information                                                                                   |
|--------------|-----------|-----------------------------------------------------------------------------------------------|
| `@NotNull`   | Parameter | Does nothing (NYI)                                                                            |
| `@Optional`  | Parameter | Denotes a Parameter as optional. Optional parameters can be omitted when calling the function |


## Method annotations

These annotations can be given to Methods (both static and nonstatic)

| Annotation         | Value                                                                    | Target |
|--------------------|--------------------------------------------------------------------------|--------|
| `@ZenCaster`       |                                                                          | Method |
| `@ZenOperator`     | [OperatorType](/Dev_Area/ZenOperators)                                   | Method |
| `@ZenGetter`       | getter name (e.g. "name") if omited, method name without () will be used | Method |
| `@ZenSetter`       | setter name (e.g. "name") if omited, method name without () will be used | Method |
| `@ZenMemberGetter` |                                                                          | Method |
| `@ZenMemberSetter` |                                                                          | Method |
| `@ZenMethod`       |                                                                          | Method |