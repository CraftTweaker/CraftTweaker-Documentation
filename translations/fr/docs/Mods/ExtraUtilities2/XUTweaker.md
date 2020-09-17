# XUTweaker

Le paquet XUTweaker ajoute plusieurs méthodes statiques.

## Importation du paquet

Si vous voulez raccourcir les appels de méthode ou rencontrer des problèmes que vous pourriez avoir besoin d'importer le package.  
Vous pouvez le faire en utilisant

```zenscript
importer extrautilities2.Tweaker.XUTweaker;
```

## Méthodes

### Autoriser le vol de survie

Permet de voler pour tous les joueurs, de façon permanente.

```zenscript
extrautilities2.Tweaker.XUTweaker.allowSurvivalFlight();
```

### Désactiver les portails du Nether

Empêche les portails du Nether (et tous les portails qui utilisent l'événement de spawn) d'apparaître, de façon permanente.

```zenscript
extrautilities2.Tweaker.XUTweaker.disableNetherPortals();
```

### Vérifier si un joueur est un faux joueur

Renvoie un booléen indiquant si le joueur est un faux joueur.

Nécessite un argument [IPlayer](/Vanilla/Players/IPlayer).

```zenscript
extrautilities2.Tweaker.XUTweaker.isPlayerFake(joueur);
```

### Ouvrir un écran de livres pour le joueur

Essaie d'ouvrir l'écran du livre écrit au joueur donné.

Retourne un booléen indiquant si la commande a été exécutée correctement.  
Nécessite un argument [IPlayer](/Vanilla/Players/IPlayer) .  
Nécessite également un argument de chaîne[] qui sera les pages.

```zenscript
extrautilities2.Tweaker.XUTweaker.openBookScreen(player, pages);
extrautilities2.Tweaker.XUTweaker.openBookScreen(player, ["Page 1", "Page 2"]);
```