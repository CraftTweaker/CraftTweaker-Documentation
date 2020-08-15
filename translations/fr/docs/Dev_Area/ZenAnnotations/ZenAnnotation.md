# Annotation Zen

Une annotation ZenAnnotation peut être donnée à une classe ou à ses méthodes pour l'exposer à ZenScript

## Annotations de classe

Ces annotations peuvent être données aux ZenClasses

| Annotation                                                               | Valeur                                                                                                 | Target | Information                                                                                    |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------ | ---------------------------------------------------------------------------------------------- |
| [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/)             | Nom de ZenClass (par exemple `crafttweaker.item.IItemStack`), peut différer du nom formel de la classe | Classe | Le nom doit être unique                                                                        |
| [`Expansion de Zen`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/)  | Nom ZenType élargi (par exemple `crafttweaker.item.IItemStack`)                                        | Classe | Le nom doit déjà exister (vous ne pouvez pas étendre quelque chose inexistant)                 |
| [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/)       |                                                                                                        | Classe | Utilisé pour enregistrer automatiquement la classe ou l'extension                              |
| [`@IterableList`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)         | Nom ZenClass du type Iterable (par exemple `crafttweaker.mods.IMod`)                                   | Classe | La classe doit être assignable à `Iterable<Type>`                                        |
| [`@IterableMap`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)          | Nom ZenClass de la clé itérable et de la valeur Type (par exemple `string`, `crafttweaker.IItemStack`) | Classe | La classe doit être assignable à la `liste<Type>`                                        |
| [`@IterableSimple`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)       | Nom ZenClass du type Iterable (par exemple `crafttweaker.mods.IMod`)                                   | Classe | La classe doit être assignable à `Map<KeyType, ValueType>`                               |
| [`@BracketHandler`](/Dev_Area/ZenAnnotations/Annotation_BracketHandler/) | Priorité de gestion des accolades (par exemple `priorité = 19`)                                        | Classe | La classe doit être assignable à `IBracketHandler`                                             |
| [`@ModOnly`](/Dev_Area/ZenAnnotations/Annotation_ModOnly/)               | Le nom du mod requis (`isModLoaded(annotation.getValue())` doit être eval pour vrai)                   | Classe | Utilisé en combinaison avec [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) |

## Annotations des paramètres

Ces annotations peuvent être données aux paramètres de la méthode

| Annotation                                                    | Target    | Information                                                                                                      |
| ------------------------------------------------------------- | --------- | ---------------------------------------------------------------------------------------------------------------- |
| `@NotNull`                                                    | Paramètre | Ne fait rien (NYI)                                                                                               |
| [`@Optionnel`](/Dev_Area/ZenAnnotations/Annotation_Optional/) | Paramètre | Indique un paramètre comme optionnel. Les paramètres optionnels peuvent être omis lors de l'appel de la fonction |

## Annotations de méthode

Ces annotations peuvent être données aux Méthodes (statiques et non statiques)

| Annotation                                                                 | Valeur                                                                                | Target  |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------- | ------- |
| [`@ZenCaster`](/Dev_Area/ZenAnnotations/Annotation_ZenCaster/)             |                                                                                       | Méthode |
| [`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/)         | [Type d'opérateur](/Dev_Area/ZenOperators/)                                           | Méthode |
| [`@ZenGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | getter name (e.g. "name") si omis, le nom de la méthode sans () sera utilisé          | Méthode |
| [`@ZenSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | nom du setter (par exemple "name") si omis, le nom de la méthode sans () sera utilisé | Méthode |
| [`@ZenMemberGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                                                       | Méthode |
| [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                                                       | Méthode |
| [`@Méthode Zen`](/Dev_Area/ZenAnnotations/Annotation_ZenMethod/)           |                                                                                       | Méthode |
| [`@ZenMethodStatic`](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/) |                                                                                       | Méthode |
| [`@ZenDoc`](/Dev_Area/ZenAnnotations/Annotation_ZenDoc/)                   | Les informations additionnelles de la méthode pour `dumpZS`                           | Méthode |

## Annotations de champ

Ces annotations peuvent être données aux champs publics (statiques et non statiques)

| Annotation                                              | Target | Information                          |
| ------------------------------------------------------- | ------ | ------------------------------------ |
| [`@Zen Property`](/Dev_Area/ZenAnnotations/ZenMembers/) | Champ  | Combine `@ZenSetter` et `@ZenGetter` |