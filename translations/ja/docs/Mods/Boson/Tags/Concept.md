# タグ

タグは1.13以降、バニラマインクラフトに存在する強力な概念です。 It allows players and datapack makers to define a set of elements to be considered the same in a certain context, removing some of the hardcoding of blocks and items in code.

Tags are represented as a set of JSON files placed in the `data/<namespace>/tags/<tag-type>` directory, where `namespace` identifies the namespace the tags belong to, and `<tag-type>` the type of elements that the tag groups.

この概念は、鉱石辞典と概念で似ているように思えるかもしれませんが、実際にはほとんど同じです。 鉱石辞書とは異なるが、タグは互いを参照することもでき、一部は他の人のためのグループとして機能します。 Moreover, while the ore dictionary only works with items (i.e. things that can be placed in your inventory), tags also work with blocks, fluids, and other types if needed.

1の内部変化の大きな違いにより、ボソンの実装はバニラとは異なります。 3 は動作しますが、 新しいタグタイプの容易な mod 拡張を許可することを除き、ほぼ同じです。 このため、CraftTweaker の統合も異なります。

始めるには、ブラケットハンドラでタグを [取得する方法](/Mods/Boson/Tags/BracketHandler/)を読んでください。
