# Conditions de l’article

Parfois, les objets normaux ne se couperont pas:

Parfois, nous voulons être en mesure de spécifier des recettes qui ne fonctionnent que lorsque l'élément en entrée remplit certaines conditions.

Parfois, nous voulons être en mesure de spécifier des recettes qui produiront un objet spécial, que ce soit avec un NBT-Tag ou une valeur de dégâts ou autrement.

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`importer crafttweaker.item.IItemCondition ;`

## Conditions d'entrée

Ceux-ci affecteront les objets que vous pouvez utiliser pour fabriquer l'objet résultant. Rappelez-vous que vous pouvez mélanger des modificateurs, pour mélanger Dégâts et NBT-Tag, par exemple

```zenscript
<minecraft:iron_pickaxe>.onlyDamaged().withTag({display: {Lore: "Ne sommes-nous pas tous des papillons ?"}});
```

### Dégâts

#### aucun dégât

La valeur de dommage de l'élément d'entrée n'a pas d'importance pour la recette

```zenscript
item.anyDamage()
```

#### seulement endommagé

L'élément d'entrée doit être endommagé

```zenscript
item.onlyDamaged();
```

#### Endommagé au moins

La valeur d'endommagement de l'élément d'entrée doit être au moins la valeur `spécifiée`  
`La valeur` est un int

```zenscript
item.onlyDamageAtLeast(valeur);
```

#### Dégâts au plus

La valeur d'endommagement de l'élément d'entrée doit être au maximum la valeur `spécifiée`  
`La valeur` est un int

```zenscript
item.onlyDamageAtMost(valeur);
```

#### Dégâts entre

Input item's damage value needs to be between the speciefied `value1` and `value2`  
`Value1` is an int  
`Value2` is an int

```zenscript
item.onlyDamageBetween(valeur1, valeur2);
```

### Récupérer des éléments ou interdire explicitement la réutilisabilité d'un élément

Parfois, vous avez besoin d'une recette où vous récupérez certains de vos éléments d'entrée.  
En appliquant `transformDamage(int)` vous pouvez créer de telles recettes.

#### Dégâts sur la transformation

L'objet en entrée recevra `points de dégâts` de valeur et vous le récupérerez à moins qu'il ne se casse pendant le processus de fabrication.  
`La valeur` est un int

```zenscript
item.transformDamage(valeur) ;
```

### Tags NBT

Parfois, vous voulez que vos ingrédients aient besoin d'un NBT-Tag spécifique. The recipe doesn't care if your item has NBT-Tags other than the ones specified, So a pickaxe with a specific lore may also be enchanted!

Si vous utilisez `withTag` jei l'affichera correctement, si vous utilisez `onlyWithTag`, jei n'affichera qu'un élément sans tag !

Here's how you do it: `NBTTag` is your NBT Data

```zenscript
item.withTag(NBTData);
item.onlyWithTag(NBTTag);

<minecraft.iron_pickaxe>.onlyWithTag({display: {Name: "Pickle the Pickleberry"}});
<minecraft.iron_pickaxe>.withTag({display: {Name: "Pickleberry"}});
```

## Modificateurs de sortie

Si vous pouvez spécifier des conditions d'entrée, il n'est pas si difficile de définir aussi des conditions de sortie, ou plutôt, des modificateurs de sortie.

### Dégâts

Votre objet de sortie aura la valeur `` points de dégâts.  
`La valeur` est un int.

```zenscript
item.withDomage(valeur) ;
```

### Tags NBT

Votre élément en sortie aura `NBTTag` en tant que NBT-Tag.  
`NBTTag` est votre données NBT

```zenscript
item.withTag(NBTTag);

<minecraft:iron_pickaxe>.withTag({display: {Name: "Pickleberry"}})
```

## Enregistrement de ses propres conditions d'article

Vous pouvez également ajouter vos propres conditions d'article. These are special functions that accept the [item](/Vanilla/Items/IItemStack/) itself as single parameter.

```zenscript
conditionedItem = item.only(function(item) {return true;});
```

La fonction doit retourner un booléen qui est vrai si l'élément correspond à la condition.