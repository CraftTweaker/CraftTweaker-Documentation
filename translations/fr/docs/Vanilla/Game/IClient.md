# Célébration

L'interface client est pour fournir des informations générales sur un Client.  
Ceci est disponible uniquement pour les clients, ils ne fonctionneront pas sur une version !

## Importation du paquet

Il pourrait vous être nécessaire d'importer le paquet si vous rencontrez des problèmes (comme lancer un [Tableau](/AdvancedFunctions/Arrays_and_Loops/)), alors mieux être sûr que désolé et ajouter l'importation.  
`import crafttweaker.api.IClient ;`

## Où trouver la classe du client ?

La classe Client est un symbole enregistré globalement, donc vous n'aurez pas besoin d'importer quoi que ce soit, vous pouvez juste utiliser le mot clé `client`

## Que faire de cela?

`client.player` renvoie le joueur exécutant le client en tant qu'objet [IPlayer](/Vanilla/Players/IPlayer/) .  
`client.language` retourne le langage sur lequel le client s'exécute en tant que chaîne.