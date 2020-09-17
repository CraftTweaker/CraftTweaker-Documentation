# IData

L'interface IData est une interface générique pour gérer les données comme NBT.  
Vous pouvez lancer sur toutes les primitives (courte, double, chaîne, int, ...) ainsi que sur certaines tables à IData.  
N'oubliez pas que, bien qu'ils offrent des fonctionnalités similaires, IData et leurs homologues ne sont PAS les mêmes, c'est pourquoi ils seront appelés types de données (e. . Bol de données).

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.data.IData ;`

## Aperçu

| Opérateurs binaires               | `+` | `-` | `*` | `/` | `%` | `&` | `|` | `^` | `dans` | `==` | `<, >, <=, >=` |
| --------------------------------- | --- | --- | --- | --- | --- | ------- | --- | --- | ------ | ---- | -------------------------- |
| DataBool                          | ✘   | ✘   | ✘   | ✘   | ✘   | ✔       | ✔   | ✔   | ✔      | ✔    | ✘                          |
| DataByte                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔      | ✔    | ✔                          |
| DataByte[]                        | ✘   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔      | ✔    | ✘                          |
| Doublure de données               | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔      | ✔    | ✔                          |
| DonnéesFloat                      | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔      | ✔    | ✔                          |
| DonnéesInt                        | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔      | ✔    | ✔                          |
| DataInt[]                         | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔      | ✔    | ✘                          |
| DataList                          | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔      | ✔    | ✘                          |
| Données longues                   | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔      | ✔    | ✔                          |
| [DataMap](/Vanilla/Data/DataMap/) | ✔   | ✔   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔      | ✔    | ✘                          |
| DataShort                         | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔      | ✔    | ✔                          |
| DataString                        | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔      | ✔    | ✔                          |

| Oparateurs unitaires              | `-` annuler | `!` pas |
| --------------------------------- | ----------- | ------- |
| DataBool                          | ✘           | ✔       |
| DataByte                          | ✔           | ✔       |
| DataByte[]                        | ✘           | ✘       |
| Doublure de données               | ✔           | ✘       |
| DonnéesFloat                      | ✔           | ✘       |
| DonnéesInt                        | ✔           | ✔       |
| DataInt[]                         | ✘           | ✘       |
| DataList                          | ✘           | ✘       |
| Données longues                   | ✔           | ✔       |
| [DataMap](/Vanilla/Data/DataMap/) | ✘           | ✘       |
| DataShort                         | ✔           | ✔       |
| DataString                        | ✘           | ✘       |

| Index et Membres                  | `[i]` | `[i]=v` | `Membre` | `.membre=v` | `.longueur` | `.immuable` | `.update(v)` |
| --------------------------------- | ----- | ------- | -------- | ----------- | ----------- | ----------- | ------------ |
| DataBool                          | ✘     | ✘       | ✘        | ✘           | renvoie `0` | ✔           | ✔            |
| DataByte                          | ✘     | ✘       | ✘        | ✘           | renvoie `0` | ✔           | ✔            |
| DataByte[]                        | ✔     | ✔       | ✘        | ✘           | ✔           | ✔           | ✔            |
| Doublure de données               | ✘     | ✘       | ✘        | ✘           | renvoie `0` | ✔           | ✔            |
| DonnéesFloat                      | ✘     | ✘       | ✘        | ✘           | renvoie `0` | ✔           | ✔            |
| DonnéesInt                        | ✘     | ✘       | ✘        | ✘           | renvoie `0` | ✔           | ✔            |
| DataInt[]                         | ✔     | ✔       | ✘        | ✘           | ✔           | ✔           | ✔            |
| DataList                          | ✔     | ✔       | ✘        | ✘           | ✔           | ✔           | ✔            |
| Données longues                   | ✘     | ✘       | ✘        | ✘           | renvoie `0` | ✔           | ✔            |
| [DataMap](/Vanilla/Data/DataMap/) | ✘     | ✘       | ✔        | ✔           | ✔           | ✔           | ✔            |
| DataShort                         | ✘     | ✘       | ✘        | ✘           | renvoie `0` | ✔           | ✔            |
| DataString                        | ✔     | ✘       | ✘        | ✘           | ✔           | ✔           | ✔            |

Vous pouvez convertir IData à un type spécifique en utilisant `data.asType()` → `données. sInt();`  
Vous pouvez également utiliser l'interface IData pour convertir les types : `("1" as IData).asInt();`

| Casting de Increases à →          | booléen | octet | octet[] | double | flottant | Indice | int[]  | liste  | long | [Carte](/AdvancedFunctions/Associative_Arrays/) | court | chaîne de caractères |
| --------------------------------- | ------- | ----- | ------- | ------ | -------- | ------ | ------ | ------ | ---- | ----------------------------------------------- | ----- | -------------------- |
| DataBool                          | `≡`     | ✔     | `null`  | ✔      | ✔        | ✔      | `null` | `null` | ✔    | `null`                                          | ✔     | ✔                    |
| DataByte                          | ✘       | `≡`   | `null`  | ✔      | ✔        | ✔      | `null` | `null` | ✔    | `null`                                          | ✔     | ✔                    |
| DataByte[]                        | ✘       | ✘     | `≡`     | ✘      | ✘        | ✘      | ✔      | ✔      | ✘    | `null`                                          | ✘     | ✔                    |
| Doublure de données               | ✘       | ✔     | `null`  | `≡`    | ✔        | ✔      | `null` | `null` | ✔    | `null`                                          | ✔     | ✔                    |
| DonnéesFloat                      | ✘       | ✔     | `null`  | ✔      | `≡`      | ✔      | `null` | `null` | ✔    | `null`                                          | ✔     | ✔                    |
| DonnéesInt                        | ✘       | ✔     | `null`  | ✔      | ✔        | `≡`    | `null` | `null` | ✔    | `null`                                          | ✔     | ✔                    |
| DataInt[]                         | ✘       | ✘     | ✔       | ✘      | ✘        | ✘      | `≡`    | ✔      | ✘    | `null`                                          | ✘     | ✔                    |
| DataList                          | ✘       | ✘     | ✔       | ✘      | ✘        | ✘      | ✔      | `≡`    | ✘    | `null`                                          | ✘     | ✔                    |
| Données longues                   | ✘       | ✔     | `null`  | ✔      | ✔        | ✔      | `null` | `null` | `≡`  | `null`                                          | ✔     | ✔                    |
| [DataMap](/Vanilla/Data/DataMap/) | ✘       | ✘     | `null`  | ✘      | ✘        | ✘      | `null` | `null` | ✘    | `≡`                                             | ✘     | ✔                    |
| DataShort                         | ✘       | ✔     | `null`  | ✔      | ✔        | ✔      | `null` | `null` | ✔    | `null`                                          | `≡`   | ✔                    |
| DataString                        | ✘       | ✔     | `null`  | ✔      | ✔        | ✔      | `null` | `null` | ✔    | `null`                                          | ✔     | `≡`                  |