# Opérateurs Zen

[`@ZenOperator`](/Dev_Area/ZenAnnotations/Annotation_ZenOperator/) Annotation

| ZenOperator  | Jeton Associé                           | Attribution de jetons / Jeton alternatif / Informations supplémentaires |
| ------------ | --------------------------------------- | ----------------------------------------------------------------------- |
| AJOUTER      | `+`                                     | `+=`                                                                    |
| SUB          | `-`                                     | `-=`                                                                    |
| MUL          | `*`                                     | `*=`                                                                    |
| DIV          | `/`                                     | `/=`                                                                    |
| MOD          | `%`                                     | `%=`                                                                    |
| ATTENTION    | `~`                                     | `~=`                                                                    |
| OU           | `|`                                     | `|=`                                                                    |
| ET           | `&`                                 | `&=`                                                                |
| XOR          | `^`                                     | `^=`                                                                    |
| NEG          | `-`                                     |                                                                         |
| NON          | `!`                                     |                                                                         |
| INDEXSET     | `[i] = v`                               |                                                                         |
| INDEXGET     | `[i]`                                   |                                                                         |
| RANGE        | `i .. v`                                | `i à v`                                                                 |
| CONTAINS     | `dans`                                  | `a`                                                                     |
| COMMENTAIRE  | `==` `<` `>` `<=` `>=` `!=` | Méthode annotée devrait retourner un int! (Identique à Integer.compare) |
| MEMBERGETTER | `Membre`                                | Même que [`@ZenMemberSetter`](/Dev_Area/ZenAnnotations/ZenMembers/)     |
| MEMBERSETTRE | `.member = v`                           |                                                                         |
| EQUALES      | `=`                                     |                                                                         |