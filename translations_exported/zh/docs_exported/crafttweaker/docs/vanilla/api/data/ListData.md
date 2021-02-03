# ListData #列表数据



## 导入相关包

It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import at the very top of the file.
```zenscript
import crafttweaker.api.data.ListData;
```


## 已实现的接口
listData实现了以下接口。 That means all methods defined in these interfaces are also available in ListData

- [ICollectionData #所收集数据](/vanilla/api/data/ICollectionData)
## Constructor #构造函数

No Description Provided
```zenscript
new ListData() as ListData
new ListData();
```

No Description Provided
```zenscript
new ListData(list as stdlib.List<IData>) as ListData
```

| 参数   | 类型                                                              | 描述                      |
| ---- | --------------------------------------------------------------- | ----------------------- |
| list | stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt; | No Description Provided |



## Casters

| 结果类型                                                            | 是否隐藏 |
| --------------------------------------------------------------- | ---- |
| stdlib.List&lt;[IData](/vanilla/api/data/IData)&gt; | true |

