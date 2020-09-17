# 标签

标签是一个强大的概念，自1.13以来就存在于原版Minecraft中。 它允许玩家和数据包作者 定义一组在某个环境中被认为相同的元素。 删除块 和代码中项目的一些硬编码。

标签作为放置在 `data/<namespace>/tags/<tag-type>` 目录中的 JSON 文件集表示， 其中 `命名空间` 指明标签所属的命名空间： 和 `<tag-type>` 标签组的元素类型。

这一概念在概念上似乎类似于Ore Dictionary，事实上，它几乎是一样的。 但是，标签与 核心字典不同，但也可以相互引用，一些标签可以作为其他标签的组。 此外， 矿石字典只适用于项目 (例如) 标签可以放置在你的清单中的东西。标签也可以用块、 液体和其他类型的方式工作。

Boson's implementation differs from Vanilla's due to the huge difference in internal changes in 1.13, but it works almost the same, except for allowing easier mod extension with new tag types. 出于这个原因，CraftTinvate 集成也是不同的。

若要开始，请阅读 [如何通过括号处理程序](/Mods/Boson/Tags/BracketHandler/) 获取一个标签。
