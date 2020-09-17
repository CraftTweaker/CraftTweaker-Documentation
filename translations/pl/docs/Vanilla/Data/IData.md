# IData

Interfejs IData jest ogólnym interfejsem do obsługi danych takich jak NBT.  
Możesz rzucić o wszystkich prymitywach (krótki, podwójny, string, int, ...) oraz o niektórych tablicach do IData.  
Pamiętaj, że oferują podobne funkcje, IDane i ich odpowiedniki nie są takie same, dlatego też będą określane jako Typy Danych (e. . DataBool).

## Importowanie pakietu

Może być wymagane zaimportowanie pakietu, jeśli napotkasz jakiekolwiek problemy (takie jak przesyłanie [Array](/AdvancedFunctions/Arrays_and_Loops/)), tak aby były bezpieczne niż przepraszamy i dodaj import.  
`zaimportuj crafttweaker.data.IData;`

## Przegląd

| Operatorzy binarni                | `+` | `-` | `*` | `/` | `%` | `&` | `|` | `^` | `w` | `==` | `<, >, <=, >=` |
| --------------------------------- | --- | --- | --- | --- | --- | ------- | --- | --- | --- | ---- | -------------------------- |
| DataBool                          | ✘   | ✘   | ✘   | ✘   | ✘   | ✔       | ✔   | ✔   | ✔   | ✔    | ✘                          |
| DataByte                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔   | ✔    | ✔                          |
| DataByte[]                        | ✘   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔   | ✔    | ✘                          |
| Podwójne Danych                   | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔   | ✔    | ✔                          |
| Zmienna Danych                    | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔   | ✔    | ✔                          |
| Data Int                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔   | ✔    | ✔                          |
| DataInt[]                         | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔   | ✔    | ✘                          |
| DataList                          | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔   | ✔    | ✘                          |
| Dłuższe Danych                    | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔   | ✔    | ✔                          |
| [DataMap](/Vanilla/Data/DataMap/) | ✔   | ✔   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔   | ✔    | ✘                          |
| DataShort                         | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔   | ✔    | ✔                          |
| DataString                        | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔   | ✔    | ✔                          |

| Unary Oparatory                   | `-` neguj | `!` nie |
| --------------------------------- | --------- | ------- |
| DataBool                          | ✘         | ✔       |
| DataByte                          | ✔         | ✔       |
| DataByte[]                        | ✘         | ✘       |
| Podwójne Danych                   | ✔         | ✘       |
| Zmienna Danych                    | ✔         | ✘       |
| Data Int                          | ✔         | ✔       |
| DataInt[]                         | ✘         | ✘       |
| DataList                          | ✘         | ✘       |
| Dłuższe Danych                    | ✔         | ✔       |
| [DataMap](/Vanilla/Data/DataMap/) | ✘         | ✘       |
| DataShort                         | ✔         | ✔       |
| DataString                        | ✘         | ✘       |

| Indeks i członkowie               | `[i]` | `[i]=v` | `Członek` | `.member=v` | `Długość`  | `.immutable` | `.update(v)` |
| --------------------------------- | ----- | ------- | --------- | ----------- | ---------- | ------------ | ------------ |
| DataBool                          | ✘     | ✘       | ✘         | ✘           | zwraca `0` | ✔            | ✔            |
| DataByte                          | ✘     | ✘       | ✘         | ✘           | zwraca `0` | ✔            | ✔            |
| DataByte[]                        | ✔     | ✔       | ✘         | ✘           | ✔          | ✔            | ✔            |
| Podwójne Danych                   | ✘     | ✘       | ✘         | ✘           | zwraca `0` | ✔            | ✔            |
| Zmienna Danych                    | ✘     | ✘       | ✘         | ✘           | zwraca `0` | ✔            | ✔            |
| Data Int                          | ✘     | ✘       | ✘         | ✘           | zwraca `0` | ✔            | ✔            |
| DataInt[]                         | ✔     | ✔       | ✘         | ✘           | ✔          | ✔            | ✔            |
| DataList                          | ✔     | ✔       | ✘         | ✘           | ✔          | ✔            | ✔            |
| Dłuższe Danych                    | ✘     | ✘       | ✘         | ✘           | zwraca `0` | ✔            | ✔            |
| [DataMap](/Vanilla/Data/DataMap/) | ✘     | ✘       | ✔         | ✔           | ✔          | ✔            | ✔            |
| DataShort                         | ✘     | ✘       | ✘         | ✘           | zwraca `0` | ✔            | ✔            |
| DataString                        | ✔     | ✘       | ✘         | ✘           | ✔          | ✔            | ✔            |

Możesz przesyłać IData do określonego typu za pomocą danych `data.asType()` → `. sInt();`  
Możesz również użyć interfejsu IData do konwertowania typów: `("1" jako IData).asInt();`

| Zamienia od ↓ do →                | bool | bajt | bajt[] | podwójne | zmiennoprzecinkowe | odcień | int[]  | lista  | długie | [Mapa](/AdvancedFunctions/Associative_Arrays/) | krótki | ciąg znaków |
| --------------------------------- | ---- | ---- | ------ | -------- | ------------------ | ------ | ------ | ------ | ------ | ---------------------------------------------- | ------ | ----------- |
| DataBool                          | `≡`  | ✔    | `null` | ✔        | ✔                  | ✔      | `null` | `null` | ✔      | `null`                                         | ✔      | ✔           |
| DataByte                          | ✘    | `≡`  | `null` | ✔        | ✔                  | ✔      | `null` | `null` | ✔      | `null`                                         | ✔      | ✔           |
| DataByte[]                        | ✘    | ✘    | `≡`    | ✘        | ✘                  | ✘      | ✔      | ✔      | ✘      | `null`                                         | ✘      | ✔           |
| Podwójne Danych                   | ✘    | ✔    | `null` | `≡`      | ✔                  | ✔      | `null` | `null` | ✔      | `null`                                         | ✔      | ✔           |
| Zmienna Danych                    | ✘    | ✔    | `null` | ✔        | `≡`                | ✔      | `null` | `null` | ✔      | `null`                                         | ✔      | ✔           |
| Data Int                          | ✘    | ✔    | `null` | ✔        | ✔                  | `≡`    | `null` | `null` | ✔      | `null`                                         | ✔      | ✔           |
| DataInt[]                         | ✘    | ✘    | ✔      | ✘        | ✘                  | ✘      | `≡`    | ✔      | ✘      | `null`                                         | ✘      | ✔           |
| DataList                          | ✘    | ✘    | ✔      | ✘        | ✘                  | ✘      | ✔      | `≡`    | ✘      | `null`                                         | ✘      | ✔           |
| Dłuższe Danych                    | ✘    | ✔    | `null` | ✔        | ✔                  | ✔      | `null` | `null` | `≡`    | `null`                                         | ✔      | ✔           |
| [DataMap](/Vanilla/Data/DataMap/) | ✘    | ✘    | `null` | ✘        | ✘                  | ✘      | `null` | `null` | ✘      | `≡`                                            | ✘      | ✔           |
| DataShort                         | ✘    | ✔    | `null` | ✔        | ✔                  | ✔      | `null` | `null` | ✔      | `null`                                         | `≡`    | ✔           |
| DataString                        | ✘    | ✔    | `null` | ✔        | ✔                  | ✔      | `null` | `null` | ✔      | `null`                                         | ✔      | `≡`         |