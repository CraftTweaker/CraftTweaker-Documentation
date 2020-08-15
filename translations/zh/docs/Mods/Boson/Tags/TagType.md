# `TagType`

A `TagType` identifies the kind of items that can be stored inside a given [`Tag`](/Mods/Boson/Tags/Tag/). It also hosts some additional read-only data that identifies a certain set of mnemonics that help identify a type in a more human-friendly way.

## Class Details
The class is situated in the `net.thesilkminer.mc.boson.zen.tag` package, making `net.thesilkminer.mc.boson.zen.tag.TagType` its fully qualified name for importing.

## Creating a New Instance
It is not possible to create a new instance of a raw tag type from CraftTweaker. It is nevertheless possible to obtain the type of a given `Tag` via its properties. Refer to the [documentation for `Tag`](/Mods/Boson/Tags/Tag/) for more information.

### Known `TagType` instances
Boson by default already creates a certain set of tag types, which can be used in [bracket handlers](/Mods/Boson/Tags/BracketHandler/) to obtain instances of `Tag`s or `TagIngredient`s. These mnemonics are written in the table that follows:

| Mnemonic | Stored Objects                                |
| -------- | --------------------------------------------- |
| `blocks` | [`IBlockState`](/Vanilla/Blocks/IBlockState/) |
| `fluids` | (not currently accessible via CraftTweaker)   |
| `项目`     | [`IItemStack`](/Vanilla/Items/IItemStack/)    |

## 参数
A `TagType` provides read-only access to a certain set of properties, as outlined in the following table:

| 属性名称                | 返回值类型                                                                  | 描述                                                                        |
| ------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| `directoryName`     | `字符串`                                                                  | Name of the directory where tag JSONs are in a data-pack                  |
| `名称`                | `字符串`                                                                  | Mnemonic that identifies the given tag type; used in tag bracket handlers |
| `classType`         | [`类`](/Mods/Boson/Reflection/Class/)                                   | Type of objects stored in the tag                                         |
| `converterFunction` | [`Function<NameSpacedString, any>`](/Mods/Boson/Functions/List/) | Converts names into tag elements                                          |
