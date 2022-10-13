# Обработчики скобок

Bracket Handlers or BracketExpressionParser (BEP for short) are pieces of code that reference game objects (or create new objects) such as Items, Blocks or Resource Locations.

An example of a Bracket Handler would be the Item Bracket Handler:

```zenscript
<item:minecraft:diamond>
```

That references the Diamond Item in the game.

## General Format

Bracket Handlers always start with their type, so an Item Bracket Handler starts with `item` and a Block Bracket Handler starts with `block`.

The general format for Bracket Handlers are:

```zenscript
<type:modid:name>
```

As stated above, `type` is what kind of Bracket Handler is being called. `modid` is the mod that owns the object. `name` is the name of the object being referenced.

Some more examples are:

```zenscript
<block:minecraft:white_wool> // References the White Wool Block.
<item:minecraft:white_wool> // References the White Wool Item.
<fluid:minecraft:water> // References the Water Fluid.
<effect:minecraft:haste> // References the Haste Potion Effect.
```

While the format above is used most of the time, there are some instances where there just isn't a need for the modid.

## Modless Formats

In cases where a modid isn't needed to reference an object (Such as Text Formatting, where mods can't add new objects), a different format is used.

```zenscript
<type:name>
```

Some examples of this are:

```zenscript
<damagesource:inFire> // Обозначает огонь как источник урона
```

## Tag Format

##### Note: This is talking about the Vanilla Data Pack Tag

[Tags](https://minecraft.gamepedia.com/Tag) are special and need another layer of categorization, as a tag with the name `minecraft:white_wool` could be referring to both an ItemTag and a BlockTag.

The format used on Tags is:

```zenscript
<tag:type:modid:name>
```

Examples of this are:

```zenscript
<tag:items:minecraft:white_wool> // References the White Wool Item Tag.
<tag:blocks:minecraft:white_wool> // References the White Wool Block Tag.
<tag:fluids:minecraft:water> // References the Water Fluid Tag.
```


## Other Formats

На данный момент обработчики скобок не имеют строго определенного формата, мод может добавить обработчик скобок, работающий совсем по-другому. Перечисленные здесь форматы используются самим CraftTweaker и обозначены, чтобы объяснить, как работают обработчики скобок в принципе.


## Getting Bracket Handlers

Since mods can add their own Bracket Handlers, it is impossible to list them all here, there is a command in-game that will output a list of all Bracket Handlers and their values though! Просто используйте команду `/ct dump_brackets` и осмотрите созданную ей папку `ct_dumps`.