# IIsBuilder

Denotes anything that is a builder. What did you expect?

This class was added by a mod with mod-id `contenttweaker`. 因此，如果要使用此功能，则需要安装此mod。

## 导入类
如果遇到任何问题（例如强制转换数组），则可能需要导入软件包，因此，最好的方式就是导入包支持。
```zenscript
mods.contenttweaker.api.IIsBuilder
```

## 使用方式
### build

Instructs CoT to actually build whatever this builder is supposed to be building.

```zenscript
myIIsBuilder.build(resourceLocation as String);
myIIsBuilder.build("my_awesome_block");
```

| 参数               | 返回值类型       | 描述                                   |
| ---------------- | ----------- | ------------------------------------ |
| resourceLocation | 字符串[string] | The resource path to give this block |



