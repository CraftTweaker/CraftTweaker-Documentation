# Tags

Tags are a powerful concept that has been present in Vanilla Minecraft since 1.13. It allows players and datapack makers to define a set of elements to be considered the same in a certain context, removing some of the hardcoding of blocks and items in code.

Tags are represented as a set of JSON files placed in the `data/<namespace>/tags/<tag-type>` directory, where `namespace` identifies the namespace the tags belong to, and `<tag-type>` the type of elements that the tag groups.

This concept may seem similar in concept to the Ore Dictionary, and in fact, it is almost the same. Differently from the ore dictionary, though, tags can also reference one another, with some acting as groups for others. Moreover, while the ore dictionary only works with items (i.e. things that can be placed in your inventory), tags also work with blocks, fluids, and other types if needed.

Boson's implementation differs from Vanilla's due to the huge difference in internal changes in 1.13, but it works almost the same, except for allowing easier mod extension with new tag types. For this reason, the CraftTweaker integration is also different.

To get started, read how to [obtain a tag via a bracket handler](/Mods/Boson/Tags/BracketHandler/).
