# IIsBuilder

表示任何构建器。 你期望什么？

这个类是由模组添加的，有模组id `内容较弱`。 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweaker.api.IIsBuilder
```

## 使用方式
### 构建中

指示CoT实际建造任何这个建筑师的建筑物。

```zenscript
myIIsBuilder.build(resourceLocation as String);
myIIsBuilder.build("my_awesome_block");
```

| 参数   | 返回值类型       | 描述        |
| ---- | ----------- | --------- |
| 资源位置 | 字符串[string] | 给此方块的资源路径 |



