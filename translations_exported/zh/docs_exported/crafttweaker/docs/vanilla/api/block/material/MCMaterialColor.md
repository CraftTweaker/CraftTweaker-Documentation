# MCMaterialColor #MC材料颜色

## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.block.material.MCMaterialColor;
```


## 方法

:::group{name=getMapColor}

Gets the Integer value of the colour of this material color on a map.

Returns: the Integer value of the map colour  
Return Type: int

```zenscript
// MCMaterialColor.getMapColor(index as int) as int

myMCMaterialColor.getMapColor(1);
```

| 参数    | 类型  | 描述                               |
| ----- | --- | -------------------------------- |
| index | int | the index to get the colour for. |


:::


