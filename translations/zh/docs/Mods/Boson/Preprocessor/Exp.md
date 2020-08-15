# 实验标志预处理器指令

此预处理器指令允许某些ZenScript 函数的实验行为。

Being part of the ZenScriptX project, and due to the experimental nature of the project in itself, some features may require extensive testing on the compiler side or cause other unintended side effects. 由于这些原因，一些功能 被视为实验性功能，在编译脚本时默认不启用。

此外，一些实验性标志可能不会完全奏效，只能作为即将到来的功能提示提供。 You should always refer to the documentation to know whether a certain flag is used or not. 另一方面，实验标志 永远不会被移除， 表示集成到 ZenScriptX 的 "非实验" 部分的功能不会 禁用他们的标记。 这将允许脚本与新版本的 ZenScriptX 项目兼容，而不需要重写 。

## 使用该指令
使用该指令非常简单，只需将 `#expertic` 添加到文件开头， 并指定代表声明后右侧启用行为的标志 列表。

Every flag must be separated by the others with spaces and it **has to** begin with `-E`. 这把旗帜识别为 实验性旗帜。 Following that declaration, a series of letters and numbers that identify the specific flag should be entered. 请参阅此文档中的列表以了解所有可用的标记。

作为示例，我们想要启用 `Soo` 和 `wd4` 标记。 相应的线条是：
```zenscript
#实验-Esoo -Ewd4
```

## 旗帜列表
| 标记名称   | 当前状态 | 描述                      |
| ------ | ---- | ----------------------- |
| `soo`  | 已禁用  | 启用序列操作员重载               |
| `saia` | 已禁用  | 在序列中提供一个带单个参数的函数 `它` 参数 |
| `sao`  | 已启用  | 允许从数组参数中创建 `序列`         |

目前状况的含义如下：

- **禁用** 指明了一个已存在但由于后端未准备就绪而没有相应动作的标记。 It is provided merely due to "roadmap", allowing developers to know what new features will be available in the near future.
- **启用** 指明了一个已存在并对文件产生影响的标记。
- **已废弃的** 指明了一个因为某个功能已经成熟而不应再使用且不再被认为是实验性的 的标记。 不过，它是作为一种向后兼容的形式提供的。
