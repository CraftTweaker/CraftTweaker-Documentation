# IItemStack

Ceci représente un élément. Il peut être récupéré en utilisant un objet BEP. Est un [crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.item.IItemStack
```

## Interfaces implémentées
IItemStack implémente les interfaces suivantes. Cela signifie que toutes les méthodes disponibles peuvent également être utilisées dans cette classe.
- [format@@0 crafttweaker.api.item.Igredient](/vanilla/api/items/IIngredient)

## Méthodes
### Effacer le nom personnalisé

Efface tout ensemble de noms personnalisés pour cet ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### Obtenir les objets restants

Quand cette pile d'ingrédients est fabriquée, que restera-t-il dans la grille ? Ne vérifie cependant pas si la pile correspond ! Utilisé par exemple dans net.minecraft.item.crafting.ICraftingRecipe

Retourne [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Paramètre | Type de texte                                                     | Libellé                                |
| --------- | ----------------------------------------------------------------- | -------------------------------------- |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pile à fournir pour cet ingrédient. |


### correspondances

Est-ce que la pile donnée correspond à l'ingrédient ?

Retourne un booléen

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack );
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Paramètre | Type de texte                                                     | Libellé            |
| --------- | ----------------------------------------------------------------- | ------------------ |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pile à vérifier |


### setDisplayName

Définit le nom d'affichage de la stack

Retourne [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totalement pas sale");
```

| Paramètre | Type de texte        | Libellé                 |
| --------- | -------------------- | ----------------------- |
| Nom       | Chaîne de caractères | Nouveau nom de la pile. |


### avec des dégâts

Définit les dégâts de la pile d'objet

Retourne [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(dommage comme int) :
<item:minecraft:dirt>.withDamage(10) ;
```

| Paramètre     | Type de texte | Libellé                       |
| ------------- | ------------- | ----------------------------- |
| endommagement | Indice        | la nouvelle valeur de dommage |


### format@@0 withTag

Définit le tag pour la pile.

Retourne [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withTag(tag as crafttweaker.api.data.IData);
<item:minecraft:dirt>.withTag({Display: {lore: ["Hello"]}});
```

| Paramètre | Type de texte                                          | Libellé           |
| --------- | ------------------------------------------------------ | ----------------- |
| Étiquette | [crafttweaker.api.data.IData](/vanilla/api/data/IData) | Le tag à définir. |



## Propriétés

| Nom                | Type de texte                                                       | A un Getter | A un Setter |
| ------------------ | ------------------------------------------------------------------- | ----------- | ----------- |
| montant            | Indice                                                              | vrai        | Faux        |
| temps de brûlure   | Indice                                                              | vrai        | vrai        |
| Chaîne de commande | Chaîne de caractères                                                | vrai        | Faux        |
| endommagable       | boolean                                                             | vrai        | Faux        |
| endommagé          | boolean                                                             | vrai        | Faux        |
| nomdeaffichage     | Chaîne de caractères                                                | vrai        | Faux        |
| vide               | boolean                                                             | vrai        | Faux        |
| nourriture         | [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)            | vrai        | vrai        |
| getOrCreate        | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | vrai        | Faux        |
| getRepairCost      | Indice                                                              | vrai        | Faux        |
| hasDisplayName     | boolean                                                             | vrai        | Faux        |
| Est Effet          | boolean                                                             | vrai        | Faux        |
| format@@0 hasTag   | boolean                                                             | vrai        | Faux        |
| isCrossbow         | boolean                                                             | vrai        | Faux        |
| est enchantable    | boolean                                                             | vrai        | Faux        |
| est enchanté       | boolean                                                             | vrai        | Faux        |
| Eléments           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)[] | vrai        | Faux        |
| maxDamage          | Indice                                                              | vrai        | Faux        |
| maxStackSize       | Indice                                                              | vrai        | Faux        |
| registryName       | Chaîne de caractères                                                | vrai        | Faux        |
| empilable          | boolean                                                             | vrai        | Faux        |
| Étiquette          | [crafttweaker.api.data.IData](/vanilla/api/data/IData)              | vrai        | Faux        |
| Clé de traduction  | Chaîne de caractères                                                | vrai        | Faux        |
| useDuration        | Indice                                                              | vrai        | Faux        |

## Opérateurs
### MUL

Définit le montant de la pile d'objets

```zenscript
<item:minecraft:dirt> * montant en int
<item:minecraft:dirt> * 3
```

| Paramètre | Type de texte | Libellé         |
| --------- | ------------- | --------------- |
| montant   | Indice        | nouveau montant |

## Pistolet

| Type de résultat                                                  | Est implicite |
| ----------------------------------------------------------------- | ------------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)            | vrai          |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData)        | vrai          |
| [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | Faux          |

