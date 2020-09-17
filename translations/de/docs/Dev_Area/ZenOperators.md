# Zenoperatoren

[`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/) Annotation

| ZenOperator         | Verknüpftes Token                       | TokenAssign / Alternate Token/Zusätzliche Informationen                     |
| ------------------- | --------------------------------------- | --------------------------------------------------------------------------- |
| ZUD                 | `+`                                     | `+=`                                                                        |
| SUB                 | `-`                                     | `-=`                                                                        |
| MUL                 | `*`                                     | `*=`                                                                        |
| DIV                 | `/`                                     | `/=`                                                                        |
| MOD                 | `%`                                     | `%=`                                                                        |
| CAT                 | `~`                                     | `~=`                                                                        |
| OR (ODER)           | `|`                                     | `|=`                                                                        |
| AND (UND)           | `&`                                 | `&=`                                                                    |
| XOR (Exklusiv-ODER) | `^`                                     | `^=`                                                                        |
| NEG                 | `-`                                     |                                                                             |
| NICHT               | `!`                                     |                                                                             |
| INDEXSET            | `[i] = v`                               |                                                                             |
| INDEXGET            | `[i]`                                   |                                                                             |
| RANGE               | `i .. f`                                | `i bis v`                                                                   |
| BEDINGUNGEN         | `in`                                    | `hat`                                                                       |
| COMPARE             | `==` `<` `>` `<=` `>=` `!=` | Annotierte Methode sollte eine inte zurückgeben! (Name wie Integer.compare) |
| MEMBERGETTER        | `.Mitglied`                             | Wie [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)              |
| MEMBERSETTER        | `.member = v`                           |                                                                             |
| EQUALS              | `=`                                     |                                                                             |