# MCFood

Cette classe a été ajoutée par un mod avec le mod-id `crafttweaker`. Vous devez donc avoir ce mod installé si vous voulez utiliser cette fonctionnalité.

## Importation de la classe
Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un tableau), alors mieux être sûr que désolé et ajouter l'importation.
```zenscript
crafttweaker.api.food.MCFood
```

## Constructeurs
```zenscript
new crafttweaker.api.food.MCFood(healing as int, saturation as float);
```
| Paramètre  | Type de texte | Libellé                    |
| ---------- | ------------- | -------------------------- |
| guérison   | Indice        | Aucune description fournie |
| saturation | flottant      | Aucune description fournie |



## Méthodes
### Ajouter Effet

Type de retour : [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.addEffect(effet comme crafttweaker.api.potion.MCPotionEffectInstance, probabilité comme float);
```

| Paramètre   | Type de texte                                                                                 | Libellé                    |
| ----------- | --------------------------------------------------------------------------------------------- | -------------------------- |
| effet       | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Aucune description fournie |
| Probabilité | flottant                                                                                      | Aucune description fournie |


### effacer les effets

```zenscript
myMCFood.clearEffects();
```

### removeEffect

Type de retour : [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.removeEffect(effet comme crafttweaker.api.potion.MCPotionEffectInstance);
```

| Paramètre | Type de texte                                                                                 | Libellé                    |
| --------- | --------------------------------------------------------------------------------------------- | -------------------------- |
| effet     | [crafttweaker.api.potion.MCPotionEffectInstance](/vanilla/api/potions/MCPotionEffectInstance) | Aucune description fournie |


### format@@0 setCanEatWhenFull

Type de retour : [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setCanEatWhenFull(canEatWhenFull as boolean);
```

| Paramètre                | Type de texte | Libellé                    |
| ------------------------ | ------------- | -------------------------- |
| format@@0 canEatWhenFull | boolean       | Aucune description fournie |


### format@@0 setFastMating

Type de retour : [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setFastEating(fastManger comme booléen);
```

| Paramètre         | Type de texte | Libellé                    |
| ----------------- | ------------- | -------------------------- |
| Mangez rapidement | boolean       | Aucune description fournie |


### format@@0 setHealing

Type de retour : [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setHealing(guérison comme int);
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| guérison  | Indice        | Aucune description fournie |


### format@@0 setMeat

Type de retour : [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setMeat(viande booléenne) ;
```

| Paramètre | Type de texte | Libellé                    |
| --------- | ------------- | -------------------------- |
| Viande    | boolean       | Aucune description fournie |


### setSaturation

Type de retour : [crafttweaker.api.food.MCFood](/vanilla/api/food/MCFood)

```zenscript
myMCFood.setSaturation(saturation comme float);
```

| Paramètre  | Type de texte | Libellé                    |
| ---------- | ------------- | -------------------------- |
| saturation | flottant      | Aucune description fournie |



## Propriétés

| Nom                      | Type de texte | A un Getter | A un Setter |
| ------------------------ | ------------- | ----------- | ----------- |
| format@@0 canEatWhenFull | boolean       | vrai        | Faux        |
| guérison                 | Indice        | vrai        | Faux        |
| Manger rapidement        | boolean       | vrai        | Faux        |
| Viande                   | boolean       | vrai        | Faux        |
| saturation               | flottant      | vrai        | Faux        |

