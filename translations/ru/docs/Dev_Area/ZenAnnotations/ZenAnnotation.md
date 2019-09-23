# Аннотации ZenScript

Аннотация ZenScript может быть добавлена для класса или его методов, чтобы отобразить его в ZenScript.

## Аннотации классов

Эти аннотации могут быть добавлены на классы ZenScript.

| Аннотация                                                                | Параметры                                                                                        | Цель  | Дополнительная информация                                                                   |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ | ----- | ------------------------------------------------------------------------------------------- |
| [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/)             | ZenClass Name (e.g. `crafttweaker.item.IItemStack`), can differ from method formal name          | Класс | Имя должно быть уникальным                                                                  |
| [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/)     | Expanded ZenType name (e.g. `crafttweaker.item.IItemStack`)                                      | Класс | Имя должно быть уже объявленным (вы не можете расширить что-то несуществующее)              |
| [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/)       |                                                                                                  | Класс | Used to Automatically register the class or expansion                                       |
| [`@IterableList`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)         | ZenClass name of the Iterable Type (e.g. `crafttweaker.mods.IMod`)                               | Класс | Class needs to be assignable to `Iterable<Type>`                                      |
| [`@IterableMap`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)          | ZenClass name of the Iterable key and value Type (e.g. `string`, `crafttweaker.item.IItemStack`) | Класс | Class needs to be assignable to `List<Type>`                                          |
| [`@IterableSimple`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)       | ZenClass name of the Iterable Type (e.g. `crafttweaker.mods.IMod`)                               | Класс | Class needs to be assignable to `Map<KeyType, ValueType>`                             |
| [`@BracketHandler`](/Dev_Area/ZenAnnotations/Annotation_BracketHandler/) | Приоритет обработчика скобок (например, `priority = 19`)                                         | Класс | Class needs to be assignable to `IBracketHandler`                                           |
| [`@ModOnly`](/Dev_Area/ZenAnnotations/Annotation_ModOnly/)               | Required mod's name (`isModLoaded(annotation.getValue())` needs to eval to true)                 | Класс | Used in combination with [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) |

## Аннотации параметров

Эти аннотации могут быть даны параметрам методов.

| Аннотация                                                    | Цель     | Дополнительная информация                                                                              |
| ------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------ |
| `@NotNull`                                                   | Параметр | Does nothing (NYI)                                                                                     |
| [`@Optional`](/Dev_Area/ZenAnnotations/Annotation_Optional/) | Параметр | Обозначает параметр как необязательный. Необязательные параметры могут быть опущены при вызове функции |

## Аннотации методов

These annotations can be given to Methods (both static and nonstatic)

| Annotation                                                                 | Value                                                                    | Target |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ------ |
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

| Annotation                                             | Target | Information                            |
| ------------------------------------------------------ | ------ | -------------------------------------- |
| [`@ZenProperty`](/Dev_Area/ZenAnnotations/ZenMembers/) | Field  | Combines `@ZenSetter` and `@ZenGetter` |