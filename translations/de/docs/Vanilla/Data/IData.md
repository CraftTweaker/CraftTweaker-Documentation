# IData

Die IData Schnittstelle ist eine generische Schnittstelle für den Umgang mit Daten wie NBT.  
Sie können alle Primitive (kurze, doppelte, string, int, ...) sowie bestimmte Arrays auf IData übertragen.  
Denken Sie daran, dass, während sie ähnliche Funktionen bieten, IData und ihre Gegenstücke sind NICHT dieselbe, weshalb sie als DataTypen bezeichnet werden (z. . DataBool).

## Dieses Paket importieren

Möglicherweise ist es erforderlich, dass Sie das Paket importieren, wenn Sie irgendwelche Probleme haben (z.B. [Array](/AdvancedFunctions/Arrays_and_Loops/)), also besser sicher sein als bedauern und fügen Sie den Import.  
`importiere crafttweaker.data.IData;`

## Übersicht

| Binäre Operatoren                 | `+` | `-` | `*` | `/` | `%` | `&` | `|` | `^` | `in` | `==` | `<, >, <=, >=` |
| --------------------------------- | --- | --- | --- | --- | --- | ------- | --- | --- | ---- | ---- | -------------------------- |
| DataBool                          | ✘   | ✘   | ✘   | ✘   | ✘   | ✔       | ✔   | ✔   | ✔    | ✔    | ✘                          |
| DataByte                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataByte[]                        | ✘   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DatenDouble                       | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |
| DataFloat                         | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |
| DataInt                           | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataInt[]                         | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataList                          | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataLang                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| [DataMap](/Vanilla/Data/DataMap/) | ✔   | ✔   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataShort                         | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataString                        | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |

| Unary Oparatoren                  | `-` negieren | `!` nicht |
| --------------------------------- | ------------ | --------- |
| DataBool                          | ✘            | ✔         |
| DataByte                          | ✔            | ✔         |
| DataByte[]                        | ✘            | ✘         |
| DatenDouble                       | ✔            | ✘         |
| DataFloat                         | ✔            | ✘         |
| DataInt                           | ✔            | ✔         |
| DataInt[]                         | ✘            | ✘         |
| DataList                          | ✘            | ✘         |
| DataLang                          | ✔            | ✔         |
| [DataMap](/Vanilla/Data/DataMap/) | ✘            | ✘         |
| DataShort                         | ✔            | ✔         |
| DataString                        | ✘            | ✘         |

| Index und Mitglieder              | `[i]` | `[i]=v` | `.Mitglied` | `.member=v` | `.Länge`        | `.unveränderbar` | `.update(v)` |
| --------------------------------- | ----- | ------- | ----------- | ----------- | --------------- | ---------------- | ------------ |
| DataBool                          | ✘     | ✘       | ✘           | ✘           | gibt `0` zurück | ✔                | ✔            |
| DataByte                          | ✘     | ✘       | ✘           | ✘           | gibt `0` zurück | ✔                | ✔            |
| DataByte[]                        | ✔     | ✔       | ✘           | ✘           | ✔               | ✔                | ✔            |
| DatenDouble                       | ✘     | ✘       | ✘           | ✘           | gibt `0` zurück | ✔                | ✔            |
| DataFloat                         | ✘     | ✘       | ✘           | ✘           | gibt `0` zurück | ✔                | ✔            |
| DataInt                           | ✘     | ✘       | ✘           | ✘           | gibt `0` zurück | ✔                | ✔            |
| DataInt[]                         | ✔     | ✔       | ✘           | ✘           | ✔               | ✔                | ✔            |
| DataList                          | ✔     | ✔       | ✘           | ✘           | ✔               | ✔                | ✔            |
| DataLang                          | ✘     | ✘       | ✘           | ✘           | gibt `0` zurück | ✔                | ✔            |
| [DataMap](/Vanilla/Data/DataMap/) | ✘     | ✘       | ✔           | ✔           | ✔               | ✔                | ✔            |
| DataShort                         | ✘     | ✘       | ✘           | ✘           | gibt `0` zurück | ✔                | ✔            |
| DataString                        | ✔     | ✘       | ✘           | ✘           | ✔               | ✔                | ✔            |

Sie können IData zu einem bestimmten Typ mit `data.asType()` → `Daten übertragen. sInt();`  
Sie können auch die IData Schnittstelle verwenden, um Typen zu konvertieren: `("1" as IData).asInt();`

<table>
  <tr>
    <th>
      Casts von <unk> bis →
    </th>
    
    <th>
      bool
    </th>
    
    <th>
      byte
    </th>
    
    <th>
      byte[]
    </th>
    
    <th>
      double
    </th>
    
    <th>
      float
    </th>
    
    <th>
      int
    </th>
    
    <th>
      in[]
    </th>
    
    <th>
      liste
    </th>
    
    <th>
      long
    </th>
    
    <th>
      <a href="/AdvancedFunctions/Associative_Arrays/">Karte</a>
    </th>
    
    <th>
      short
    </th>
    
    <th>
      string
    </th>
  </tr>
  
  <tr>
    <td>
      DataBool
    </td>
    
    <td>
      <code>≡</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
  </tr>
  
  <tr>
    <td>
      DataByte
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      <code>≡</code>
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
  </tr>
  
  <tr>
    <td>
      DataByte[]
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      <code>≡</code>
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✔
    </td>
  </tr>
  
  <tr>
    <td>
      DatenDouble
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      <code>≡</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
  </tr>
  
  <tr>
    <td>
      DataFloat
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>≡</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
  </tr>
  
  <tr>
    <td>
      DataInt
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>≡</code>
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
  </tr>
  
  <tr>
    <td>
      DataInt[]
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      <code>≡</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✔
    </td>
  </tr>
  
  <tr>
    <td>
      DataList
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>≡</code>
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✔
    </td>
  </tr>
  
  <tr>
    <td>
      DataLang
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      <code>≡</code>
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
  </tr>
  
  <tr>
    <td>
      <a href="/Vanilla/Data/DataMap/">DataMap</a>
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      <code>≡</code>
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✔
    </td>
  </tr>
  
  <tr>
    <td>
      DataShort
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      <code>≡</code>
    </td>
    
    <td>
      ✔
    </td>
  </tr>
  
  <tr>
    <td>
      DataString
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>null</code>
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      <code>≡</code>
    </td>
  </tr>
</table>