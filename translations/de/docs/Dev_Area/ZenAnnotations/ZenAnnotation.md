# Zennotation

Eine ZenAnmerkung kann einer Klasse oder ihren Methoden gegeben werden, um sie ZenScript zu entlarven

## Klassenanmerkungen

Diese Anmerkungen können ZenClasses gegeben werden

| Anmerkung                                                                | Wert                                                                                                         | Target | Informationen                                                                                        |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ | ------ | ---------------------------------------------------------------------------------------------------- |
| [`@ZenClass`](/Dev_Area/ZenAnnotations/Annotation_ZenClass/)             | ZenKlassenname (z.B. `crafttweaker.item.IItemStack`), kann sich vom formalen Namen der Klasse unterscheiden. | Klasse | Name muss eindeutig sein                                                                             |
| [`@ZenExpansion`](/Dev_Area/ZenAnnotations/Annotation_ZenExpansion/)     | Erweiterter ZenType Name (z.B. `crafttweaker.item.IItemStack`)                                               | Klasse | Name muss bereits existieren (du kannst etwas nicht erweitern)                                       |
| [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/)       |                                                                                                              | Klasse | Wird verwendet, um die Klasse oder Erweiterung automatisch zu registrieren                           |
| [`@IterableList`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)         | ZenKlassenname des Iterbaren Typs (z.B. `crafttweaker.IMod`)                                                 | Klasse | Klasse muss `Iterable<Type>zugewiesen werden`                                                  |
| [`@IterableMap`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)          | ZenClass Name des Iterable Key und Wert Typs (z.B. `string`, `crafttweaker.item.IItemStack`)                 | Klasse | Klasse muss der `Liste zugewiesen werden<Type>`                                                |
| [`@IterableSimple`](/Dev_Area/ZenAnnotations/Annotation_Iterable/)       | ZenKlassenname des Iterbaren Typs (z.B. `crafttweaker.IMod`)                                                 | Klasse | Klasse muss auf `Karte<KeyType, ValueType>zugewiesen werden`                                   |
| [`@BracketHandler`](/Dev_Area/ZenAnnotations/Annotation_BracketHandler/) | Klammer-Handler-Priorität (z.B. `Priorität = 19`)                                                            | Klasse | Klasse muss `IBracketHandler` zugewiesen werden können                                               |
| [`@ModOnly`](/Dev_Area/ZenAnnotations/Annotation_ModOnly/)               | Benötigter Mod's Name (`isModLoaded(annotation.getValue())` muss zur Wahrheitsgetreue alteren)               | Klasse | Wird in Kombination mit [`@ZenRegister`](/Dev_Area/ZenAnnotations/Annotation_ZenRegister/) verwendet |

## Parameterkommentare

Diese Anmerkungen können den Methodenparametern gegeben werden

| Anmerkung                                                    | Target    | Informationen                                                                                                |
| ------------------------------------------------------------ | --------- | ------------------------------------------------------------------------------------------------------------ |
| `@NotNull`                                                   | Parameter | Macht nichts (NYI)                                                                                           |
| [`@Optional`](/Dev_Area/ZenAnnotations/Annotation_Optional/) | Parameter | Benennt einen Parameter als optional. Optionale Parameter können beim Aufruf der Funktion weggelassen werden |

## Annotationen der Methode

Diese Anmerkungen können Methoden gegeben werden (sowohl statisch als auch nichtstatisch)

| Anmerkung                                                                  | Wert                                                                                 | Target  |
| -------------------------------------------------------------------------- | ------------------------------------------------------------------------------------ | ------- |
| [`@ZenCaster`](/Dev_Area/ZenAnnotations/Annotation_ZenCaster/)             |                                                                                      | Methode |
| [`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/)         | [Operatortyp](/Dev_Area/ZenOperators/)                                               | Methode |
| [`@ZenGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | getter-Name (z.B. "Name"), wenn weggelassen, wird der Methodenname ohne () verwendet | Methode |
| [`@ZenSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                       | setter name (z.B. "name"), wenn weggelassen, wird der Methodenname ohne () verwendet | Methode |
| [`@ZenMemberGetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                                                      | Methode |
| [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)                 |                                                                                      | Methode |
| [`@ZenMethod`](/Dev_Area/ZenAnnotations/Annotation_ZenMethod/)             |                                                                                      | Methode |
| [`@ZenMethodStatic`](/Dev_Area/ZenAnnotations/Annotation_ZenMethodStatic/) |                                                                                      | Methode |
| [`@ZenDoc`](/Dev_Area/ZenAnnotations/Annotation_ZenDoc/)                   | Die zusätzliche Methodeninfo für `dumpZS`                                            | Methode |

## Feldkommentare

Diese Anmerkungen können öffentlichen Feldern gegeben werden (sowohl statisch als auch nichtstatisch)

| Anmerkung                                              | Target | Informationen                            |
| ------------------------------------------------------ | ------ | ---------------------------------------- |
| [`@ZenProperty`](/Dev_Area/ZenAnnotations/ZenMembers/) | Feld   | Kombiniert `@ZenSetter` und `@ZenGetter` |