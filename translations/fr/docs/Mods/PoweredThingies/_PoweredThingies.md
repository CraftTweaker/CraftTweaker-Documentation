# Thingies alimentées

Les machines non agricoles de Thingies supportées par CraftTweaker.

### Mod Info

Curseforge: <https://minecraft.curseforge.com/projects/powered-thingies>

Github : <https://github.com/faceofcat/Tesla-Powered-Thingies>

Site Web: [https://www.modcrafters.net](https://www.modcrafters.net/?mod=thingies)

### Méthodes d'intégration CT

Toutes les machines intégrées à CT supportent ces méthodes :

```zenscript
XYZ.clear() // effacera l'ensemble du registre des recettes
XYZ.logKeys() // affichera toutes les clés de ce registre dans le journal CT
XYZ. emoveRecipe(key: String)) // supprimera la recette avec cette clé du registre
XYZ.addRecipe(...) // ajoute une nouvelle recette
```

Pour récupérer la classe `Tweaker` pour chaque machine, vous devez utiliser la classe statique `mods.poweredthingies.Tweaker`.