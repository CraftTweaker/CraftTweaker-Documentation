# JEITweaker

## Descrizione

Questa mod aggiunge il supporto CraftTweaker a JEI. CraftTweaker usato per supportare il JEI nativamente, ma a causa della riscrittura 1.14, il supporto JEI viene tirato fuori nel suo mod.


## Pacchetto
`mods.jei.JEI`

## Elemento Nascondere

Questo nasconderà l'elemento dato in JEI. L'esempio dato nasconderà il blocco di sporco nel menu JEI.

```zenscript
//mods.jei.JEI.hideItem(IItemStack stack);
mods.jei.JEI.hideItem(<item:minecraft:dirt>);
```

## Categoria Nascondere

Questo nasconderà la categoria specificata in JEI. L'esempio dato nasconderà la categoria forno quando si cercano ricette in JEI.

```zenscript
//mods.jei.JEI.hideCategory(categoria String);
mods.jei.JEI.hideCategory("minecraft:furnace");
```

Le categorie predefinite sono:
```zenscript
"minecraft:crafting"
"minecraft:furnace"
"minecraft:smoking"
"minecraft:blasting"
"minecraft:campfire"
"minecraft:fuel"
"minecraft:brewing"
"minecraft:anvil"
"jei:information"
```

Le mod possono aggiungere più categorie, però!

## Aggiungi Informazioni

Questo aggiungerà informazioni all'elemento che verrà mostrato quando si guardano gli usi in JEI!.

Questo esempio esatto aggiungerà 3 righe di informazioni all'elemento Diamante.

```zenscript
//mods.jei.JEI.addInfo(IItemStack stack, String[] information);
mods.jei.JEI.addInfo(<item:minecraft:diamond>, ["This is the first line!", "This is the second!", "third"]);
```

Il codice di cui sopra produrrà: ![Casella Di Commit Riempita](https://blamejared.com/docsImages/JEITweakerAddInfo.png)


