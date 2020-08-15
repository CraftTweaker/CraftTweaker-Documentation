# Articles alimentaires

Cela vous permet d'ajouter des articles de nourriture au jeu!

## Créer la Représentation des Aliments

Avant de pouvoir ajouter cet élément, vous devez créer une représentation de l'article d'aliment qui vous permettra de définir les propriétés de l'article que vous voulez ajouter.  
C'est là que la [VanillaFactory](/Mods/ContentTweaker/Vanilla/Creatable_Content/VanillaFactory/) arrive dans:

```zenscript
mods.contenttweaker.VanillaFactory.createItemFood(String unlocalizedName, int healAmount);
```

## Importer le package de représentation

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes, donc mieux vaut être sûr que désolé et ajouter l'importation.  
`importer mods.contenttweaker.ItemFood;`

## Expansion de la représentation de l'élément

La classe ItemFoodRepresentation étend [ItemRepresentation](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/). Cela signifie que toutes les méthodes et les propriétés Zen disponibles pour les articles [](/Mods/ContentTweaker/Vanilla/Creatable_Content/Item/) sont également disponibles pour les produits alimentaires !

## Propriétés Zen

Pour obtenir/définir les propriétés, vous pouvez soit utiliser les ZenGetters/Setters en respectant ou les méthodes Zen:

```zenscript
//property name: healAmount
//ZenGetter
print(item.healAmount);
//ZenSetter
item.healAmount = 16;
//ZenMethods
item.getHealAmount();
item.setHealAmount(64);
```

| Propriété            | Type de texte                                                                                   | Requis | Valeur par défaut | Description/Notes                                                                                     |
| -------------------- | ----------------------------------------------------------------------------------------------- | ------ | ----------------- | ----------------------------------------------------------------------------------------------------- |
| format@@0 healAmount | Indice                                                                                          | Oui    |                   | Combien de points de nourriture sont restaurés quand ils sont consommés?                              |
| Toujours comestible  | booléen                                                                                         | Non    | Faux              | La nourriture peut-elle encore être consommée si la barre de nourriture de l'utilisateur est pleine ? |
| Nourriture de loup   | booléen                                                                                         | Non    | Faux              | La nourriture peut-elle servir à apprivoiser les wovs?                                                |
| saturation           | flottant                                                                                        | Non    | 0.6               | Valeur de saturation de la nourriture                                                                 |
| onItemFoodEaten      | [IItemFoodEaten](/Mods/ContentTweaker/Vanilla/Advanced_Functionality/Functions/IItemFoodEaten/) | Non    | null              | Called when the food item is eaten                                                                    |

## Enregistrement de l'article

Tu dois appeler cette méthode pour enregistrer l'objet dans le jeu !  
Sinon, rien ne se passera !  
Après avoir appelé cette fonction, vous ne pouvez pas désinscrire l'élément ou modifier l'une de ses propriétés !

```zenscript
item.register();
```