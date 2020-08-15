# IData

L'interfaccia IData è un'interfaccia generica per la gestione dei dati come NBT.  
È possibile lanciare su tutti i primitivi (breve, doppio, stringa, int, ...) così come alcuni array di IData.  
Ricorda che mentre offrono funzionalità simili, Gli IData e le loro controparti NON sono uguali, per questo saranno denominati DataTypes (e. . DataBool).

## Importazione del pacchetto

Potrebbe essere necessario importare il pacchetto se si incontrano problemi (come lanciare un [Array](/AdvancedFunctions/Arrays_and_Loops/)), quindi meglio essere sicuri che spiacenti e aggiungere l'importazione.  
`import crafttweaker.data.IData;`

## Panoramica

| Operatori Binari                  | `+` | `-` | `*` | `/` | `%` | `&` | `|` | `^` | `in` | `==` | `<, >, <=, >=` |
| --------------------------------- | --- | --- | --- | --- | --- | ------- | --- | --- | ---- | ---- | -------------------------- |
| DataBool                          | ✘   | ✘   | ✘   | ✘   | ✘   | ✔       | ✔   | ✔   | ✔    | ✔    | ✘                          |
| DataByte                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataByte[]                        | ✘   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataDoppio                        | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |
| DataFloat                         | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |
| DataInt                           | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataInt[]                         | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataList                          | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataLong                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| [DataMap](/Vanilla/Data/DataMap/) | ✔   | ✔   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataShort                         | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataString                        | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |

| Oparatori Unari                   | `-` nega | `!` non |
| --------------------------------- | -------- | ------- |
| DataBool                          | ✘        | ✔       |
| DataByte                          | ✔        | ✔       |
| DataByte[]                        | ✘        | ✘       |
| DataDoppio                        | ✔        | ✘       |
| DataFloat                         | ✔        | ✘       |
| DataInt                           | ✔        | ✔       |
| DataInt[]                         | ✘        | ✘       |
| DataList                          | ✘        | ✘       |
| DataLong                          | ✔        | ✔       |
| [DataMap](/Vanilla/Data/DataMap/) | ✘        | ✘       |
| DataShort                         | ✔        | ✔       |
| DataString                        | ✘        | ✘       |

| Indice e membri                   | `[i]` | `[i]=v` | `.member` | `.member=v` | `.length`       | `.immutabile` | `.update(v)` |
| --------------------------------- | ----- | ------- | --------- | ----------- | --------------- | ------------- | ------------ |
| DataBool                          | ✘     | ✘       | ✘         | ✘           | restituisce `0` | ✔             | ✔            |
| DataByte                          | ✘     | ✘       | ✘         | ✘           | restituisce `0` | ✔             | ✔            |
| DataByte[]                        | ✔     | ✔       | ✘         | ✘           | ✔               | ✔             | ✔            |
| DataDoppio                        | ✘     | ✘       | ✘         | ✘           | restituisce `0` | ✔             | ✔            |
| DataFloat                         | ✘     | ✘       | ✘         | ✘           | restituisce `0` | ✔             | ✔            |
| DataInt                           | ✘     | ✘       | ✘         | ✘           | restituisce `0` | ✔             | ✔            |
| DataInt[]                         | ✔     | ✔       | ✘         | ✘           | ✔               | ✔             | ✔            |
| DataList                          | ✔     | ✔       | ✘         | ✘           | ✔               | ✔             | ✔            |
| DataLong                          | ✘     | ✘       | ✘         | ✘           | restituisce `0` | ✔             | ✔            |
| [DataMap](/Vanilla/Data/DataMap/) | ✘     | ✘       | ✔         | ✔           | ✔               | ✔             | ✔            |
| DataShort                         | ✘     | ✘       | ✘         | ✘           | restituisce `0` | ✔             | ✔            |
| DataString                        | ✔     | ✘       | ✘         | ✘           | ✔               | ✔             | ✔            |

È possibile convertire IData a un tipo specifico utilizzando i dati `data.asType()` → `. sInt();`  
È anche possibile utilizzare l'interfaccia IData per convertire i tipi: `("1" come IData).asInt();`

| Casts da ↓ a →                    | bool | byte | byte[] | doppia | galleggiante | int | int[]  | elenco | lungo | [Mappa](/AdvancedFunctions/Associative_Arrays/) | breve | stringa |
| --------------------------------- | ---- | ---- | ------ | ------ | ------------ | --- | ------ | ------ | ----- | ----------------------------------------------- | ----- | ------- |
| DataBool                          | `≡`  | ✔    | `null` | ✔      | ✔            | ✔   | `null` | `null` | ✔     | `null`                                          | ✔     | ✔       |
| DataByte                          | ✘    | `≡`  | `null` | ✔      | ✔            | ✔   | `null` | `null` | ✔     | `null`                                          | ✔     | ✔       |
| DataByte[]                        | ✘    | ✘    | `≡`    | ✘      | ✘            | ✘   | ✔      | ✔      | ✘     | `null`                                          | ✘     | ✔       |
| DataDoppio                        | ✘    | ✔    | `null` | `≡`    | ✔            | ✔   | `null` | `null` | ✔     | `null`                                          | ✔     | ✔       |
| DataFloat                         | ✘    | ✔    | `null` | ✔      | `≡`          | ✔   | `null` | `null` | ✔     | `null`                                          | ✔     | ✔       |
| DataInt                           | ✘    | ✔    | `null` | ✔      | ✔            | `≡` | `null` | `null` | ✔     | `null`                                          | ✔     | ✔       |
| DataInt[]                         | ✘    | ✘    | ✔      | ✘      | ✘            | ✘   | `≡`    | ✔      | ✘     | `null`                                          | ✘     | ✔       |
| DataList                          | ✘    | ✘    | ✔      | ✘      | ✘            | ✘   | ✔      | `≡`    | ✘     | `null`                                          | ✘     | ✔       |
| DataLong                          | ✘    | ✔    | `null` | ✔      | ✔            | ✔   | `null` | `null` | `≡`   | `null`                                          | ✔     | ✔       |
| [DataMap](/Vanilla/Data/DataMap/) | ✘    | ✘    | `null` | ✘      | ✘            | ✘   | `null` | `null` | ✘     | `≡`                                             | ✘     | ✔       |
| DataShort                         | ✘    | ✔    | `null` | ✔      | ✔            | ✔   | `null` | `null` | ✔     | `null`                                          | `≡`   | ✔       |
| DataString                        | ✘    | ✔    | `null` | ✔      | ✔            | ✔   | `null` | `null` | ✔     | `null`                                          | ✔     | `≡`     |