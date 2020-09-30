# MCImmutableStringReader

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.commands.custom.MCImmutableStringReader
```

## Methods
### canRead

Return type: boolean

```zenscript
myMCImmutableStringReader.canRead();
```


Return type: boolean

```zenscript
myMCImmutableStringReader.canRead(arg0 as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| arg0      | int  | No description provided |


### getCursor

Return type: int

```zenscript
myMCImmutableStringReader.getCursor();
```

### getRead

Return type: String

```zenscript
myMCImmutableStringReader.getRead();
```

### 残りの取得

Return type: String

```zenscript
myMCImmutableStringReader.getRemaining();
```

### getRemainingLength

Return type: int

```zenscript
myMCImmutableStringReader.getRemainingLength();
```

### getString

Return type: String

```zenscript
myMCImmutableStringReader.getString();
```

### 取得総長さ

Return type: int

```zenscript
myMCImmutableStringReader.getTotalLength();
```

### のぞき見る

戻り値の型: char。

```zenscript
myMCImmutableStringReader.peek();
```


戻り値の型: char。

```zenscript
myMCImmutableStringReader.peek(arg0 as int);
```

| Parameter | Type | Description             |
| --------- | ---- | ----------------------- |
| arg0      | int  | No description provided |



