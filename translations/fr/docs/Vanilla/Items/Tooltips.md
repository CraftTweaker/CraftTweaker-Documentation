# Info-bulles

Ajouter ou supprimer une infobulle est vraiment facile :  
Tout ce dont vous avez besoin, c'est d'un élément (ou oreDict ou similaire), en d'autres termes, d'un IIngrédient.

## Nettoyage des infobulles

Ceci supprime TOUTES les infobulles de l'élément ``

```zenscript
item.clearTooltip();
```

## Suppression des infobulles spécifiques

Cette fonction supprime toutes les infobulles qui correspondent à une expression régulière donnée. Une infobulle est généralement une ligne de texte (à moins qu'il y ait des sauts de ligne forcés en raison de l'espace).

```zenscript
item.removeTooltip(regex);
```

`item` est un [IIngrédient](/Vanilla/Variable_Types/IIngredient/)  
`tT` est une chaîne de caractères

## Infobulles normales

Cela ajoute `tT` comme infobulle à l'élément ``.

```zenscript
item.addTooltip(tT);

<minecraft:chest>.addTooltip("Stocker, que puis-je en dire plus ?");
```

`item` est un [IIngrédient](/Vanilla/Variable_Types/IIngredient/)  
`tT` est une chaîne de caractères

## Infobulles de Maj

Cela ajoute une infobulle qui ne sera visible que lorsque vous maintenez la touche Maj.  
Vous pouvez également ajouter une information qui sera visible lorsque vous ne maintenez pas le décalage (généralement utilisé pour créer quelque chose comme un message vous parlant de l'info-bulle de déplacement.)

```zenscript
item.addShiftTooltip(tT);
item.addShiftTooltip(tT, info);

<minecraft:chest>.addShiftTooltip("STORAGE!!!");
<minecraft:redstone>.addShiftTooltip("RED!!!", "Maintenir le shift pour savoir ce que je suis");
```

`élément` est un [IIngrédient](/Vanilla/Variable_Types/IIngredient/)  
`tT` est un [IFormattedText](/Vanilla/Utils/IFormattedText/). Vous pouvez également utiliser une chaîne de caractères car elle est automatiquement convertie.  
`info` est un [IFormattedText](/Vanilla/Utils/IFormattedText/). Vous pouvez également utiliser une chaîne de caractères car elle est automatiquement convertie.

# Markup

Le monde est coloré et devrait donc être toutes nos infobulles. Vous pouvez également imbriquer ces options, si vous voulez un texte vert, qui est frappé)

## Coloriage d'une chaîne de caractères

Vous pouvez appliquer une des 16 couleurs à votre chaîne de caractères

```zenscript
format.black
format.darkBlue
format.darkGreen
format.darkAqua
format.darkRed
format.darkPurple
format.gold
format. Format.ray
format.darkGray
format.blue
format.green
format.aqua
format.red
format.lightPurple
format.yellow
format.white
```

```zenscript
<minecraft:stick>.addTooltip(format.green("Celui ci n'est pas mûre"));
```

## Formatage d'une chaîne de caractères

Vous pouvez appliquer différents formats à votre chaîne de caractères si vous le souhaitez:

```zenscript
format.obfuscated
format.bold
format.strikethrough
format.souligné
format.italic
```

```zenscript
<minecraft:stick>.addShiftTooltip(format.strikethrough("Ceci est un mauvais tooltip"));
```

## Fonctions d'info-bulle

Vous pouvez remplacer le paramètre [IFormattedText](/Vanilla/Utils/IFormattedText/) par une fonction ITooltipFunction (`import crafttweaker.item. Fonction Tooltip;`).  
Ces fonctions vous permettent de générer dynamiquement une infobulle basée sur la IItemstack donnée.

Une fonction infobulle est une fonction qui prend un [IItemstack](/Vanilla/Items/IItemStack/) et retourne l'info-bulle sous la forme de chaîne. Cela signifie que l'utilisation d'une commande `format` *ne fonctionne pas* pour ces fonctions, vous devrez vous appuyer sur les préfixes de mise en forme de Minecraft si vous avez besoin de le faire.

Pour les info-bulles de décalage, vous pouvez également fournir une fonction 2ème qui vous permet également de générer l'info-bulle qui doit être affichée lorsque la touche Maj n'est pas pressée. Pour les info-bulles de décalage, il s'agit soit des deux paramètres en tant que fonction ou les deux en tant que [IFormattedText](/Vanilla/Utils/IFormattedText/), pas de mixage !

```zenscript
addAdvancedTooltip(ITooltipFunction fn);
addShiftTooltip(ITooltipFunction fn, @Optional ITooltipFunction infoFn);


//Exemple
<ore:myAxeOreDictionary>. dd(<minecraft:iron_axe:*>, <minecraft:golden_axe:*>, <minecraft:diamond_axe:*>);

<ore:myAxeOreDictionary>. ddAdvancedTooltip(function(item) {   
    retourne "Dommage: " ~ item. amage ~ " / " ~ item.maxDamage;
});


<ore:myAxeOreDictionary>. ddShiftTooltip(function(item) {    
    return "Utilisations restantes: " ~ (item. axDamage - item.damage);
}, function(item){
    return "Maintenir le temps pour un math.";
});
```