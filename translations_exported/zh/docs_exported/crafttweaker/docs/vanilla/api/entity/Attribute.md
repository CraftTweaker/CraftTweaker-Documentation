# Attribute

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.entity.Attribute;
```


## 方法

:::group{name=clampValue}

Clamps the given value to this Attribute's range if it exist.

Returns: The clamped value if this Attribute has a range, otherwise the value is returned as is.  
Return Type: double

```zenscript
// Attribute.clampValue(value as double) as double

myAttribute.clampValue(4);
```

| 参数    | 类型     | 描述                        |
| ----- | ------ | ------------------------- |
| value | double | The given value to clamp. |


:::

:::group{name=getCommandString}

Gets the attribute bracket handler syntax for this Attribute.

 E.G.
 <code>
 <attribute:minecraft:generic.max_health>
 </code>

Returns: The attribute bracket handler syntax for this Block.  
Return Type: string

```zenscript
// Attribute.getCommandString() as string

myAttribute.getCommandString();
```

:::

:::group{name=getDefaultValue}

Gets the default value for this Attribute.

Returns: The default value for this Attribute.  
Return Type: double

```zenscript
// Attribute.getDefaultValue() as double

myAttribute.getDefaultValue();
```

:::

:::group{name=shouldWatch}

Should this attribute be synced to the client.

Returns: True if synced. False otherwise.  
Return Type: boolean

```zenscript
// Attribute.shouldWatch() as boolean

myAttribute.shouldWatch();
```

:::


## 参数

| 名称            | 类型      | 可获得  | 可设置   | 描述                                                                                                                                   |
| ------------- | ------- | ---- | ----- | ------------------------------------------------------------------------------------------------------------------------------------ |
| commandString | string  | true | false | Gets the attribute bracket handler syntax for this Attribute. <br />  <br />  E.G. <br />  <code> <br />  <attribute:minecraft:generic.max_health> <br />  </code> |
| defaultValue  | double  | true | false | Gets the default value for this Attribute.                                                                                           |
| shouldWatch   | boolean | true | false | Should this attribute be synced to the client.                                                                                       |

