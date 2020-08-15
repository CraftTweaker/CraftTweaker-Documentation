# IInscrire une pièce de matériel

La fonction IRegisterMaterialPart est une fucntion utilisée pour enregistrer les [Pièces](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) ajoutées à l'aide d'un [type de pièce](/Mods/ContentTweaker/Materials/Parts/PartType/) personnalisé.

## Importation du paquet

Si vous sentez un jour le besoin d'importer la classe de cette fonction, c'est parti:

```zenscript
Importer mods.contenttweaker.RegisterMaterialPart;
```

## Syntaxe

Nous avons une fonction nulle, qui prend une [pièce de matériau](/Mods/ContentTweaker/Materials/Materials/MaterialPart/) en entrée.  
C'est la materialPart qui doit être enregistrée.  
Vous pourriez par exemple appeler la [Vanilla Factory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) à ce stade, mais comment procéder de ce point est vraiment à vous.

```zenscript
function(materialPart) {
    //DoStuff
    retourne;
}
```