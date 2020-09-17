# ZenAnnotation

Una ZenAnnotation può essere data a una Classe o ai suoi Metodi per esporla a ZenScript

## Annotazioni di classe

Queste annotazioni possono essere date a ZenClasses

| Annotazione                                                              | Valore                                                                                          | Target | Informazioni                                                                                 |
| ------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ------ | -------------------------------------------------------------------------------------------- |
| [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/)             | Nome ZenClass (es. `crafttweaker.item.IItemStack`), può differire dal nome formale della classe | Classe | Il nome deve essere unico                                                                    |
| [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/)     | Nome di ZenType esteso (es. `crafttweaker.item.IItemStack`)                                     | Classe | Il nome deve esistere già (si cant estendere qualcosa di inesistente)                        |
| [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/)       |                                                                                                 | Classe | Usato per registrare automaticamente la classe o l'espansione                                |
| [`@IterableList`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)         | Nome ZenClass del Tipo Iterabile (es. `crafttweaker.mods.IMod`)                                 | Classe | La classe deve essere assegnabile a `Iterable<Type>`                                   |
| [`@IterableMap`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)          | Nome ZenClass della chiave e valore Iterable (es. `stringa`, `crafttweaker.item.IItemStack`)    | Classe | La classe deve essere assegnabile a `Lista<Type>`                                      |
| [`@IterableSimple`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)       | Nome ZenClass del Tipo Iterabile (es. `crafttweaker.mods.IMod`)                                 | Classe | La classe deve essere assegnabile a `Mappa<KeyType, ValueType>`                        |
| [`@BracketHandler`](/Dev_Area/ZenAnnotations/Annotation_BracketHandler/) | Priorità gestore parentesi (es. `priorità = 19`)                                                | Classe | La classe deve essere assegnabile a `IBracketHandler`                                        |
| [`@ModOnly`](/Dev_Area/ZenAnnotations/Annotation_ModOnly/)               | Nome della mod richiesto (`isModLoaded(annotation.getValue())` deve essere eval a true)         | Classe | Usato in combinazione con [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) |

## Annotazioni dei parametri

Queste annotazioni possono essere date ai parametri del metodo

| Annotazione                                                   | Target    | Informazioni                                                                                                   |
| ------------------------------------------------------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| `@NotNull`                                                    | Parametro | Non fa nulla (NYI)                                                                                             |
| [`@Opzionale`](/Dev_Area/ZenAnnotations/Annotation_Optional/) | Parametro | Indica un parametro come facoltativo. I parametri opzionali possono essere omessi quando si chiama la funzione |

## Annotazioni del metodo

Queste annotazioni possono essere date a Metodi (sia statici che nonstatici)

| Annotazione                                                                | Valore                                                                           | Target |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------ |
| [`@ZenCaster`](/Dev_Area/ZenAnnotations/Annotation_ZenCaster/)             |                                                                                  | Metodo |
| [`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/)         | [OperatorType](/Dev_Area/ZenOperators/)                                          | Metodo |
| [`@ZenGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | getter name (es. "name") se omesso, verrà utilizzato il nome del metodo senza () | Metodo |
| [`@ZenSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | nome setter (es. "nome") se omesso, verrà utilizzato il nome del metodo senza () | Metodo |
| [`@ZenMemberGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                                                  | Metodo |
| [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                                                  | Metodo |
| [`@ZenMethod`](/Dev_Area/ZenAnnotations/Annotation_ZenMethod/)             |                                                                                  | Metodo |
| [`@ZenMethodStatic`](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/) |                                                                                  | Metodo |
| [`@ZenDoc`](/Dev_Area/ZenAnnotations/Annotation_ZenDoc/)                   | The Additional Method info for `dumpZS`                                          | Metodo |

## Annotazioni sul campo

Queste annotazioni possono essere date a campi pubblici (sia statici che nonstatici)

| Annotazione                                            | Target | Informazioni                        |
| ------------------------------------------------------ | ------ | ----------------------------------- |
| [`@ZenProperty`](/Dev_Area/ZenAnnotations/ZenMembers/) | Campo  | Combina `@ZenSetter` e `@ZenGetter` |