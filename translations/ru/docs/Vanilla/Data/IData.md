# IData

Интерфейс IData &mdash; обобщающий интерфейс для обработки данных вроде NBT.  
Вы можете приводить его ко всем примитивам (short, double, string, int, ...) так же, как и определенные массивы к IData.  
Помните, что даже если они предлагают аналогичные функции, IData и его составляющие &mdash; не одно и то же, и поэтому они будут обозначаться как Data<тип> (например, DataBool).

## Импорт пакета

Может потребоваться импортировать пакет, если вы обнаруживаете какие-либо проблемы (вроде приведения типа [массива](/AdvancedFunctions/Arrays_and_Loops/)), поэтому в качестве меры предосторожности лучше добавить импорт:  
`import crafttweaker.data.IData;`

## Обзор

| Двоичные операторы                | `+` | `-` | `*` | `/` | `%` | `&` | `|` | `^` | `in` | `==` | `<, >, <=, >=` |
| --------------------------------- | --- | --- | --- | --- | --- | ------- | --- | --- | ---- | ---- | -------------------------- |
| DataBool                          | ✘   | ✘   | ✘   | ✘   | ✘   | ✔       | ✔   | ✔   | ✔    | ✔    | ✘                          |
| DataByte                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataByte[]                        | ✘   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataDouble                        | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |
| DataFloat                         | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |
| DataInt                           | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataInt[]                         | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataList                          | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataLong                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| [DataMap](/Vanilla/Data/DataMap/) | ✔   | ✔   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataShort                         | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataString                        | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |

| Одиночные операторы               | `-` отрицать | `!` не |
| --------------------------------- | ------------ | ------ |
| DataBool                          | ✘            | ✔      |
| DataByte                          | ✔            | ✔      |
| DataByte[]                        | ✘            | ✘      |
| DataDouble                        | ✔            | ✘      |
| DataFloat                         | ✔            | ✘      |
| DataInt                           | ✔            | ✔      |
| DataInt[]                         | ✘            | ✘      |
| DataList                          | ✘            | ✘      |
| DataLong                          | ✔            | ✔      |
| [DataMap](/Vanilla/Data/DataMap/) | ✘            | ✘      |
| DataShort                         | ✔            | ✔      |
| DataString                        | ✘            | ✘      |

| Индекс и участники                | `[i]` | `[i]=v` | `.member` | `.member=v` | `.длина`       | `.immutable` | `.update` |
| --------------------------------- | ----- | ------- | --------- | ----------- | -------------- | ------------ | --------- |
| DataBool                          | ✘     | ✘       | ✘         | ✘           | возвращает `0` | ✔            | ✔         |
| DataByte                          | ✘     | ✘       | ✘         | ✘           | возвращает `0` | ✔            | ✔         |
| DataByte[]                        | ✔     | ✔       | ✘         | ✘           | ✔              | ✔            | ✔         |
| DataDouble                        | ✘     | ✘       | ✘         | ✘           | возвращает `0` | ✔            | ✔         |
| DataFloat                         | ✘     | ✘       | ✘         | ✘           | возвращает `0` | ✔            | ✔         |
| DataInt                           | ✘     | ✘       | ✘         | ✘           | возвращает `0` | ✔            | ✔         |
| DataInt[]                         | ✔     | ✔       | ✘         | ✘           | ✔              | ✔            | ✔         |
| DataList                          | ✔     | ✔       | ✘         | ✘           | ✔              | ✔            | ✔         |
| DataLong                          | ✘     | ✘       | ✘         | ✘           | возвращает `0` | ✔            | ✔         |
| [DataMap](/Vanilla/Data/DataMap/) | ✘     | ✘       | ✔         | ✔           | ✔              | ✔            | ✔         |
| DataShort                         | ✘     | ✘       | ✘         | ✘           | возвращает `0` | ✔            | ✔         |
| DataString                        | ✔     | ✘       | ✘         | ✘           | ✔              | ✔            | ✔         |

Вы можете передать IData конкретному типу с помощью `data.asType()` → `данных. sInt();`  
Также вы можете использовать интерфейс IData для преобразования типов: `("1" как IData).asInt();`

<table>
  <tr>
    <th>
      Заказы от <unk> to →
    </th>
    
    <th>
      bool
    </th>
    
    <th>
      byte
    </th>
    
    <th>
      байт[]
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
      int[]
    </th>
    
    <th>
      список
    </th>
    
    <th>
      long
    </th>
    
    <th>
      <a href="/AdvancedFunctions/Associative_Arrays/">Карта</a>
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
      DataDouble
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
      DataLong
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