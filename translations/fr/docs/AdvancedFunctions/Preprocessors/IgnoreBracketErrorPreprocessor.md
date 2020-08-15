# Ignorer le préprocesseur des erreurs entre crochets

Ce préprocesseur définit votre script pour ignorer les erreurs de backet.  
Ceci NE FAIT PAS de quelque manière, forme ou forme magiquement corriger votre script, il supprime le journal des erreurs.

## Appel

Vous pouvez appeler le préprocesseur IgnoreBracketErrors en plaçant `#ignoreBracketErrors` dans votre fichier de script.  
Ce préprocesseur est spécifique à un fichier, donc l'appeler sur un fichier n'affecte pas les autres (au moins pas pour ce que le processeur concerné.

## Ce qu'il fait

Lorsque le préprocesseur est appelé sur un fichier, toutes les erreurs de journalisation sur les parenthèses seront supprimées.  
Cela ne change en aucune manière les lignes affectées, au lieu de cela, le seul changement est que votre journal ne contiendra pas les lignes correspondantes.