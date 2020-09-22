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
- [crafttweaker.api.brackets.CommandStringDisplayable](/vanilla/api/brackets/CommandStringDisplayable)
- [format@@0 crafttweaker.api.item.Igredient](/vanilla/api/items/IIngredient)

## Méthodes
### addShiftTooltip

```zenscript
<item:minecraft:dirt>.addShiftTooltip(contenu comme crafttweaker.api.util.text.MCTextComponent, showMessage as crafttweaker.api.util.text.MCTextComponent);
```

| Paramètre           | Type de texte                                                                        | Libellé                    | Optionnel | Valeur par défaut |
| ------------------- | ------------------------------------------------------------------------------------ | -------------------------- | --------- | ----------------- |
| contenu             | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Aucune description fournie | Faux      | `null`            |
| Afficher le message | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Aucune description fournie | vrai      | `null`            |


### addTooltip

```zenscript
<item:minecraft:dirt>.addTooltip(contenu en tant que crafttweaker.api.util.text.MCTextComponent);
```

| Paramètre | Type de texte                                                                        | Libellé                    |
| --------- | ------------------------------------------------------------------------------------ | -------------------------- |
| contenu   | [crafttweaker.api.util.text.MCTextComponent](/vanilla/api/util/text/MCTextComponent) | Aucune description fournie |


### aucun dégât

Type de retour : [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.anyDommage();
```

### Effacer le nom personnalisé

Efface tout ensemble de noms personnalisés pour cet ItemStack

```zenscript
<item:minecraft:dirt>.clearCustomName();
```

### clearTooltip

```zenscript
<item:minecraft:dirt>.clearTooltip();
```

### Copie

Crée une copie

Type de retour : [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.copy();
```

### Obtenir les objets restants

Quand cette pile d'ingrédients est fabriquée, que restera-t-il dans la grille ? Ne vérifie cependant pas si la pile correspond ! Utilisé par exemple dans net.minecraft.item.crafting.ICraftingRecipe

Type de retour : [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.getRemainingItem(stack as crafttweaker.api.item.IItemStack);
<item:minecraft:dirt>.getRemainingItem(<item:minecraft:iron_ingot>);
```

| Paramètre | Type de texte                                                     | Libellé                                |
| --------- | ----------------------------------------------------------------- | -------------------------------------- |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pile à fournir pour cet ingrédient. |


### correspondances

Est-ce que la pile donnée correspond à l'ingrédient ?

Type de retour: booléen

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack );
<item:minecraft:dirt>.matches(<item:minecraft:iron_ingot>);
```

| Paramètre | Type de texte                                                     | Libellé            |
| --------- | ----------------------------------------------------------------- | ------------------ |
| empilage  | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pile à vérifier |



Est-ce que la pile donnée correspond à l'ingrédient ?

Type de retour: booléen

```zenscript
<item:minecraft:dirt>.matches(stack as crafttweaker.api.item.IItemStack, ignoreDamage as boolean);
```

| Paramètre          | Type de texte                                                     | Libellé                                   |
| ------------------ | ----------------------------------------------------------------- | ----------------------------------------- |
| empilage           | [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack) | La pile à vérifier                        |
| Ignorer les dégâts | boolean                                                           | Les dommages devraient-ils être vérifiés? |


### modifyTooltip

```zenscript
<item:minecraft:dirt>.modifyTooltip(fonction comme crafttweaker.api.item.tooltip.ITooltipFunction);
```

| Paramètre | Type de texte                                                                                               | Libellé                    |
| --------- | ----------------------------------------------------------------------------------------------------------- | -------------------------- |
| fonction  | [format@@0 crafttweaker.api.item.tooltip.ITooltipFunction](/crafttweaker/api/item/tooltip/ITooltipFunction) | Aucune description fournie |


### mutable

Type de retour : [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.mutable();
```

### seulement endommagé

Type de retour : [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyDamaged();
```

### onlyIf

Type de retour : [crafttweaker.api.item.MCIngredientConditioned](/vanilla/api/items/MCIngredientConditioned)&lt;[crafttweaker.api.item.IIngredient](/vanilla/api/items/IIngredient)&gt;

```zenscript
<item:minecraft:dirt>.onlyIf(uid as String, function as function.Predicate<crafttweaker.api.item.IItemStack>);
```

| Paramètre | Type de texte                                                                                           | Libellé                    | Optionnel | Valeur par défaut |
| --------- | ------------------------------------------------------------------------------------------------------- | -------------------------- | --------- | ----------------- |
| uid       | Chaîne de caractères                                                                                    | Aucune description fournie | Faux      | `null`            |
| fonction  | function.Predicate&lt;[crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)&gt; | Aucune description fournie | vrai      | `null`            |


### removeTooltip

```zenscript
<item:minecraft:dirt>.removeTooltip(regex comme String);
```

| Paramètre | Type de texte        | Libellé                    |
| --------- | -------------------- | -------------------------- |
| regex     | Chaîne de caractères | Aucune description fournie |


### setDisplayName

Définit le nom d'affichage de la stack

Type de retour : [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.setDisplayName(name as String);
<item:minecraft:dirt>.setDisplayName("totalement pas sale");
```

| Paramètre | Type de texte        | Libellé                 |
| --------- | -------------------- | ----------------------- |
| Nom       | Chaîne de caractères | Nouveau nom de la pile. |


### Poids

Type de retour : [crafttweaker.api.item.MCWeightedItemStack](/vanilla/api/items/MCWeightedItemStack)

```zenscript
<item:minecraft:dirt>.weight(weight as double);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| Poids     | double        | Aucune description fournie |


### avec des dégâts

Définit les dégâts de la pile d'objet

Type de retour : [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

```zenscript
<item:minecraft:dirt>.withDamage(dommage comme int) :
<item:minecraft:dirt>.withDamage(10) ;
```

| Paramètre     | Type de texte | Libellé                       |
| ------------- | ------------- | ----------------------------- |
| endommagement | Indice        | la nouvelle valeur de dommage |


### format@@0 withTag

Définit le tag pour la pile.

 Renvoie : `Cette itemstack si elle est mutable, une nouvelle avec la propriété modifiée sinon`

Type de retour : [crafttweaker.api.item.IItemStack](/vanilla/api/items/IItemStack)

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
| endommagement      | Indice                                                              | vrai        | Faux        |
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
| Propriétaire       | Chaîne de caractères                                                | vrai        | Faux        |
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
### MOD

```zenscript
<item:minecraft:dirt> % de pourcentage sous forme d'int
```

| Paramètre    | Type de texte | Libellé                    |
| ------------ | ------------- | -------------------------- |
| pourcentages | Indice        | Aucune description fournie |
### OU

```zenscript
<tag:ingotIron> | autres que crafttweaker.api.item.IIngredient
```

| Paramètre | Type de texte                                                               | Libellé                    |
| --------- | --------------------------------------------------------------------------- | -------------------------- |
| autres    | [format@@0 crafttweaker.api.item.Igredient](/vanilla/api/items/IIngredient) | Aucune description fournie |

## Pistolet

| Type de résultat                                           | Est implicite |
| ---------------------------------------------------------- | ------------- |
| [crafttweaker.api.data.IData](/vanilla/api/data/IData)     | vrai          |
| [crafttweaker.api.data.MapData](/vanilla/api/data/MapData) | vrai          |

