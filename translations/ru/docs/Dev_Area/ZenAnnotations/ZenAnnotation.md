# Аннотации ZenScript

Аннотация ZenScript может быть добавлена для класса или его методов, чтобы отобразить его в ZenScript.

## Аннотации классов

Эти аннотации могут быть добавлены на классы ZenScript.

| Аннотация                                                                | Параметры                                                                                     | Цель  | Дополнительная информация                                                                      |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ----- | ---------------------------------------------------------------------------------------------- |
| [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/)             | ZenClass Name (e.g. `crafttweaker.item.IItemStack`), can differ from class' formal name       | Класс | Имя должно быть уникальным                                                                     |
| [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/)     | Имя расширенного типа (например, `crafttweaker.item.IItemStack`)                              | Класс | Имя должно быть уже объявленным (вы не можете расширить что-то несуществующее)                 |
| [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/)       |                                                                                               | Класс | Используется, чтобы автоматически регистрировать класс или расширение                          |
| [`@IterableList`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)         | Имя перечисляемого типа (например, `crafttweaker.mods.IMod`)                                  | Класс | Класс должен реализовывать `Iterable<T>`                                                 |
| [`@IterableMap`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)          | Имя перечисляемого класса и тип значения (например, `string`, `crafttweaker.item.IItemStack`) | Класс | Класс должен реализовывать `List<T>`                                                     |
| [`@IterableSimple`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)       | Имя перечисляемого типа (например, `crafttweaker.mods.IMod`)                                  | Класс | Класс должен реализовывать `Map<K, V>`                                                   |
| [`@BracketHandler`](/Dev_Area/ZenAnnotations/Annotation_BracketHandler/) | Приоритет обработчика скобок (например, `priority = 19`)                                      | Класс | Класс должен реализовывать `IBracketHandler`                                                   |
| [`@ModOnly`](/Dev_Area/ZenAnnotations/Annotation_ModOnly/)               | Имя мода (выражение `isModLoaded(annotation.getValue())` должно быть истинным)                | Класс | Используется в комбинации с [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) |

## Аннотации параметров

Эти аннотации могут быть даны параметрам методов.

| Аннотация                                                    | Цель     | Дополнительная информация                                                                              |
| ------------------------------------------------------------ | -------- | ------------------------------------------------------------------------------------------------------ |
| `@NotNull`                                                   | Параметр | Ничего не делать (не реализовано)                                                                      |
| [`@Optional`](/Dev_Area/ZenAnnotations/Annotation_Optional/) | Параметр | Обозначает параметр как необязательный. Необязательные параметры могут быть опущены при вызове функции |

## Аннотации методов

Эти аннотации могут быть назначены на методы (и статические, и нет)

| Аннотация                                                                  | Параметры                                                                | Цель  |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------ | ----- |
| [`@ZenCaster`](/Dev_Area/ZenAnnotations/Annotation_ZenCaster/)             |                                                                          | Метод |
| [`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/)         | [OperatorType](/Dev_Area/ZenOperators/)                                  | Метод |
| [`@ZenGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | getter name (e.g. "name") if omited, method name without () will be used | Метод |
| [`@ZenSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | setter name (e.g. "name") if omited, method name without () will be used | Метод |
| [`@ZenMemberGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                                          | Метод |
| [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                                          | Метод |
| [`@ZenMethod`](/Dev_Area/ZenAnnotations/Annotation_ZenMethod/)             |                                                                          | Метод |
| [`@ZenMethodStatic`](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/) |                                                                          | Метод |
| [`@ZenDoc`](/Dev_Area/ZenAnnotations/Annotation_ZenDoc/)                   | The Additional Method info for `dumpZS`                                  | Метод |

## Аннотации полей

Эти аннотации могут быть назначены на публичные поля (и статические, и нет)

| Аннотация                                              | Цель | Дополнительная информация               |
| ------------------------------------------------------ | ---- | --------------------------------------- |
| [`@ZenProperty`](/Dev_Area/ZenAnnotations/ZenMembers/) | Поле | Комбинирует `@ZenSetter` и `@ZenGetter` |