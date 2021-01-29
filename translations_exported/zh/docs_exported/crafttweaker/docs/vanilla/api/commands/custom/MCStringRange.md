# MCStringRange

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.commands.custom.MCStringRange;
```


## 方法

### 在

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCStringRange.at(pos as int) as MCStringRange
```
| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| 点  | int | No Description Provided |

### 之间

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCStringRange.between(start as int, end as int) as MCStringRange
```
| 参数 | 类型  | 描述                      |
| -- | --- | ----------------------- |
| 开始 | int | No Description Provided |
| 结束 | int | No Description Provided |

### 包含

Return Type: [MCStringRange](/vanilla/api/commands/custom/MCStringRange)

```zenscript
MCStringRange.encompassing(a as MCStringRange, b as MCStringRange) as MCStringRange
```
| 参数 | 类型                                                          | 描述                      |
| -- | ----------------------------------------------------------- | ----------------------- |
| a  | [MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No Description Provided |
| b  | [MCStringRange](/vanilla/api/commands/custom/MCStringRange) | No Description Provided |

## 方法

### equals #等于

Return Type: boolean

```zenscript
MCStringRange.equals(o as Object) as boolean
```
| 参数 | 类型     | 描述                      |
| -- | ------ | ----------------------- |
| o  | Object | No Description Provided |

### getEnd

Return Type: int

```zenscript
MCStringRange.getEnd() as int
myMCStringRange.getEnd();
```
### getFrom

Return Type: string

```zenscript
MCStringRange.getFrom(reader as MCImmutableStringReader) as string
```
| 参数     | 类型                                                                              | 描述                      |
| ------ | ------------------------------------------------------------------------------- | ----------------------- |
| reader | [MCImmutableStringReader](/vanilla/api/commands/custom/MCImmutableStringReader) | No Description Provided |

Return Type: string

```zenscript
MCStringRange.getFrom(string as string) as string
```
| 参数     | 类型     | 描述                      |
| ------ | ------ | ----------------------- |
| string | string | No Description Provided |

### getLength

Return Type: int

```zenscript
MCStringRange.getLength() as int
myMCStringRange.getLength();
```
### getStart

Return Type: int

```zenscript
MCStringRange.getStart() as int
myMCStringRange.getStart();
```
### hashCode

Return Type: int

```zenscript
MCStringRange.hashCode() as int
myMCStringRange.hashCode();
```
### isEmpty

Return Type: boolean

```zenscript
MCStringRange.isEmpty() as boolean
myMCStringRange.isEmpty();
```
### toString

Return Type: string

```zenscript
MCStringRange.toString() as string
myMCStringRange.toString();
```

