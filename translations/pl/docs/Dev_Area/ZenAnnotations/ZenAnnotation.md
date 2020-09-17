# ZenAdnotacja

ZenanAdnotacja może być podana klasie lub jej metodom, aby narazić ją na ZenScript

## Adnotacje klasy

Te adnotacje mogą być podane ZenClasses

| Adnotacja                                                                | Wartość                                                                                       | Target | Informacje                                                                                |
| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ------ | ----------------------------------------------------------------------------------------- |
| [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/)             | Nazwa ZenClass (np. `crafttweaker.item.IItemStack`), może różnić się od formalnej nazwy klasy | Klasa  | Nazwa musi być unikalna                                                                   |
| [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/)     | Rozszerzona nazwa ZenType (np. `crafttweaker.item.IItemStack`)                                | Klasa  | Nazwa musi już istnieć (nie możesz rozszerzyć czegoś nieegzystencji)                      |
| [`@Zenregister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/)       |                                                                                               | Klasa  | Używane do automatycznej rejestracji klasy lub rozszerzenia                               |
| [`Lista @IterableList`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)   | Nazwa ZenClass typu Iterable (np. `crafttweaker.mods.IMod`)                                   | Klasa  | Klasa musi być przypisana do `Iterable<Type>`                                       |
| [`@IterableMap`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)          | Nazwa ZenClass klucza i typu wartości Iterable (np. `string`, `crafttweaker.item.IItemStack`) | Klasa  | Klasa musi być przypisana do `Lista<Type>`                                          |
| [`@IterableSprosty`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)      | Nazwa ZenClass typu Iterable (np. `crafttweaker.mods.IMod`)                                   | Klasa  | Klasa musi być przypisana do `mapy<KeyType, ValueType>`                             |
| [`@BracketHandler`](/Dev_Area/ZenAnnotations/Annotation_BracketHandler/) | Priorytet uchwytu nawiasów (np. `priorytet = 19`)                                             | Klasa  | Klasa musi być przypisana do `IBracketHandler`                                            |
| [`Tylko @Moda`](/Dev_Area/ZenAnnotations/Annotation_ModOnly/)            | Wymagana nazwa moda (`isModLoaded(annotation.getValue())` musi zostać uniknięta do prawdy)    | Klasa  | Używane w połączeniu z [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) |

## Adnotacje parametrów

Te adnotacje mogą być podane do parametrów metody

| Adnotacja                                                       | Target   | Informacje                                                                                       |
| --------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------ |
| `@NotNull`                                                      | Parametr | Nic nie robi (NYI)                                                                               |
| [`@Opcjonalnie`](/Dev_Area/ZenAnnotations/Annotation_Optional/) | Parametr | Określa parametr jako opcjonalny. Opcjonalne parametry można pominąć podczas wywoływania funkcji |

## Adnotacje metody

Te adnotacje można podać metodom (zarówno statycznym, jak i niestatycznym)

| Adnotacja                                                                  | Wartość                                                                                      | Target |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | ------ |
| [`@ZenCaster`](/Dev_Area/ZenAnnotations/Annotation_ZenCaster/)             |                                                                                              | Metoda |
| [`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/)         | [Typ operatora](/Dev_Area/ZenOperators/)                                                     | Metoda |
| [`@ZenGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | nazwa pobierającego (np. "nazwa") w przypadku pominięcia, użyta zostanie nazwa metody bez () | Metoda |
| [`@ZenSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | nazwa ustawnika (np. "nazwa") jeśli zostanie pominięta, użyta zostanie nazwa metody bez ()   | Metoda |
| [`@ZenMemberGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                                                              | Metoda |
| [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                                                              | Metoda |
| [`@ZenMetoda`](/Dev_Area/ZenAnnotations/Annotation_ZenMethod/)             |                                                                                              | Metoda |
| [`@ZenMethodStatic`](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/) |                                                                                              | Metoda |
| [`@ZenDoc`](/Dev_Area/ZenAnnotations/Annotation_ZenDoc/)                   | Dodatkowe informacje o metodzie dla `dumpZS`                                                 | Metoda |

## Adnotacje pól

Adnotacje te mogą być podane do publicznych pól (zarówno statycznych, jak i niestatycznych)

| Adnotacja                                              | Target | Informacje                            |
| ------------------------------------------------------ | ------ | ------------------------------------- |
| [`@ZenProperty`](/Dev_Area/ZenAnnotations/ZenMembers/) | Pole   | Kombinuje `@ZenSetter` i `@ZenGetter` |