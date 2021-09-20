# Операторы ZenScript

Аннотация [`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/).

| ZenOperator         | Соответствующий токен                   | Присваивающий токен/альтернативный токен/дополнительная информация            |
| ------------------- | --------------------------------------- | ----------------------------------------------------------------------------- |
| ADD                 | `+`                                     | `+=`                                                                          |
| SUB                 | `-`                                     | `-=`                                                                          |
| MUL                 | `*`                                     | `*=`                                                                          |
| DIV                 | `/`                                     | `/=`                                                                          |
| MOD                 | `%`                                     | `%=`                                                                          |
| CAT                 | `~`                                     | `~=`                                                                          |
| OR (ODER)           | `|`                                     | `|=`                                                                          |
| AND (UND)           | `&`                                 | `&=`                                                                      |
| XOR (Exklusiv-ODER) | `^`                                     | `^=`                                                                          |
| NEG                 | `-`                                     |                                                                               |
| NOT                 | `!`                                     |                                                                               |
| INDEXSET            | `[i] = v`                               |                                                                               |
| INDEXGET            | `[i]`                                   |                                                                               |
| RANGE               | `i .. v`                                | `i to v`                                                                      |
| CONTAINS            | `in`                                    | `has`                                                                         |
| COMPARE             | `==` `<` `>` `<=` `>=` `!=` | Помеченный метод должен возвращать целое число! (Так же, как Integer.compare) |
| MEMBERGETTER        | `.member`                               | То же, что и [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)       |
| MEMBERSETTER        | `.member = v`                           |                                                                               |
| EQUALS              | `=`                                     |                                                                               |