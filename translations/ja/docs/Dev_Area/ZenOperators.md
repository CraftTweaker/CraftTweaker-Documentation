# ZenOperators

[`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/) Annotation

| ZenOperator  | 関連トークン                                  | TokenAssign / Alternate Token/Additional Info                  |
| ------------ | --------------------------------------- | -------------------------------------------------------------- |
| 追加           | `+`                                     | `+=`                                                           |
| SUB          | `-`                                     | `-=`                                                           |
| MUL          | `*`                                     | `*=`                                                           |
| DIV          | `/`                                     | `/=`                                                           |
| MOD          | `%`                                     | `%=`                                                           |
| CAT(CAT)     | `~`                                     | `~=`                                                           |
| OR           | `|`                                     | `|=`                                                           |
| AND          | `&`                                 | `&=`                                                       |
| XOR          | `^`                                     | `^=`                                                           |
| NEG          | `-`                                     |                                                                |
| NOT          | `!`                                     |                                                                |
| INDEXSET     | `[i] = v`                               |                                                                |
| インデックス取得     | `[i]`                                   |                                                                |
| RANGE        | `私は... v`                               | `私はvに...`                                                      |
| CONTANS      | `in`                                    | `has`                                                          |
| Compare      | `==` `<` `>` `<=` `>=` `!=` | 注釈メソッドはintを返す必要があります！ (Integer.compareと同じ)                     |
| MEMBERGETTER | `.member`                               | [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/) と同じ |
| MEMBERSETTER | `.member = v`                           |                                                                |
| EQUALS       | `=`                                     |                                                                |