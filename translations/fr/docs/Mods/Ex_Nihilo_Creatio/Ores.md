# Ores

**Doit être dans le `#loader preinit` ou `#loader contenttweaker`**


## Paquet
```zenscript
`mods.exnihilocreatio.Ore`
```

## Méthodes

- **Nom de chaîne de caractères** Nommez les minerais chunks/piece/dust/ingot
- **Couleur de chaîne** Couleur du matériau en hex.
- **[IItemStack](/Vanilla/Items/IItemStack/) sortie** nécessite un oredict.firstItem ou des erreurs.
- **Chaîne de carte[string]** Code de langue puis traduction.
- **String oreDict** Le nom du oreDict que vous voulez.

## Ajouter

```zenscript
mods.exnihilocreatio.Ore. ddRecipe(String,
    String,
    @Optional IItemStack,
    @Carte optionnelle<string, String>,
    @Optional String);

mods xnihilocreatio.Ore.addRecipe("Stone",
    "63452D",
    <ore:stone>. irstItem,
    {
    "fr_au": "StoneDownUnder"
    },
    "Pierre");
```

## Retirer

```zenscript
mods.exnihilocreatio.Ore.removeAll();
```