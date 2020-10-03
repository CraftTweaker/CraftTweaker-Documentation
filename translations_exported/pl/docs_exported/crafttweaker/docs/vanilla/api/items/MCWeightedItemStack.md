# MCWeightedItemStack

[PLACEHOLDER] ItemStack with a przypadek, zwykle used for recipe outputs. <p> Ostrożnie, jeśli stos użyty do utworzenia Wagi Stack był zmienny, to ustawnik rozmiaru zmusza również oryginalny stos!

This class was added by a mod with mod-id `crafttweaker`. So you need to have this mod installed if you want to use this feature.

## Importing the class
It might be required for you to import the package if you encounter any issues (like casting an Array), so better be safe than sorry and add the import.
```zenscript
crafttweaker.api.item.MCWażony ItemStack
```

## Implemented Interfaces
MCWeweightedItemStack implementuje następujące interfejsy. That means any method available to them can also be used on this class.
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)

## Constructors
Ręcznie tworzy ważony ItemStack. Zazwyczaj możesz użyć operatora lub `.weight (waga)` metody IItemStack, choć
```zenscript
nowy crafttweaker.api.item.MCWeweightedItemStack(itemStack jako crafttweaker.api.item.IItemStack, waga jako podwójny);
nowy crafttweaker.api.item.MCWeightedItemStack(<item:minecraft:bedrock>, 0.5D);
```
| Parameter        | Type                                                              | Description                     |
| ---------------- | ----------------------------------------------------------------- | ------------------------------- |
| stos przedmiotów | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Stos                            |
| weight           | double                                                            | Szansa między 0 (0%) a 1 (100%) |



## Methods
### weight

Tworzy nowy ważony stos o podanej wadze

 Zwroty: `Nowy Ważony ItemStack`

Typ zwrotu: [crafttweaker.api.item.MCWeweightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:bedrock>.weight(0.5D).weight(nowa masa jako podwójna);
<item:minecraft:bedrock>.weight(0.5D).weight(0.75D);
```

| Parameter        | Type   | Description |
| ---------------- | ------ | ----------- |
| młoda masa ciała | double | Procent     |



## Properties

| Name          | Type                                                              | Has Getter | Has Setter |
| ------------- | ----------------------------------------------------------------- | ---------- | ---------- |
| commandString | String                                                            | true       | false      |
| stack         | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | true       | false      |
| weight        | double                                                            | true       | false      |

## Operators
### MUL

Ustawia ilość itemStack. <p> Jeśli oryginalny Stack był zmienny, również mutuje rozmiar oryginalnego stacka.

 Zwroty: `Nowy Ważony ItemStack`

```zenscript
<item:minecraft:bedrock>.weight (0, 5D) * nowa kwota jako int
<item:minecraft:bedrock>.weight (0, 5D) * 5
```

| Parameter  | Type | Description          |
| ---------- | ---- | -------------------- |
| nowa kwota | int  | Rozmiar nowego stosu |
### MOD

Tworzy nowy ważony stos z podaną wartością procentową

 Zwroty: `Nowy Ważony ItemStack`

```zenscript
<item:minecraft:bedrock>.weight (0, 5D) % nowej wagi jako int
<item:minecraft:bedrock>.weight (0, 5D) % 75
```

| Parameter        | Type | Description |
| ---------------- | ---- | ----------- |
| młoda masa ciała | int  | Procent     |

