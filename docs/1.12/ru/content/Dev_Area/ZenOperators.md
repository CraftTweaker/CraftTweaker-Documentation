# Операторы ZenScript

Аннотация [`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/).

| Оператор     | Соответствующий токен                   | Присваивающий токен/альтернативный токен/дополнительная информация            |
| ------------ | --------------------------------------- | ----------------------------------------------------------------------------- |
| ADD          | `+`                                     | `+=`                                                                          |
| SUB          | `-`                                     | `-=`                                                                          |
| MUL          | `*`                                     | `*=`                                                                          |
| DIV          | `/`                                     | `/=`                                                                          |
| MOD          | `%`                                     | `%=`                                                                          |
| CAT          | `~`                                     | `~=`                                                                          |
| OR           | `|`                                     | `|=`                                                                          |
| AND          | `&`                                 | `&=`                                                                      |
| XOR          | `^`                                     | `^=`                                                                          |
| NEG          | `-`                                     |                                                                               |
| NOT          | `!`                                     |                                                                               |
| INDEXSET     | `[i] = v`                               |                                                                               |
| INDEXGET     | `[i]`                                   |                                                                               |
| RANGE        | `i .. v`                                | `i to v`                                                                      |
| CONTAINS     | `in`                                    | `has`                                                                         |
| COMPARE      | `==` `<` `>` `<=` `>=` `!=` | Помеченный метод должен возвращать целое число! (Так же, как Integer.compare) |
| MEMBERGETTER | `.member`                               | То же, что и [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)       |
| MEMBERSETTER | `.member = v`                           |                                                                               |
| EQUALS       | `=`                                     |                                                                               |