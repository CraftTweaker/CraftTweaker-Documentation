# IData

The IData interface is a generic Interface for handling Data like NBT.  
You can cast about all primitives (short, double, string, int, ...) as well as certain arrays to IData.  
Remember that while they offer similar features, IData and their counterparts are NOT the same, which is why they will be referred to as DataTypes (e.g. DataBool).

## パッケージのインポート

It might be required for you to import the package if you encounter any issues (like casting an [Array](/AdvancedFunctions/Arrays_and_Loops/)), so better be safe than sorry and add the import.  
`import crafttweaker.data.IData;`

## 概要

| バイナリ演算子                           | `+` | `-` | `*` | `/` | `%` | `&` | `|` | `^` | `in` | `==` | `<, >, <=, >=` |
| --------------------------------- | --- | --- | --- | --- | --- | ------- | --- | --- | ---- | ---- | -------------------------- |
| DataBool                          | ✘   | ✘   | ✘   | ✘   | ✘   | ✔       | ✔   | ✔   | ✔    | ✔    | ✘                          |
| DataByte                          | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataByte[]                        | ✘   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| データダブル                            | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |
| データ                               | ✔   | ✔   | ✔   | ✔   | ✔   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |
| データ int                           | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataInt[]                         | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataList                          | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| データ長                              | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| [DataMap](/Vanilla/Data/DataMap/) | ✔   | ✔   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✘                          |
| DataShort                         | ✔   | ✔   | ✔   | ✔   | ✔   | ✔       | ✔   | ✔   | ✔    | ✔    | ✔                          |
| DataString                        | ✔   | ✘   | ✘   | ✘   | ✘   | ✘       | ✘   | ✘   | ✔    | ✔    | ✔                          |

<table>
  <tr>
    <th>
      単一の<unk>
    </th>
    
    <th>
      <code>-</code> 否定する
    </th>
    
    <th>
      <code>!</code> ではない
    </th>
  </tr>
  
  <tr>
    <td>
      DataBool
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
      DataByte
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
  </tr>
  
  <tr>
    <td>
      データダブル
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✘
    </td>
  </tr>
  
  <tr>
    <td>
      データ
    </td>
    
    <td>
      ✔
    </td>
    
    <td>
      ✘
    </td>
  </tr>
  
  <tr>
    <td>
      データ int
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
  </tr>
  
  <tr>
    <td>
      データ長
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
  </tr>
  
  <tr>
    <td>
      DataShort
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
      DataString
    </td>
    
    <td>
      ✘
    </td>
    
    <td>
      ✘
    </td>
  </tr>
</table>

| インデックスとメンバー                       | `[i]` | `[i]=v` | `.member` | `.member=v` | `.length`       | `.immutable` | `.update(v)` |
| --------------------------------- | ----- | ------- | --------- | ----------- | --------------- | ------------ | ------------ |
| DataBool                          | ✘     | ✘       | ✘         | ✘           | は、 `0 0` を返します。 | ✔            | ✔            |
| DataByte                          | ✘     | ✘       | ✘         | ✘           | は、 `0 0` を返します。 | ✔            | ✔            |
| DataByte[]                        | ✔     | ✔       | ✘         | ✘           | ✔               | ✔            | ✔            |
| データダブル                            | ✘     | ✘       | ✘         | ✘           | は、 `0 0` を返します。 | ✔            | ✔            |
| データ                               | ✘     | ✘       | ✘         | ✘           | は、 `0 0` を返します。 | ✔            | ✔            |
| データ int                           | ✘     | ✘       | ✘         | ✘           | は、 `0 0` を返します。 | ✔            | ✔            |
| DataInt[]                         | ✔     | ✔       | ✘         | ✘           | ✔               | ✔            | ✔            |
| DataList                          | ✔     | ✔       | ✘         | ✘           | ✔               | ✔            | ✔            |
| データ長                              | ✘     | ✘       | ✘         | ✘           | は、 `0 0` を返します。 | ✔            | ✔            |
| [DataMap](/Vanilla/Data/DataMap/) | ✘     | ✘       | ✔         | ✔           | ✔               | ✔            | ✔            |
| DataShort                         | ✘     | ✘       | ✘         | ✘           | は、 `0 0` を返します。 | ✔            | ✔            |
| DataString                        | ✔     | ✘       | ✘         | ✘           | ✔               | ✔            | ✔            |

You can cast IData to a specific type using `data.asType()` → `data.asInt();`  
You can also use the IData Interface to convert types: `("1" as IData).asInt();`

| キャストからのキャストから →                   | bool | バイト | byte[] | double | float型 | int | int[]  | リスト    | long | [地図](/AdvancedFunctions/Associative_Arrays/) | 短い  | 文字列 |
| --------------------------------- | ---- | --- | ------ | ------ | ------ | --- | ------ | ------ | ---- | -------------------------------------------- | --- | --- |
| DataBool                          | `≡`  | ✔   | `null` | ✔      | ✔      | ✔   | `null` | `null` | ✔    | `null`                                       | ✔   | ✔   |
| DataByte                          | ✘    | `≡` | `null` | ✔      | ✔      | ✔   | `null` | `null` | ✔    | `null`                                       | ✔   | ✔   |
| DataByte[]                        | ✘    | ✘   | `≡`    | ✘      | ✘      | ✘   | ✔      | ✔      | ✘    | `null`                                       | ✘   | ✔   |
| データダブル                            | ✘    | ✔   | `null` | `≡`    | ✔      | ✔   | `null` | `null` | ✔    | `null`                                       | ✔   | ✔   |
| データ                               | ✘    | ✔   | `null` | ✔      | `≡`    | ✔   | `null` | `null` | ✔    | `null`                                       | ✔   | ✔   |
| データ int                           | ✘    | ✔   | `null` | ✔      | ✔      | `≡` | `null` | `null` | ✔    | `null`                                       | ✔   | ✔   |
| DataInt[]                         | ✘    | ✘   | ✔      | ✘      | ✘      | ✘   | `≡`    | ✔      | ✘    | `null`                                       | ✘   | ✔   |
| DataList                          | ✘    | ✘   | ✔      | ✘      | ✘      | ✘   | ✔      | `≡`    | ✘    | `null`                                       | ✘   | ✔   |
| データ長                              | ✘    | ✔   | `null` | ✔      | ✔      | ✔   | `null` | `null` | `≡`  | `null`                                       | ✔   | ✔   |
| [DataMap](/Vanilla/Data/DataMap/) | ✘    | ✘   | `null` | ✘      | ✘      | ✘   | `null` | `null` | ✘    | `≡`                                          | ✘   | ✔   |
| DataShort                         | ✘    | ✔   | `null` | ✔      | ✔      | ✔   | `null` | `null` | ✔    | `null`                                       | `≡` | ✔   |
| DataString                        | ✘    | ✔   | `null` | ✔      | ✔      | ✔   | `null` | `null` | ✔    | `null`                                       | ✔   | `≡` |