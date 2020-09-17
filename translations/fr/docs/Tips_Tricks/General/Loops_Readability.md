# Utilisez des boucles pour améliorer l'apparence de votre script

## Problème

Nous l'avons tous vu : des scripts avec plus de 500 lignes où il dit 500 fois `recettes.remove(item1);recettes.remove(item2),...`  
Non seulement est-ce une douleur à écrire, mais il est possible que vous passiez des heures à déboguer un peu de faute quand la seule exception que vous obtenez est `erreur dans les recettes. s : null`

## Solution

My rule of thumb: When writing the exactly same command more than 10 times, with only 1 Parameter changing, I'll use a loop.

Donc, au lieu de toujours taper les fonctions, je déclare un tableau contenant tous les éléments et j'itère à travers celui-ci.

```zenscript
importer crafttweaker.item.IIngredient;

Array val = [
    item1,
    item2,
    item3,

] en tant qu'IIngrédient[];


pour l'objet dans Array{
    recettes.remove(item);
}
```

## Avantages

- Votre script devient (à mon avis) plus facile à lire
- Vous savez exactement où se situe votre script
- Les changements de dernière minute sont vraiment faciles car tout ce que vous avez à faire est d'ajouter ou de supprimer l'élément du tableau.

## Inconvénients

- Ne fonctionne que s'il n'y a que quelques paramètres qui changent
- Vous pouvez dévisser votre script sans le savoir, par exemple, en lançant le tableau mal
- Une erreur dans le tableau fait échouer le tableau entier et rien ne sera fait du tout.
- Vous pouvez recevoir des messages d'erreur cryptiques en raison de la création du tableau de la mauvaise manière.