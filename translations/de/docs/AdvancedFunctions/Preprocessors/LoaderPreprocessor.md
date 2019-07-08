# Lade-Präprozessor

Dieser Präprozessor definiert den "Loader" für das Skript.

## Einbinden

Du bindest diesen Präprozessor ein, in dem zu `#loader loaderName` in dein Skript schreibst, wobei `loaderName` der jeweilige Loader ist, welchen du zu diesem Skript zuweisen möchtest.  
Beispiel: `#loader contenttweaker`

## Was er tut

Skripte mit diesem Präprozessor werden nur mit dem spezifizierten Loader geladen.  
Im Beispiel oben wird der Loader von CraftTweaker nichts mit dieser Datei anfangen, dafür wird diese aber vom ContentTweaker-Loader geladen.  
Wenn man diesen Präprozessor nicht spezifiziert, wird standardmäßig der Loader von CraftTweaker verwendet.